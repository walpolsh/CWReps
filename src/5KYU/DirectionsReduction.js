export function DirectionsReduction(arr) {
  let arr2 = [];
  arr.map((x, i) => {
    console.log(arr2);
    if (x === "SOUTH" && arr[i + 1] !== ("EAST" || "WEST")) {
      arr2.push(x);
    }
    if (x === "NORTH" && arr[i + 1] !== ("EAST" || "WEST")) {
      arr2.push(x);
    }
    if (x === "EAST" && arr[i + 1] !== ("SOUTH" || "NORTH")) {
      arr2.push(x);
    }
    if (x === "WEST" && arr[i + 1] !== ("SOUTH" || "NORTH")) {
      arr2.push(x);
    }
  });
  return arr2;
}

export const dir = DirectionsReduction([
  "NORTH",
  "SOUTH",
  "SOUTH",
  "EAST",
  "WEST",
  "NORTH",
  "WEST"
]);
