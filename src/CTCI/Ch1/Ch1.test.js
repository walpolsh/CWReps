import { isUnique } from "./isUnique";
function expectItToBe(fn, input, output) {
  return it(`expect ${fn.name}(${input}) to be ${"" + output})}`, () =>
    expect(fn(input)).toBe(output));
}

expectItToBe(isUnique, "cat", true);
expectItToBe(isUnique, "dunno", false);
