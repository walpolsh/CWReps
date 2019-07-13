function getOrder(input) {
  let arr = input
    .replace(/burger/g, "Burger ")
    .replace(/fries/g, "Fries ")
    .replace(/chicken/g, "Chicken ")
    .replace(/pizza/g, "Pizza ")
    .replace(/sandwich/g, "Sandwich ")
    .replace(/onionrings/g, "Onionrings ")
    .replace(/milkshake/g, "Milkshake ")
    .replace(/coke/g, "Coke ")
    .trim();
  let arr2 = [[], [], [], [], [], [], [], []];

  arr
    .split(" ")
    .forEach(x =>
      x === "Burger"
        ? arr2[0].push(x)
        : x === "Fries"
        ? arr2[1].push(x)
        : x === "Chicken"
        ? arr2[2].push(x)
        : x === "Pizza"
        ? arr2[3].push(x)
        : x === "Sandwich"
        ? arr2[4].push(x)
        : x === "Onionrings"
        ? arr2[5].push(x)
        : x === "Milkshake"
        ? arr2[6].push(x)
        : x === "Coke"
        ? arr2[7].push(x)
        : null
    );
  return arr2.reduce((acc, val) => acc.concat(val), []).join(" ");
}

export const order = console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
  "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke",
  getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
  "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
);
