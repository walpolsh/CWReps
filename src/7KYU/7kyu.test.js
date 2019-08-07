import { calculateYears } from "./calculateYears";
import { SeriesSum } from "./SeriesSum";
import { sequenceSum } from "./sequenceSum";
import { dontGiveMeFive } from "./dontGiveMeFive";

// template
// it('🤙', () => {

// })
it("🤙", () => {
  expect(dontGiveMeFive(1, 9)).toBe(8);
});
it("🤙", () => {
  expect(dontGiveMeFive(4, 17)).toBe(12);
});
it("🤙", () => {});
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
