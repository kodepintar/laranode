import { Event } from "../../src";
import TestCase from "../TestCase";
import { describe, expect, test } from "vitest";
import DummyEvent from "../app/Events/DummyEvent";
import DummyListener from "../app/Listeners/DummyListener";
import DummyJob from "../app/Job/DummyJob";
//
TestCase.make();
describe("General test", () => {
  test("can get list event listeners", async () => {
    expect(Event.getListener(DummyEvent)[0]).toBe(DummyListener);
  });
  test("can dispatch job", async()=>{
    await DummyEvent.dispatch({foo: "bar"})
    await DummyJob.dispatch({name: "DummyJob",foo:"bar"})
  })
  test("can dispatch job", async()=>{
    await DummyEvent.dispatch({foo: "bar", fail:true})
  })
});
