function oC(a) {
  let arrSortedAsc = a.slice().sort();
  let arrSortedDsc = a
    .slice()
    .sort()
    .reverse();
  console.log(a, arrSortedDsc);
  let arr = a.map(x => String.fromCharCode(x));
  let arr2 = arrSortedAsc.map(x => String.fromCharCode(x));
  let arr3 = arrSortedDsc.map(x => String.fromCharCode(x));
  let arr4 = a.map(x => String.fromCharCode(x)).sort();
  console.log(arr4);
  let a1 =
    arr.slice(0, 2).join("") + arr.slice(arr.length - 2, arr.length).join("");
  let a2 =
    arr2.slice(0, 2).join("") +
    arr2.slice(arr2.length - 2, arr2.length).join("");
  let a3 =
    arr3.slice(0, 2).join("") +
    arr3.slice(arr3.length - 2, arr3.length).join("");
  let a4 =
    arr4.slice(0, 2).join("") +
    arr4.slice(arr4.length - 2, arr4.length).join("");
  console.log(`${a1}   ${a2}   ${a3}   ${a4}`);
  return `${a1}-${a2}-${a3}-${a4}`;
}
export const sortAndTransform = console.log(
  oC([111, 112, 113, 114, 115, 113, 114, 110]),
  "oprn-nors-sron-nors" === oC([111, 112, 113, 114, 115, 113, 114, 110]),
  oC([51, 62, 73, 84, 95, 100, 99, 126]),
  oC([51, 62, 73, 84, 95, 100, 99, 126]) === "3>c~-3>d~-~d>3-3>d~",
  "3>c~   3>d~   ~d>3   3>d~"
);

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
