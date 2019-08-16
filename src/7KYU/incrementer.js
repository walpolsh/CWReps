export function incrementer(nums) {
  return nums.map((x, i) =>
    (x + i + 1).toString().length >= 1
      ? parseInt((x + i + 1).toString()[(x + i + 1).toString().length - 1])
      : x + i + 1
  );
}
