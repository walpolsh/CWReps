function mergeArrays(a, b) {
  let arr = [];
  let longest = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < longest; i++) {
    arr.push(a[i], b[i]);
  }
  return arr.filter(x => x);
}
