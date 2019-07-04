function duplicateEncode(str, hash = {}, arr = []) {
  let str2 = str.toLowerCase().split("");
  str2.map(x => (hash[x] ? hash[x]++ : (hash[x] = 1)));
  for (let i = 0; i < str.length; i++) {
    const element = str2[i];
    if (hash[element] > 1) {
      arr.push(")");
    } else {
      arr.push("(");
    }
  }
  return arr.join("");
}

// make hash map to store count of each letter
//for each letter if that letter's value in the hash map is more than 2 return ")"
// else return '('

export const duplicateE = console.log(
  duplicateEncode("din"),
  "(((",
  duplicateEncode("recede"),
  "()()()",
  duplicateEncode("Success"),
  ")())())",
  "should ignore case",
  duplicateEncode("(( @"),
  "))(("
);
