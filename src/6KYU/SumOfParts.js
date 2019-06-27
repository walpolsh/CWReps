//console.log("arr, index, res", arr, index, res);
function partsSums(arr, index = 0, res = []) {
  for (let i = index; index <= arr.length; i++) {
    res.push(arr.slice(index, arr.length).reduce((a, c) => a + c, 0));
    index++;
  }
  return res;
}
console.log("input1 = [1, 2, 3]", partsSums([1, 2, 3]));
console.log(
  partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
);

//I need to get rid of the reduction step with math I think.
//solution 3 - basically the same as the while loop
function partsSums2(arr, index = 0, res = []) {
  for (let i = index; index <= arr.length; i++) {
    res.push(arr.slice(index, arr.length).reduce((a, c) => a + c, 0));
    index++;
  }
  return res;
}

// solution 2 - should take linear time... too slow
export function partsSum(arr, index = 0, res = []) {
  while (index <= arr.length) {
    res.push(arr.slice(index, arr.length).reduce((a, c) => a + c, 0));
    index++;
  }
  return res;
}

// solution 1 - too slow
function partsSums4(arr, index = 0, res2 = []) {
  while (index <= arr.length) {
    let res = [];
    for (let i = index; i < arr.length; i++) {
      res.push(arr[i]);
    }
    res2.push(res.reduce((acc, cur) => acc + cur, 0));
    index++;
  }
  return res2;
}
