export function tickets(peopleInLine) {
  let avengersTicket = 25;
  let change = 0;
  let bank = 0;

  let or = peopleInLine.forEach(x => {
    change += x - avengersTicket;
    bank += peopleInLine.length * avengersTicket;
  });
  console.log(change > bank);
  return change > bank ? "NO" : "YES";
}

// let bank = 0;
// let change = 0;

// peopleInLine.map(x => {
//   bank += avengersTicket;
//   change += x - avengersTicket;
// });
// if (change > bank) {
//   return "NO";
// } else {
//   return "YES";
// }
