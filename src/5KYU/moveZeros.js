export const moveZeros = arr => {
  const onlyZeros = arr.filter(x => x === 0);
  const withoutZeros = arr.filter(x => x !== 0);
  return withoutZeros.concat(onlyZeros);
};

console.log(
  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]) === [1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
);
