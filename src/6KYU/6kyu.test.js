import { countSmileys } from "./countSmileys";
import { stringTransformer } from "./stringTransformer";
import { wave } from "./wave";
import { times } from "./times";
import { sortString } from "./sortString";
import { high } from "./high";
import { tickets } from "./tickets";
import { cleanString } from "./cleanString";
import { solution } from "./splitStrings";
import { deleteNth } from "./deleteNth";
function expectToBe(fn, input, output) {
  return it(`expect ${fn.name}('${input}') to be ${"" + output})}`, () => expect(fn(input)).toBe(output));
}
function expectToStrictEqual(fn, input, output) {
  return it(`expect ${fn.name}('${input}') to be ${"" + output})}`, () => expect(fn(input)).toStrictEqual(output));
}

// expectToBe(deleteNth, ([20, 37, 20, 21], 1), [20, 37, 21]);

expectToStrictEqual(solution, "abc", ["ab", "c_"]);
// expectToStrictEqual(solution, "abcdef", ["ab", "cd", "ef"]);
// expectToBe(high, "man i need a taxi up to ubud", "taxi");
// expectToBe(high, "what time are we climbing up the volcano", "volcano");
// expectToBe(high, "take me to semynak", "semynak");
// expectToBe(
//   high,
//   "odkwjavgnnqzimktn bubdmnaptgqflkopc wpobexowjpvwawjum wyilrschlyjqrluzd",
//   "wpobexowjpvwawjum"
// );

// expectToBe(tickets, [25, 50, 50], "YES");
// expectToBe(tickets, [25, 100], "NO");
// expectToBe(tickets, [25, 25, 25, 25, 25, 100, 100], "NO");

// it("🤙", () => {
//   expect().toBe();
// });
// it("🤙", () => {
//   expect(sortString("foos", "of")).toBe("oofs");
// });
// it("🤙", () => {
//   expect(sortString("string", "gnirts")).toBe("gnirts");
// });
// it("🤙", () => {
//   expect(sortString("banana", "abn")).toBe("aaabnn");
// });

// it("Should repeat callback proper number of times:", function() {
//   var x = 0;
//   (10).times(() => (x += 10));
//   expect(x).toBe(100);
//   (10).times(() => (x -= 10));
//   expect(x).toBe(0);
// });
// it("Should round decimals and repeat proper number of times:", function() {
//   var a = [];
//   (5.5).times(() => a.push("a"));
//   expect(a).toBe(["a", "a", "a", "a", "a", "a"]);
//   (3.2).times(() => a.pop());
//   expect(a).toBe(["a", "a", "a"]);
// });
// it("Should do nothing for 0 and negative numbers:", function() {
//   var c = [""];
//   (0).times(() => c.pop());
//   expect(c).toBe([""]);
//   (-1).times(() => c.pop());
//   expect(c).toBe([""]);
// });
// it("Should throw an error if function not provided:", function() {
//   expectError(function() {
//     (10).times();
//   });
//   expectError(function() {
//     (10).times((x = 1));
//   });
// });

// it("🤙", () => {
//   expect(stringTransformer("Example string")).toBe("STRING eXAMPLE");
// });
// let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
// it("🤙", () => {
//   expect(wave("hello")).toStrictEqual(result);
// });

// it("🤙", () => {
//   expect(wave("codewars")).toStrictEqual([
//     "Codewars",
//     "cOdewars",
//     "coDewars",
//     "codEwars",
//     "codeWars",
//     "codewArs",
//     "codewaRs",
//     "codewarS"
//   ]);
// });

// it("🤙", () => {
//   expect(wave("")).toStrictEqual([]);
// });

// it("🤙", () => {
//   expect(wave("two words")).toStrictEqual([
//     "Two words",
//     "tWo words",
//     "twO words",
//     "two Words",
//     "two wOrds",
//     "two woRds",
//     "two worDs",
//     "two wordS"
//   ]);
// });

// it("🤙", () => {
//   expect(wave("gap")).toStrictEqual([" Gap ", " gAp ", " gaP "]);
// });
// it("🤙", () => {
//   expect(countSmileys([])).toBe(0);
// });

// it("🤙", () => {
//   expect(countSmileys([":D", ":~)", ";~D", ":)"])).toBe(4);
// });
// it("🤙", () => {
//   expect(countSmileys([":)", ":(", ":D", ":O", ":;"])).toBe(2);
// });
// it("🤙", () => {
//   expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
// });
// it("🤙", () => {
//   expect(countSmileys([":o)", ";~)", ";-)", ";)", ";~>", ";~D", ";D"])).toBe(1);
// });
