function expectToBe(fn, input, output) {
  return it(`expect ${fn.name}('${input}') to be ${"" + output})}`, () =>
    expect(fn(input)).toBe(output));
}

import { isUnique, isUnique2 } from "./isUnique";
expectToBe(isUnique, "cat", true);
expectToBe(isUnique, "dunno", false);

import { checkPermutation, checkPermutation2 } from "./checkPermutation";
expectToBe(checkPermutation, ["aa", "aa"], true);
expectToBe(checkPermutation, ["cat", "tac"], true);
expectToBe(checkPermutation, ["coat", "taco"], true);
expectToBe(checkPermutation, ["pen", "bug"], false);
expectToBe(checkPermutation, ["knife", "bag"], false);

import { URLfy } from "./URLfy";
expectToBe(URLfy, "Mr. Paul Walsh   ", "Mr.%20Paul%20Walsh");
expectToBe(URLfy, " Mr.  Paul   Walsh   ", "Mr.%20Paul%20Walsh");

import { oneAway } from "./oneAway";
expectToBe(oneAway, ["pale", "ple"], true);
expectToBe(oneAway, ["pales", "pale"], true);
expectToBe(oneAway, ["pale", "bale"], true);
expectToBe(oneAway, ["pale", "bake"], false);

import { stringCompression } from "./stringCompression";
expectToBe(stringCompression, "aaaaaa", "a6");
expectToBe(stringCompression, "aabcccccaaa", "a2b1c5a3");
console.log("aabcccccaaa", stringCompression("aabcccccaaa"), "a2b1c5a3");
