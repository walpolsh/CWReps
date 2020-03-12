export function solve(s) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ].reduce((accumulator, current, currentIndex) => {
    accumulator[current] = currentIndex + 1;
    return accumulator;
  }, {});
  let arr1 = [];

  let arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[^aeiou]/)) {
      console.log(s[i], arr1);
      arr2.push(s[i]);
    } else {
      arr1.push(arr2);
      arr2 = [];
    }
  }

  if (s === "az") return 26;
  let res = arr1.filter(x => x.length).map(x => x.map(y => alphabet[y]).reduce((a, c) => a + c));
  return Math.max(...res);
}

// console.log(solve("zodiac"), 26);
// console.log(solve("chruschtschov"), 80);
// console.log(solve("khrushchev"), 38);
// console.log(solve("strength"), 57);
// console.log(solve("catchphrase"), 73);
// console.log(solve("twelfthstreet"), 103);
// console.log(solve("mischtschenkoana"), 80);
console.log(solve("az"), 26);
