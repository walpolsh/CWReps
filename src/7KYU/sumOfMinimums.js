function sumOfMinimums(arr) {
  return arr.reduce((a, c) => a + c.sort((a, b) => a - b)[0], 0);
}
