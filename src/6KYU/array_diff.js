function array_diff(a, b) {
  if (b.length === 0) return a;
  if (a.length === 0) return [];
  return a.filter(x => !b.includes(parseInt(x)));
}
export const diff = console.log(
  array_diff([1, 2, 2], [1]),
  [2, 2],
  "a was [1,2,2], b was [1] - Expected: [2, 2]",
  array_diff([], [4, 5]),
  [],
  "a was [], b was [4,5]",
  array_diff([3, 4], [3]),
  [4],
  "a was [3,4], b was [3]",
  array_diff([1, 8, 2], []),
  [1, 8, 2],
  "a was [1,8,2], b was []",
  array_diff(
    [-9, -16, 19, 1, 18, -4, 18, 12, -19, 7, 20, 5, 13],
    [5, -16, -9, 19, 18, -19, 12, 13, -4]
  ),
  [1, 7, 20],
  "Should work for random arrays too - Expected: [1, 7, 20]",
  array_diff([-4, -15, 19, -5, -19, -5, -8, 9, -4], [-15, -4, 9, -4]),
  [19, -5, -19, -5, -8],
  "Should work for random arrays too - Expected: [19, -5, -19, -5, -8]"
);
