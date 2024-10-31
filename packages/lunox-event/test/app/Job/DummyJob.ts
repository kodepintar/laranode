import { Dispatchable } from "../../../src";

export default class DummyJob extends Dispatchable {
  protected shouldQueue: boolean = true;
  constructor(public data: any) {
    super();
  }
  async handle() {
    console.log(this.data);
  }
}
