import { RuntimeException } from "@lunoxjs/core";
import Dispatchable from "./Dispatchable";
import Event from "./facades/Event";
import { DispatchableConfig } from "./contracts/job";
import type { Class, MaybePromise } from "@lunoxjs/core/contracts";
import type Listener from "./Listener";
import QueueManager from "./QueueManager";

class DispatchableEvent extends Dispatchable {
  static hasListener = true;
  static key: symbol | string;
  protected path = base_path("app/Events");
  async handle(
    event: DispatchableEvent,
    config?: DispatchableConfig,
  ): Promise<void> {
    const key = (this.constructor as typeof DispatchableEvent).key;
    if (!key) {
      throw new RuntimeException(
        this.constructor.name +
          ".key is not defined. Event should has unique key to be dispatched.",
      );
    }
    const listeners = Event.getListener(key);
    for (const listener of listeners) {
      if (is_class(listener)) {
        const listenerInstance = new (listener as unknown as Class<Listener>)(event);
        if (listenerInstance.isShouldQueue()) {
          await (await this.getQueueManager()).add(listenerInstance as unknown as Dispatchable, [event], config);
        } else {
          await listenerInstance.handle(event);
        }
      } else {
        await (listener as (event: DispatchableEvent)=>MaybePromise<void>).call(this, event);
      }
    }
  }

  // this to avoid circular dependency
  protected async getQueueManager(){
    return app<InstanceType<typeof QueueManager>>((await import("./QueueManager")).default.symbol)
  }
}
export default DispatchableEvent;
