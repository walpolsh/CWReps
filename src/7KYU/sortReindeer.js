export function sortReindeer(a) {
  return a
    .map(x => x.split(" "))
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return 1;
      }
      if (b[1] > a[1]) {
        return -1;
      }
    })
    .map(x => x.join(" "));
}

console.log(
  sortReindeer([
    "Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    "Vixen Hall",
    "Comet Karavani",
    "Cupid Foroutan",
    "Donder Jonker",
    "Blitzen Claus"
  ]),
  [
    "Prancer Chua",
    "Blitzen Claus",
    "Cupid Foroutan",
    "Vixen Hall",
    "Donder Jonker",
    "Comet Karavani",
    "Dancer Moore",
    "Dasher Tonoyan"
  ]
);
