import type { QueueJobSchema } from "../contracts";
import QueueJob from "./QueueJob";

export default class JobFailed extends QueueJob {
  static key = Symbol("JobFailed");
  protected metaUrl?: string | undefined = import.meta.url;

  constructor(
    public connectionName: string,
    public job: QueueJobSchema,
    public exception: Error,
  ) {
    super();
  }
}
