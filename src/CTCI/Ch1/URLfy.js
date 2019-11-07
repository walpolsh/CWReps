export function URLfy(str) {
  return str
    .split(" ")
    .filter(x => x !== "")
    .join(" ")
    .split(" ")
    .join("%20");
}
