function order(words) {
  console.log(words);
  let a = words.split(/\w[a-z]+/gi);
  console.log("match", a);
  let og = words.split(" ");
  let s = "1 banana + 1 pineapple + 3 oranges";

  return a;
}

export const orders = console.log(
  order("is2 Thi1s T4est 3a"),
  "Thi1s is2 3a T4est",
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople",
  order(""),
  ""
);
