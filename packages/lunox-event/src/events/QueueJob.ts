import { deserialize } from "../utils/serializer";
import { QueueJobSchema } from "../../contracts";
import DispatchableEvent from "../DispatchableEvent";
import { QueuePayload } from "../contracts";

export default class QueueJob extends DispatchableEvent {
  public job!: QueueJobSchema;
  payload(): QueuePayload{
    return deserialize(this.job.payload);
  }
}
