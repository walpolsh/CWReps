function duplicates(arr, count = 0, obj = {}) {
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach(x => {
    if (obj[x]) {
      obj[x] += 1;
    } else {
      obj[x] = 1;
    }
  });
  Object.values(obj).forEach(x => (x > 1 ? count++ : ""));

  return count;
}
export const findAllPairs = console.log(
  "duplicates([1, 2, 2, 3])",
  duplicates([1, 2, 2, 3]),
  1,
  "duplicates([1, 2, 2, 3, 1])",
  duplicates([1, 2, 2, 3, 1]),
  2,
  "duplicates([1, 2, 5, 6, 5, 2])",
  duplicates([1, 2, 5, 6, 5, 2]),
  2,
  "duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])",
  duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]),
  4,
  "duplicates([0, 0, 0, 0, 0, 0, 0])",
  duplicates([0, 0, 0, 0, 0, 0, 0]),
  3,
  "duplicates([1000, 1000])",
  duplicates([1000, 1000]),
  1,
  "duplicates([])",
  duplicates([]),
  0,
  "duplicates([54])",
  duplicates([54]),
  0
);
