export function yesNo(arr) {
  let arr2 = [];
  let arr3 = [];
  let bool = true;
  while (arr.length > 0) {
    arr3 = [];
    for (let i = 0; i < arr.length; i++) {
      if (bool) {
        arr2.push(arr[i]);
      } else {
        arr3.push(arr[i]);
      }
      bool = !bool;
    }
    arr = arr3;
  }
  return arr2.reduce((a, c) => a.concat(c), []);
}

console.log("expected", [1, 3, 5, 7, 9, 2, 6, 10, 8, 4], "recieved", yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  "expected",
  ["this", "is", "the", "right", "code"],
  "recieved",
  yesNo(["this", "code", "is", "right", "the"])
);
console.log(
  "expected",
  ["Y", "k", "b", "v", "T", "d", "i", "v"],
  "recieved",
  yesNo(["Y", "T", "k", "i", "b", "d", "v", "v"])
);
