import { whoIsNext } from ".w/whoIsNext";

it("expect(whoIsNext(names, r)).toBe(res)", () => {
  let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
  let r = 1;
  let res = "Sheldon";
  expect(whoIsNext(names, r)).toBe(res);
});
