function oC(text, count = {}, arr = []) {
  text.split("").map(x => {
    if (count[x]) {
      count[x]++;
    } else {
      count[x] = 1;
    }
  });
  Object.keys(count).map((x, i) => {
    arr.push([x, Object.values(count)[i]]);
  });

  return arr;
}
export const orderedCount = console.log(oC("2212"), oC("abracadabra"));

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
