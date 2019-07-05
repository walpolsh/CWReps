const set1 = ["ic", "sion", "tion", "ious"];
const set2 = ["ty", "al", "ise", "ate"];
function stress(word) {
  word = word.match(/[a-zA-Z]+|[0-9]+/g);
  set1.map((x, i) => {
    // if (typeof word[0] !== Number) return "invalid word";
    if (word[0] > 11 && word[0] < 3) return "invalid word";
    if (word.includes(x)) {
      word[1] = "pen";
      word[0] -= 1;
    } else if (word.includes(set2[i])) {
      word[1] = "ante-pen";
      word[0] -= 2;
    } else if (!word.includes(x) && !word.includes(set2[i])) {
      return "invalid word";
    } else {
      return "invalid word";
    }
  });
  return word.join("");
}
export const str = console.log(
  "1",
  stress("10sion"),
  "9pen",
  "1",
  stress("9tion"),
  "8pen",
  "1",
  stress("11ic"),
  "10pen",
  "1",
  stress("3ious"),
  "2pen",
  "1",
  stress("8ty"),
  "6ante-pen",
  "1",
  stress("3al"),
  "1ante-pen",
  "1",
  stress("11ise"),
  "9ante-pen",
  "1",
  stress("5ate"),
  "3ante-pen",
  "1",
  stress("12ise"),
  "invalid word",
  "1",
  stress("5ale"),
  "invalid word",
  "1",
  stress("ise"),
  "invalid word",
  "1",
  stress("1000ale"),
  "invalid word"
);
