export function wave(str) {
  //for each element of the split string create a version where the
  return !str.length
    ? []
    : str
        .split("")
        .map((x, i) =>
          x !== " "
            ? str.slice(0, i) + x.toUpperCase() + str.slice(i + 1, str.length)
            : ""
        )
        .filter(x => x.length !== 0);
}
