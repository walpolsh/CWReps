export function maxMultiple(divisor, bound) {
  return [...Array(bound).keys()].filter(x => x % divisor === 0 && x <= bound).pop();
}
