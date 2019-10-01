var ownedCatAndDog = function(catYears, dogYears) {
  // Your code here!
  let result1 = 0;
  catYears >= 15
    ? (result1 = 1)
    : catYears >= 24
    ? (result = 2)
    : catYears >= 28 && catYears % 4
    ? (result += Math.floor(catYears / 4))
    : 0;

  return [result1, 0];
};

console.log(ownedCatAndDog(15, 15), [1, 1]);
console.log(ownedCatAndDog(24, 24), [2, 2]);
console.log(ownedCatAndDog(56, 64), [10, 10]);
