const numJewelsInStones = function(J, S, count = 0) {
  J.split("").map(x => S.split("").map(y => (x === y ? count++ : "")));
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
