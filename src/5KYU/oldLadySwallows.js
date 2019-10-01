var oldLadySwallows = function(animals) {
  console.log(animals);
  let obj = {
    1: "horse",
    2: "cow",
    3: "goat",
    4: "dog",
    5: "cat",
    6: "bird",
    7: "spider",
    8: "fly"
  };
  animals.forEach(animal => animal === obj[animal]);
  return [arr[0]];
};
// var oldLadySwallows = function(animals) {
//   console.log(animals)
//   let arr = [];
//   animals.forEach(animal => {
//     animal === "horse"
//       ? arr.unshift("horse")
//       : animal === "cow"
//       ? arr.unshift("cow")
//       : animal === "goat"
//       ? arr.unshift("goat")
//       : animal === "dog"
//       ? arr.unshift("dog")
//       : animal === "cat"
//       ? arr.unshift("cat")
//       : animal === "bird"
//       ? arr.unshift("bird")
//       : animal === "spider"
//       ? arr.unshift("spider")
//       : arr.push("fly");
//   });
//   return [arr[0]];
// };
var animals = ["fly", "spider"];
var autopsy = ["spider"];
console.log(oldLadySwallows(animals));
let animals1 = [("bird", "fly", "spider", "fly")];

console.log(oldLadySwallows(animals1));

function swallowFn(animal) {
  //a queue... last in is a
  return animal === "horse"
    ? "horse"
    : animal === "cow"
    ? "cow"
    : animal === "goat"
    ? "goat"
    : animal === "dog"
    ? "dog"
    : animal === "cat"
    ? "cat"
    : animal === "bird"
    ? "bird"
    : animal === "spider"
    ? "spider"
    : "fly";
}
