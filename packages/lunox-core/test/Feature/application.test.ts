import { describe, test, expect } from "vitest";
import { Application, Router } from "../../src";
import TestCase from "../TestCase";

TestCase.make();

describe("Application Testing", () => {
  test("can run application", async () => {
    expect(app() instanceof Application).toBe(true);
    expect(app(Router) instanceof Router).toBe(true);
    expect(app().make(Router) instanceof Router).toBe(true);
  });
});
