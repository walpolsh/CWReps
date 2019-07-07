function digPow(n, p) {
  let arr = [];
  let i = p;
  n = n.toString().split("");
  n.map(x => {
    arr.push(Math.pow(x, i));
    i++;
  });
  let total = arr.reduce((a, c) => a + c, 0);
  let combo = parseInt(n.join(""));
  let totalDivCombo = Math.floor(total / combo);
  return combo * totalDivCombo === total ? totalDivCombo : -1;
}

export const dig = console.log(
  digPow(89, 1),
  1,
  digPow(92, 1),
  -1,
  digPow(46288, 3),
  51,
  digPow(114, 3),
  9,
  digPow(46288, 5),
  -1
);
