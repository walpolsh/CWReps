export function solve(arr) {
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
  ];
  let res = arr.map(x => {
    var count = 0;
    x.split("").map((y, j) => {
      y.toLowerCase() === alphabet[j] ? (count += 1) : null;
    });
    return count;
  });

  return res;
}
