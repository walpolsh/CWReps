const factorial = n => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reduce((a, c) => a * c);
};
factorial(5);

const factorial2 = n => {
  if (n === 1) return n;
  return n * factorial2(n - 1);
};
factorial2(5);

let memo = {};
const factorial3 = n => {
  if (n in memo) return memo[n];
  if (n === 1) return n;
  let x = n * factorial3(n - 1);
  memo[n] = x;
  return x;
};
factorial3(5);
