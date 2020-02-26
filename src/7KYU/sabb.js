function sabb(x, val, happ) {
  let sum = 0;
  if ((x.match(/l/gi) || []).length >= 3) sum += 3 + val + happ;
  if (x.match(/sabbatical/gi)) sum += x.length + val + happ;

  if (sum >= 22) return "Sabbatical! Boom!";
  return "Back to your desk, boy.";
}

console.log(sabb("Can I have a sabbatical?", 5, 5), "Sabbatical! Boom!");
console.log(sabb("Why are you shouting?", 7, 2), "Back to your desk, boy.");
console.log(sabb("What do you mean I cant learn to code??", 8, 9), "Sabbatical! Boom!");
console.log(sabb("Please calm down", 9, 1), "Back to your desk, boy.");
