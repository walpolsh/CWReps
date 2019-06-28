// Implement a method that accepts 3 integer values a, b, c.
// The method should return true if a triangle can be built with the sides of given length
// and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

export function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a ? true : false;
}
console.log(
  "isTriangle(1, 2, 2) === true",
  isTriangle(1, 2, 2) === true,
  "isTriangle(7, 2, 2) === false",
  isTriangle(7, 2, 2) === false
);
