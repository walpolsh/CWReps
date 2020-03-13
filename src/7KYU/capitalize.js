export function capitalize(s) {
  let e = s
    .split("")
    .map((x, i) => (i % 2 === 0 ? x.toUpperCase() : x))
    .join("");
  let o = s
    .split("")
    .map((x, i) => (i % 2 === 0 ? x : x.toUpperCase()))
    .join("");
  return [e, o];
}

console.log(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
console.log(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
console.log(capitalize("abracadabra"), ["AbRaCaDaBrA", "aBrAcAdAbRa"]);
console.log(capitalize("codewarriors"), ["CoDeWaRrIoRs", "cOdEwArRiOrS"]);
