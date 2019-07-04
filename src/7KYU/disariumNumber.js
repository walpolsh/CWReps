function disariumNumber(n, arr = []) {
  n = n.toString().split("");
  for (let i = 1; i <= n.length; i++) {
    arr.push(Math.pow(n[i - 1], i));
  }
  return n.join("") === arr.reduce((a, c) => a + c, 0).toString()
    ? "Disarium !!"
    : "Not !!";
}

export const disarium = console.log(disariumNumber(89), "Disarium !!");
