function uniqueInOrder(iterable) {
  return typeof iterable === "object"
    ? iterable.filter((x, i) => {
        return iterable[i] !== iterable[i + 1];
      })
    : iterable.split("").filter((x, i) => {
        return iterable[i] !== iterable[i + 1];
      });
}

export const unique = console.log(
  uniqueInOrder("AAAABBBCCDAABBB"),
  ["A", "B", "C", "D", "A", "B"],
  uniqueInOrder([1, 2, 3, 3]),
  [1, 2, 3],
  uniqueInOrder(["a", "b", "b"]),
  ["a", "b"]
);

/*
I understand what I have to do just not how
let arr = []
let i = 0
if i == i+!
    start a while loop that terminates if i+1 != i
    increment i
else 
    push to array
*/
