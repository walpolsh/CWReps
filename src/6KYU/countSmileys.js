export function countSmileys(arr) {
  let count = 0;
  const cond1 = x =>
    x.split("").length === 3 &&
    (nose(x.split("")[1]) && (eyes(x.split("")[0]) && mouth(x.split("")[2])));
  const cond2 = x =>
    x.split("").length === 2 && eyes(x.split("")[0]) && mouth(x.split("")[1]);
  const eyes = x => x === ":" || x === ";";
  const nose = x => x === "-" || x === "~";
  const mouth = x => x === ")" || x === "D";
  arr.map(x => {
    return cond1(x) ? count++ : cond2(x) ? count++ : null;
  });
  return count;
}
