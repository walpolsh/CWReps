// const sequenceSum = (begin, end, step) => {
//   let cur = begin;
//   let res = [begin];

//   while (cur < end) {
//     res.push((cur += step));
//   }
//   const sum = (a, c) => a + c;

//   return res.filter(x => x <= end).reduce(sum, 0);
// };
const sequenceSum = (b, e, s) => (b > e ? 0 : b + sequenceSum(b + s, e, s));

console.log(sequenceSum(2, 6, 2));

console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
