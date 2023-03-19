import { assert, describe, it } from "@/test/deps.ts";
import { dummyExport } from "@/mod.ts";

describe(`mod.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(dummyExport);
  });
});
