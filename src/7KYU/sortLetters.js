function sortLetters(arr) {
  let vow = ["A", "E", "I", "O", "U"];
  let vowels = [];
  let consonants = [];
  arr.map(x =>
    x.map(y => {
      if (typeof y === "string") {
        y = y.toUpperCase();
        if (vow.includes(y)) {
          vowels.push(y);
        } else {
          consonants.push(y);
        }
      }
    })
  );

  return [vowels, consonants];
}

// y.match(/[a-zA-Z]/gi).map(x =>
//   x.includes(vowels) ? vowels2.push(x) : consonants.push(x)
// );
export const sort = console.log(
  sortLetters([[1, "a", "H"], [3, "o", "s"], [4, "E", "i"]]),
  "expects",
  [["A", "O", "E", "I"], ["H", "S"]],
  sortLetters([["c", "A", 2], [5, "e", "x"], [9, "W", "U"]]),
  "expects",
  [["A", "E", "U"], ["C", "X", "W"]],
  sortLetters([["a", 2, "Q"], ["I", 3, "n"], ["E", 6, "i"]]),
  "expects",
  [["A", "I", "E", "I"], ["Q", "N"]],
  sortLetters([[9, "i", "H"], [0, "U", "s"], [1, "o", "J"]]),
  "expects",
  [["I", "U", "O"], ["H", "S", "J"]]
);
