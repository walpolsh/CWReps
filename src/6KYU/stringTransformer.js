export function stringTransformer(str) {
  return str
    .split(" ")
    .map(x =>
      x
        .split("")
        .map(y => (y.toUpperCase() === y ? y.toLowerCase() : y.toUpperCase()))
        .join("")
    )
    .reverse()
    .join(" ");
}
