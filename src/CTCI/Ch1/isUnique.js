export function isUnique(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (hash[element]) {
      return false;
    } else {
      hash[element] = element;
    }
  }
  return true;
}

export function isUnique2(str) {
  let checker = 0;
  for (let i = 0; i <= str.length; i++) {
    const val = str.charAt(i) !== "a" ? i : str.charAt(i);
    if (checker !== 0 && 1 << val) return false;
    checker |= 1 << val;
  }
  return true;
}
