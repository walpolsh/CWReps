// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

export const calculate = str =>
  eval(
    str
      .split(/([0-9]+)/)
      .filter(x => x !== "")
      .map(x => (x === "plus" ? "+" : x === "minus" ? "-" : x))
      .join("")
  ) + "";
