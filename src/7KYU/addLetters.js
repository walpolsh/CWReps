function addLetters(...letters) {
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
  let arr = alphabet.map((letter, i) => (letters.includes(letter) ? i + 1 : 0));
  let result = arr.reduce((a, c) => a + c, 0);
  console.log(result);
  return alphabet[result - 1];
}
