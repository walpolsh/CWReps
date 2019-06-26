// should take linear time
export function partsSums(arr, index = 0, res = []) {
  while (index <= arr.length) {
    res.push(arr.slice(index, arr.length).reduce((a, c) => a + c, 0));
    index++;
  }
  return res;
}

console.log(partsSums([1, 2, 3]));
console.log(
  partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
);

//function partsSums(arr, index = 0, res2 = []) {
// while (index <= arr.length) {
//   let res = [];
//   for (let i = index; i < arr.length; i++) {
//     res.push(arr[i]);
//   }
//   res2.push(res.reduce((acc, cur) => acc + cur, 0));
//   index++;
// }
// return res2;
// }
