export function high(str) {
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
  let hash = {};
  str
    .toLowerCase()
    .split(" ")
    .forEach(x => {
      hash[x] = x
        .split("")
        .map((y, j) => alphabet.indexOf(y) + 1)
        .reduce((a, c) => a + c, 0);
    });
  return Object.keys(hash)
    .reverse()
    .reduce((a, c) => (hash[a] > hash[c] ? a : c));
}
