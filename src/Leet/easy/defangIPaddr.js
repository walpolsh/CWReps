function log(x) {
  console.log(x);
  return x;
}

var defangIPaddr = function(address) {
  return address
    .split("")
    .map(x => (log(x) === "." ? `[${x}]` : x))
    .join("");
};
