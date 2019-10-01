function findMissingLetter(array) {
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
  let result;
  return array
    .sort((a, b) => a - b)
    .map((x, i) =>
      array[i + 1] === undefined
        ? ""
        : array[i + 1].toLowerCase() !== alphabet[alphabet.indexOf(x) + 1]
        ? alphabet[i + 1]
        : array[i + 1]
    );
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "P");
