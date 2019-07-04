function duplicates(arr, obj = {}, arr2 = []) {
  return arr.map(x => {
    if (!obj[x]) {
      obj[`${x}`] = 1;
    } else {
      obj[`${x}`]++;
    }
    return obj.x;
  });
}

export const dup = console.log(
  duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]),
  duplicates([0, 1, 2, 3, 4, 5])
);
