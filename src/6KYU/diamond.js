import { arrayExpression } from "@babel/types";

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let arr = [];
  for (let i = 1; i < n.length; i++) {
    arr.push("*");
  }
  return arr;
}

export const diamonds = console.log(
  diamond(1),
  "*\n",
  diamond(3),
  " *\n***\n *\n",
  diamond(5),
  "  *\n ***\n*****\n ***\n  *\n",
  diamond(2),
  null,
  diamond(-3),
  null,
  diamond(0),
  null
);
