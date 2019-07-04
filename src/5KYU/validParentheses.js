function validParentheses(str, hash = { "(": 0, ")": 0 }) {
  str.split("").forEach(x => (hash[x] ? (hash[x] += 1) : hash[x]++));
  return str[str.length - 1] === "("
    ? false
    : hash["("] === hash[")"]
    ? true
    : false;
}

// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid,
// and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

export const valid = console.log(
  validParentheses("()"),
  true,
  validParentheses("())"),
  false,
  validParentheses("((((()))))"),
  true,
  validParentheses("())("),
  false,
  validParentheses("(()()))("),
  false
);
