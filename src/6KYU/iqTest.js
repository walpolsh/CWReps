function iqTest(numbers) {
  let numSplit = numbers.split(" ");
  let f1 = numSplit.filter(x => x % 2 === 0);
  let f2 = numSplit.filter(x => x % 2 !== 0);

  if (f1.length === 1) {
    return numSplit.indexOf(f1.join("")) + 1;
  } else {
    return numSplit.indexOf(f2.join("")) + 1;
  }
}
// console.log(
//   "f1",
//   f1,
//   f1.length,
//   "f2",
//   f2,
//   f2.length,
//   "numSplit",
//   numSplit,
//   numSplit.length
// );
// console.log(
//   "f1, f1.length,f2,f2.length,numSplit.indexOf(f1),numSplit.indexOf(f2)",
//   f1,
//   f1.length,
//   f2,
//   f2.length,
//   numSplit,
//   numSplit.indexOf(f2),
//   numSplit,
//   numSplit.indexOf(f2)
// );

//map numbers
//if one number is not divisible by two return that index + 1
//
export const iq = console.log(
  iqTest("2 4 7 8 10"),
  3,
  iqTest("1 2 2"),
  1,
  iqTest("1 2 1 1"),
  2,
  iqTest("43 28 1 91"),
  2
);
