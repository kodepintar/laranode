import { ServiceProvider } from "@lunoxjs/core";
import QueueWork from "./commands/QueueWork";
import RunJobCommand from "./commands/RunJobCommand";
import RunScheduleCommand from "./commands/RunScheduleCommand";
import { QueueConfig } from "./contracts/queue";
import QueueManager from "./QueueManager";
import { EventListeners } from "./contracts/console";
import EventManager from "./EventManager";
import Queue from "./facades/Queue";
import SyncQueueConnection from "./queue/connections/SyncQueueConnection";

class EventServiceProvider extends ServiceProvider {
  protected listen: EventListeners = {};
  async register() {
    await this.setupQueue();
    this.registerFacades();
    this.registerCommands();
  }

  private async setupQueue() {
    const config = this.app.config.get<QueueConfig>("queue");
    const drivers = Object.values(config.connections).map((c) => c.driver);
    QueueManager.drivers["sync"] = SyncQueueConnection;
    for (let driver of drivers) {
      if (driver !== "sync") {
        try {
          const { Connection } = await import(`@lunoxjs/event-${driver}`);
          QueueManager.drivers[driver] = Connection;
        } catch (e) {
          //pass
        }
      }
    }
  }
  private registerCommands() {
    this.commands([RunScheduleCommand, RunJobCommand, QueueWork]);
  }

  private registerFacades() {
    this.app.singleton(QueueManager.symbol, () => new QueueManager(this.app));
    this.app.singleton(
      EventManager.symbol,
      () => new EventManager(this.app, this.listen),
    );
  }
}
export default EventServiceProvider;
