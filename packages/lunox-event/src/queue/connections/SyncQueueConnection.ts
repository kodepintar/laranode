import { serialize } from "v8";
import {
  DispatchableConfig,
  QueueConnection,
  QueueSyncConnection,
  QueuePoolConfig,
  QueuePayload,
} from "../../contracts";
import Dispatchable from "../../Dispatchable";
import { Application } from "@lunoxjs/core";
import JobProcessing from "../../events/JobProcessing";
import { QueueJobSchema } from "../../contracts/model";
import JobProcessed from "../../events/JobProcessed";
import JobFailed from "../../events/JobFailed";

export default class SyncQueueConnection<
  C extends Record<string, any> = QueueSyncConnection,
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
    const queueJob: QueueJobSchema = {
      id: 0,
      queue: "default",
      payload: serialize({
        displayName: job.constructor.name,
        job: job.displayName(),
        isListener: job.isListenerJob(),
        args,
      } satisfies QueuePayload),
      available_at: config?.delay || new Date(),
      attempts: 0,
    };
    try {
      await JobProcessing.dispatch(queueJob.queue, queueJob);
      if (job.isListenerJob()) {
        await job.handle(...args);
      } else {
        await job.handle();
      }
      queueJob.reserved_at = new Date();
      queueJob.attempts++;
      await JobProcessed.dispatch(queueJob.queue, queueJob);
    } catch (e) {
      if (e instanceof Error) {
        await JobFailed.dispatch(queueJob.queue, queueJob, e);
      }
    }
  }

  public async pool(_: QueuePoolConfig) {
    // pass, nothing todo  here
  }
}
