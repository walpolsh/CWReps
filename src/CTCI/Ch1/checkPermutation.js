export function checkPermutation([str1, str2] = args) {
  return str1
    .split("")
    .sort()
    .join("") ===
    str2
      .split("")
      .sort()
      .join("")
    ? true
    : false;
}
export function checkPermutation2([str1, str2] = args) {
  return str1
    .split("")
    .sort()
    .join("") ===
    str2
      .split("")
      .sort()
      .join("")
    ? true
    : false;
}
