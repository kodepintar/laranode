import { QueueJobSchema } from "../contracts";
import QueueJob from "./QueueJob";

export default class JobProcessed extends QueueJob {
  static key = Symbol("JobProcessed");
  protected metaUrl?: string | undefined = import.meta.url;
  constructor(
    public connectionName: string,
    public job: QueueJobSchema,
  ) {
    super();
  }
}
