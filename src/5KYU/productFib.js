export const productFib = prod => {
  let arr = [0, 1];
  for (let i = 2; i < 50; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    if (arr[i] * arr[i - 1] === prod) return [arr[i - 1], arr[i], true];
    if (arr[i] * arr[i - 1] > prod) return [arr[i - 1], arr[i], false];
  }
};

console.log(productFib(4895), productFib(4895) === [55, 89, true], [
  55,
  89,
  true
]);
console.log(productFib(5895), productFib(5895) === [89, 144, false], [
  89,
  144,
  false
]);
console.log(
  productFib(74049690),
  productFib(74049690) === [6765, 10946, true],
  [6765, 10946, true]
);
console.log(
  productFib(84049690),
  productFib(84049690) === [10946, 17711, false],
  [10946, 17711, false]
);
console.log(
  productFib(193864606),
  productFib(193864606) === [10946, 17711, true],
  [10946, 17711, true]
);
console.log(productFib(447577), productFib(447577) === [610, 987, false], [
  610,
  987,
  false
]);
console.log(productFib(602070), productFib(602070) === [610, 987, true], [
  610,
  987,
  true
]);
// let arr = [0,1]
// for (let i = 2; i < 50; i++) {
//   arr.push(arr[i - 1] + arr[i - 2]);
// }
// arr
