export function SeriesSum(n, res = 0) {
  for (let i = 0; i < n; i++) {
    res += 1 / (3 * i + 1);
  }
  return res.toFixed(2);
}
