function evenChars(str) {
  if (str.length < 2 || str.length > 100) return "invalid string";
  return str.split("").filter((x, i) => i % 2 !== 0);
}

export const even = console.log(
  evenChars("a"),
  "invalid string",
  evenChars("abcdefghijklm"),
  ["b", "d", "f", "h", "j", "l"]
);
