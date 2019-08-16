export function sortString(string, ordering) {
  let count = {};
  string.split("");
  for (let i = 0; i < string.length; i++) {
    if (count[string[i]]) {
      count[string[i]] += 1;
    } else {
      count[string[i]] = 1;
    }
  }
  let arr = [];
  for (let i = 0; i < ordering.length; i++) {}
  return arr;
}
