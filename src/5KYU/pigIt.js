function pigIt(str) {
  let wordsAndWhiteSpace = str.match(/\w+|\s+|[^\s\w]+/g);
  return wordsAndWhiteSpace
    .map(x => {
      if (x.match(/[a-z]/i)) {
        return x.slice(1, x.length) + x[0] + "ay";
      } else {
        return x;
      }
    })
    .join("");
}

export const pig = console.log(
  pigIt("Pig latin is cool"),
  "=== igPay atinlay siay oolcay",
  pigIt("This is my string!"),
  "=== hisTay siay ymay tringsay!"
);
//Move the first letter of each word to the end of it,
// then add "ay" to the end of the word.
// Leave punctuation marks untouched.
