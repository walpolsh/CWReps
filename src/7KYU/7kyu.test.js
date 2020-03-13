import { capitalize } from "./capitalize";
// import { menFromBoys } from "./menFromBoys";
// import { number } from "./testing123";
function expectToBe(fn, input, output) {
  return it(`expect ${fn.name}('${input}') to be ${"" + output})}`, () => expect(fn(input)).toBe(output));
}
// template
// it('🤙', () => {
// expect().toBe()
// })

// expectToBe(calculate, "1plus2plus3plus4", "10");

// it("🤙", () => {
//   expect(londonCityHacker([12, "Central", "Circle", 21])).toBe("£7.80");
// });
// it("🤙", () => {
//   expect(londonCityHacker(["Piccidilly", 56])).toBe("£3.90");
// });
// it("🤙", () => {
//   expect(londonCityHacker(["Northern", "Central", "Circle"])).toBe("£7.20");
// });
// it("🤙", () => {
//   expect(londonCityHacker(["Piccidilly", 56, 93, 243])).toBe("£5.40");
// });
// it("🤙", () => {
//   expect(londonCityHacker([386, 56, 1, 876])).toBe("£3.00");
// });
// it("🤙", () => {
//   expect(londonCityHacker([])).toBe("£0.00");
// });

// it("🤙", () => {
//   expect(duplicates([1, 2, 5, 6, 5, 2])).toBe(2);
// });
// it("🤙", () => {
//   expect(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])).toBe(4);
// });
// it("🤙", () => {
//   expect(duplicates([0, 0, 0, 0, 0, 0, 0])).toBe(3);
// });
// it("🤙", () => {
//   expect(duplicates([1000, 1000])).toBe(1);
// });
// it("🤙", () => {
//   expect(duplicates([])).toBe(0);
// });
// it("🤙", () => {
//   expect(duplicates([54])).toBe(0);
// });

// it("🤙", () => {
//   expect(solve(["abode", "ABc", "xyzD"])).toStrictEqual([4, 3, 1]);
// });
// it("🤙", () => {
//   expect(solve(["abide", "ABc", "xyz"])).toStrictEqual([4, 3, 0]);
// });
// it("🤙", () => {
//   expect(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])).toStrictEqual([
//     6,
//     5,
//     7
//   ]);
// });
// it("🤙", () => {
//   expect(solve(["encode", "abc", "xyzD", "ABmD"])).toStrictEqual([1, 3, 1, 3]);
// });
// it("🤙", () => {
//   expect(incrementer([])).toStrictEqual([]);
// });
// it("🤙", () => {
//   expect(incrementer([1, 2, 3])).toStrictEqual([2, 4, 6]);
// });
// it("🤙", () => {
//   expect(incrementer([4, 6, 7, 1, 3])).toStrictEqual([5, 8, 0, 5, 8]);
// });
// it("🤙", () => {
//   expect(incrementer([3, 6, 9, 8, 9])).toStrictEqual([4, 8, 2, 2, 4]);
// });
// it("🤙", () => {
//   expect(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8])).toStrictEqual(
//     [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
//   );
// });
// it("🤙", () => {
//   expect(incrementer([])).toStrictEqual([]);
// });
// it("🤙", () => {
//   expect(stray([1, 1, 2])).toBe(2);
// });
// it("🤙", () => {
//   expect(stray([17, 17, 3, 17, 17, 17, 17])).toBe(3);
// });
// it("🤙", () => {
//   expect(stray([8, 1, 1, 1, 1, 1])).toBe(8);
// });

// it("🤙", () => {
//   expect(dontGiveMeFive(1, 9)).toBe(8);
// });
// it("🤙", () => {
//   expect(dontGiveMeFive(4, 17)).toBe(12);
// });
// it("🤙", () => {
//   expect(sequenceSum(2, 6, 2)).toBe(12);
// });
// it("🤙", () => {
//   expect(sequenceSum(1, 5, 1)).toBe(15);
// });
// it("🤙", () => {
//   expect(sequenceSum(1, 5, 3)).toBe(5);
// });

// it("🤙", () => {
//   expect(SeriesSum(1)).toBe("1.00");
// });
// it("🤙", () => {
//   expect(SeriesSum(2)).toBe("1.25");
// });
// it("🤙", () => {
//   expect(SeriesSum(3)).toBe("1.39");
// });
// it("🤙", () => {
//   expect(SeriesSum(4)).toBe("1.49");
// });
// it("🤙", () => {
//   expect(SeriesSum(0)).toBe("0.00");
// });

// it("🤘", () => {
//   expect(calculateYears(1000, 0.05, 0.18, 1100)).toBe(3);
// });
// it("🤘", () => {
//   expect(calculateYears(1000, 0.05, 0.18, 1100)).toBe(3);
// });
// it("🤘", () => {
//   expect(calculateYears(1000, 0.01625, 0.18, 1200)).toBe(14);
// });
// it("🤘", () => {
//   expect(calculateYears(1000, 0.05, 0.18, 1000)).toBe(0);
// });
