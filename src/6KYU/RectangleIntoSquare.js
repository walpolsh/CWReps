export function sqInRect(length, width) {
  let total = length * width;
  let sq1 = Math.ceil(Math.sqrt(total));
  let sq2 = Math.ceil(total / 2);
  let sq3 = Math.ceil(total / 4);
  console.log(sq1);
  return [sq1, sq2, sq3, sq3];
}
const assertSimilar = (fn, arr) => {
  console.log(`fn === arr ? ${fn === arr}`);
  return fn === arr;
};

console.log(sqInRect(5, 5));
console.log(sqInRect(5, 3));

assertSimilar(sqInRect(5, 5), null);
assertSimilar(sqInRect(5, 3), [3, 2, 1, 1]);
assertSimilar(sqInRect(3, 5), [3, 2, 1, 1]);
assertSimilar(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
