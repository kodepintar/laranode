import type { Application } from "@lunoxjs/core";
import type { EventListeners } from "./contracts/console";
import type { Class, MaybePromise } from "@lunoxjs/core/contracts";
import type Listener from "./Listener";
import type DispatchableEvent from "./DispatchableEvent";

class EventManager {
  static symbol = Symbol("EventManager");
  constructor(
    protected app: Application,
    protected listeners: EventListeners = {},
  ) { }
  getListener(event: symbol | string | Class<DispatchableEvent>) {
    if (is_class(event)) {
      return this.listeners[(event as typeof DispatchableEvent).key] || [];
    }
    return this.listeners[event as string | symbol] || [];
  }
  listen<T extends Class<DispatchableEvent> & { key: string | symbol }>(
    event: T,
    listener:
      | Class<Listener>
      | ((event: InstanceType<T>) => MaybePromise<void>),
  ) {
    this.listeners[event.key] = [
      ...this.getListener(event.key),
      listener as any
    ];
  }
}
export default EventManager;
