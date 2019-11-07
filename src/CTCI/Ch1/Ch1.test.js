import { checkPermutation, checkPermutation2 } from "./checkPermutation";
import { isUnique, isUnique2 } from "./isUnique";
import { URLfy } from "./URLfy";
function expectToBe(fn, input, output) {
  return it(`expect ${fn.name}('${input}') to be ${"" + output})}`, () =>
    expect(fn(input)).toBe(output));
}

expectToBe(isUnique, "cat", true);
expectToBe(isUnique, "dunno", false);

expectToBe(checkPermutation, ["aa", "aa"], true);
expectToBe(checkPermutation, ["cat", "tac"], true);
expectToBe(checkPermutation, ["coat", "taco"], true);
expectToBe(checkPermutation, ["pen", "bug"], false);
expectToBe(checkPermutation, ["knife", "bag"], false);
expectToBe(checkPermutation2, ["aa", "aa"], true);
expectToBe(checkPermutation2, ["cat", "tac"], true);
expectToBe(checkPermutation2, ["coat", "taco"], true);
expectToBe(checkPermutation2, ["pen", "bug"], false);
expectToBe(checkPermutation2, ["knife", "bag"], false);

expectToBe(URLfy, "Mr. Paul Walsh   ", "Mr.%20Paul%20Walsh");
expectToBe(URLfy, " Mr.  Paul   Walsh   ", "Mr.%20Paul%20Walsh");
