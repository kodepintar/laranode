import { QueueJobSchema } from "../contracts";
import QueueJob from "./QueueJob";

export default class JobProcessing extends QueueJob {
  static key = Symbol("JobProcessing");
  protected metaUrl?: string | undefined = import.meta.url;
  constructor(
    public connectionName: string,
    public job: QueueJobSchema,
  ) {
    super();
  }
}
