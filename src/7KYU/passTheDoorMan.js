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
function passTheDoorMan(word) {
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      return (alphabet.indexOf(word[i]) + 1) * 3;
    }
  }
}
// function passTheDoorMan(word, hash = {}) {
//   let a = [];
//   word.split("").forEach(x => {
//     hash[x] ? (hash[x] += 1) : (hash[x] = 1);
//   });
//   Object.keys(hash).map(x => {
//     let ans = (alphabet.indexOf(x) + 1) * 3;

//     if (hash[x] > 1) {
//       console.log(ans);
//       a.push(ans);
//     }
//   });
//   return a.join("");
// }

console.log(passTheDoorMan("lettuce"), 60);
console.log(passTheDoorMan("hill"), 36);
console.log(passTheDoorMan("apple"), 48);

// The Club Doorman will give you a word.
// To enter the Club you need to provide the right number according to provided the word.

// Every given word has a doubled letter, like 'tt' in lettuce.

// To answer the right number you need to find the doubled letter's position of the given word in the alphabet
// and multiply this number per 3.

// It will be given only words with one doubled letter.

// EXAMPLE
// Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

// The answer to the Club Doorman is 20 * 3 = 60

// TASK
// The function passTheDoorMan with a given string word shall return the right number.
