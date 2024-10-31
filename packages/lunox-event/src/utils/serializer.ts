let serialize: (value: any) => Buffer;
let deserialize: (value: any) => any;
if (process.versions.bun) {
  // this code will only run when the file is run with Bun
  const JSC = await import("bun:jsc");
  serialize = JSC.serialize;
  deserialize = JSC.deserialize;
} else {
  const V8 = await import("v8");
  serialize = V8.serialize;
  deserialize = V8.deserialize;
}
export { serialize, deserialize };
