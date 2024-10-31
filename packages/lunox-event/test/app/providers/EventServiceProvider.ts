import { Event, Queue, EventServiceProvider as ServiceProvider } from "../../../src";
import DummyEvent from "../Events/DummyEvent";
import DummyListener from "../Listeners/DummyListener";
class EventServiceProvider extends ServiceProvider {
  protected listen = {
    [DummyEvent.key]: [DummyListener],
  };
  async boot(): Promise<void> {
    Event.listen(DummyEvent, (event) => {
      console.log("listener run", event.data);
    });
    Queue.before((e)=>{
      console.log("processing ", e.payload())
    })
    Queue.after((e)=>{
      console.log("processed", e.payload());
    })
    Queue.failing((e)=>{
      console.log("failing", e.payload(), e.exception);
    })
  }
}
export default EventServiceProvider;
