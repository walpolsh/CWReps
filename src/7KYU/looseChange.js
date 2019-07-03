function changeCount(change, total = 0) {
  change
    .split(" ")
    .map(x =>
      x === "penny"
        ? (total += 0.01)
        : x === "nickel"
        ? (total += 0.05)
        : x === "dime"
        ? (total += 0.1)
        : x === "quarter"
        ? (total += 0.25)
        : x === "dollar"
        ? (total += 1.0)
        : ""
    );
  return `$${total.toFixed(2)}`;
}

export const change = console.log(changeCount("dime penny dollar"));
