import { deserialize, serialize } from "../../utils/serializer";
import {
  DispatchableConfig,
  QueueConnection,
  QueueDatabaseConnection,
  QueueJobFailedSchema,
  QueueJobSchema,
  QueuePayload,
  QueuePoolConfig,
} from "../../contracts";
import Dispatchable from "../../Dispatchable";
import { Application, RuntimeException } from "@lunoxjs/core";
import { Class } from "@lunoxjs/core/contracts";
import dayjs from "dayjs";
import JobProcessing from "../../events/JobProcessing";
import JobProcessed from "../../events/JobProcessed";
import JobFailed from "../../events/JobFailed";

export default abstract class BaseQueueConnection<
  C extends Record<string, any> = QueueDatabaseConnection,
> implements QueueConnection
{
  constructor(
    protected app: Application,
    protected config: C,
  ) {}

  public async add(
    job: Dispatchable,
    args: any[],
    config?: DispatchableConfig,
  ): Promise<void> {
    return this.storeJob({
      queue: config?.connection || this.config.queue,
      payload: serialize({
        displayName: job.constructor.name,
        job: job.displayName(),
        isListener: job.isListenerJob(),
        args,
      } satisfies QueuePayload),
      available_at: config?.delay || new Date(),
    });
  }

  public async pool({ queue = "default", tries = 1 }: QueuePoolConfig) {
    const queueJob = await this.getLastJob(queue);
    if (!queueJob) return;
    let job: Dispatchable | undefined;
    try {
      const payload = deserialize(queueJob?.payload as any) as QueuePayload;
      let jobClass: Class<Dispatchable>;
      jobClass = (await import(payload.job)).default;
      if (!jobClass)
        throw new RuntimeException(`Job not found: ${payload.job}`);
      job = new jobClass(...payload.args) as Dispatchable;
      queueJob.reserved_at = new Date();
      queueJob.attempts++;
      await this.updateJob(queueJob);
      await JobProcessing.dispatch(queue, queueJob);
      if (payload.isListener) {
        await job.handle(...payload.args);
      } else {
        await job.handle();
      }
      await this.removeJob(queueJob);
    } catch (e) {
      if (e instanceof Error) {
        // if attempts is less than max retries then update available_at + retryAfter
        if (queueJob.attempts < (job?.tries || tries)) {
          queueJob.available_at = dayjs()
            .add(this.config.retryAfter, "seconds")
            .toDate();
          await this.updateJob(queueJob);
        } else {
          // if attempts is greater than max retries then mark job as failed
          const failedJob = {
            queue,
            failed_at: new Date(),
            payload: queueJob?.payload,
            exception: e.stack || e.message,
          };
          await this.storeFailedJob(failedJob);
          await this.removeJob(queueJob);
          try {
            await job?.failed?.(e);
            await JobFailed.dispatch(queue, queueJob, e);
          } catch (e) {
            //pass
          }
        }
      }
    } finally {
      await JobProcessed.dispatch(queue, queueJob);
    }
  }

  protected abstract storeJob(
    data: Pick<QueueJobSchema, "queue" | "payload" | "available_at">,
  ): Promise<void>;
  protected abstract removeJob(queueJob: QueueJobSchema): Promise<void>;
  protected abstract updateJob(queueJob: QueueJobSchema): Promise<void>;
  protected abstract storeFailedJob(
    data: Pick<
      QueueJobFailedSchema,
      "queue" | "payload" | "failed_at" | "exception"
    >,
  ): Promise<void>;
  protected abstract getLastJob(
    queue: string,
  ): Promise<QueueJobSchema | undefined | null>;
}
