export const capitals = word =>
  word
    .split("")
    .map((x, i) => (x === x.toUpperCase() ? i : undefined))
    .filter(x => x !== undefined);
