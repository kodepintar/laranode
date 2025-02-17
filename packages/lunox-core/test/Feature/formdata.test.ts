import { describe, test, expect } from "vitest";
import TestCase from "../TestCase";

TestCase.make();

describe("Formdata Testing", () => {
  test("can parse form data", async () => {
    const res = await agent
      .post("/api/upload?foo[]=bar")
      .type("form")
      .field("bus", "bas")
      .field("address[city]", "jakarta")
      .attach("file", "./package.json");
    expect(res.body.foo).toStrictEqual(["bar"]);
    expect(res.body.bus).toStrictEqual("bas");
    expect(res.body.address).toStrictEqual({city:"jakarta"});
    expect(JSON.parse(res.body.file).name).toBe("@lunoxjs/core");
    expect(JSON.parse(res.body.files).name).toBe("@lunoxjs/core");
    expect(res.body.count).toBe(1);
  });

  test("can parse form data with []", async () => {
    const res = await agent
      .post("/api/upload")
      .type("form")
      .field("foo", "bar")
      .attach("file[]", "./package.json")
      .attach("file[]", "./package.json");
    expect(JSON.parse(res.body.file).name).toBe("@lunoxjs/core");
    expect(JSON.parse(res.body.files).name).toBe("@lunoxjs/core");
    expect(res.body.count).toBe(2);
  });

  test("can parse form data with put method", async () => {
    const res = await agent
      .put("/api/upload")
      .type("form")
      .field("foo", "bar")
      .attach("file", "./package.json");
    expect(res.body.foo).toBe("bar");
    expect(JSON.parse(res.body.file).name).toBe("@lunoxjs/core");
    expect(JSON.parse(res.body.files).name).toBe("@lunoxjs/core");
    expect(res.body.count).toBe(1);
  });

  test("json should not parsed as formdata", async () => {
    const res = await agent.put("/api/upload?bus[]=bas&address[city]=medan").send({ foo: ["bar"] });
    expect(res.body.foo).toStrictEqual(["bar"]);
    expect(res.body.address).toStrictEqual({city: "medan"});
    expect(res.body.bus).toStrictEqual(["bas"]);
  });
});
