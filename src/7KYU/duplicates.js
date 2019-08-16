export function duplicates(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  let hash = {};
  let arr2 = [];
  arr.map(x => {
    hash[x] ? (hash[x] += 1) : (hash[x] = 1);
  });

  let a = arr.map(x => hash[x] % 2 === 0 && arr2.push(hash[x]));
  console.log(a);
  console.log(arr2);

  return count;
}
