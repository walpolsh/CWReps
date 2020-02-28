const factorial = n => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reduce((a, c) => a * c);
};
factorial(5);
