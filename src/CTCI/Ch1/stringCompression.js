export function stringCompression(string, comp = "", count = 0) {
  string.split("").map((x, i) => {
    count += 1;
    if (string[i + 1] >= string.length || x !== string[i + 1]) {
      comp += `${x + count}`;
      count = 0;
    }
  });

  return comp.length < string.length ? comp : string;
}
