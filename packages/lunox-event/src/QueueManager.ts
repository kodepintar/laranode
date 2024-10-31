import { Application, handleMagicGet, useMagic } from "@lunoxjs/core";
import { Class } from "@lunoxjs/core/contracts";
import { QueueConnection } from "./contracts/queue";
import Dispatchable from "./Dispatchable";
import JobFailed from "./events/JobFailed";
import type { MaybePromise } from "@lunoxjs/core/contracts";
import Event from "./facades/Event";
import JobProcessing from "./events/JobProcessing";
import JobProcessed from "./events/JobProcessed";

export class QueueManager {
  constructor(protected app: Application) { }
  static symbol = Symbol("QueueManager");
  static drivers: Record<string, Class<QueueConnection>> = {};
  protected static internalJobs: Record<string | symbol, Class<Dispatchable>> =
    {};
  static registerJob(key: string | symbol, job: Class<Dispatchable>) {
    this.internalJobs[key] = job;
  }
  getInternalJob(key: string | symbol) {
    return (this.constructor as typeof QueueManager).internalJobs[key];
  }
  defaultDriver(connection = this.defaultConnection()) {
    return this.config(connection).driver;
  }
  defaultConnection() {
    return this.app.config.get("queue.defaultConnection");
  }
  config(connection = this.defaultConnection()) {
    return this.app.config.get("queue.connections." + connection);
  }
  driver(connection = this.defaultConnection()) {
    const driver = this.defaultDriver(connection);
    const driverConfig = this.config(connection);
    return new QueueManager.drivers[driver](this.app, driverConfig);
  }

  before(callback: (e: JobProcessing) => MaybePromise<void>) {
    Event.listen(JobProcessing, callback);
  }

  after(callback: (e: JobProcessed) => MaybePromise<void>) {
    Event.listen(JobProcessed, callback);
  }

  failing(callback: (e: JobFailed) => MaybePromise<void>) {
    Event.listen(JobFailed, callback);
  }

  public __get(method: keyof QueueConnection): any {
    return handleMagicGet(this.driver(), method);
  }
}
export default useMagic<typeof QueueManager & Class<QueueConnection>>(
  QueueManager,
);
