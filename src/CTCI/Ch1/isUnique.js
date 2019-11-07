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
