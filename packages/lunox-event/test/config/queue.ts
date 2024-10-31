import { QueueConfig } from "../../src/contracts";

export default {
  defaultConnection: "sync",
  connections: {
    sync: {
      driver: "sync",
    }
  },
} satisfies QueueConfig;
