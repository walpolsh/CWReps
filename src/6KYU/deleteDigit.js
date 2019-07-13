function deleteDigit(n) {
  let arr1 = n.toString().split("");
  let arr2 = [];
  arr1.forEach((x, i) => {
    let arr3 = [...arr1];
    arr3.splice(i, 1);
    arr2.push(arr3);
  });

  return Math.max(...arr2.map(x => +x.join("")));
}

export const deleteDig = console.log(
  deleteDigit(152),
  52,
  deleteDigit(1001),
  101,
  deleteDigit(10),
  1
);
