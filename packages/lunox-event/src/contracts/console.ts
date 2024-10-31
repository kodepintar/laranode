import { Class, MaybePromise } from "@lunoxjs/core/contracts";
import Listener from "../Listener";
import Schedule from "../Schedule";
import type DispatchableEvent from "../DispatchableEvent";

export interface HasSchedule {
  schedule(schedule: Schedule): void;
}
export type EventListeners = {
  [key: symbol | string]: (Class<Listener>|((event:DispatchableEvent)=>MaybePromise<void>))[];
};
