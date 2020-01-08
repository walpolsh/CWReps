export function solution(str = str.split()) {
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1] === undefined) {
      arr.push(str[i]);
      break;
    }
    arr.push([str[i], str[i + 1]].join(""));
  }
  arr[arr.length - 1].length === 1 && (arr[arr.length - 1] = arr[arr.length - 1] + "_");
  return arr;
}
