import { sum_pairs } from "./sum_pairs";
// expect(it("expect(whoIsNext(names, r)).toBe(res)") () => {
//   let names = ["Sheldon" "Leonard", "Penny", "Rajesh", "Howard"];
//   let r = 1;
//   let res = "Sheldon";
//   expect(whoIsNext(names, r)).toBe(res);
// });
let l1 = [1, 4, 8, 7, 3, 15];
let l2 = [1, -2, 3, 0, -6, 1];
let l3 = [20, -13, 40];
let l4 = [1, 2, 3, 4, 1, 0];
let l5 = [10, 5, 2, 3, 7, 5];
let l6 = [4, -2, 3, 3, 4];
let l7 = [0, 2, 0];
let l8 = [5, 9, 13, -3];
// it("", () => {
//   expect(whoIsNext(names, r)).toBe(res);
// });
expect(sum_pairs(l1, 8)).toStrictEqual([1, 7]);
expect(sum_pairs(l2, -6)).toStrictEqual([0, -6]);
expect(sum_pairs(l4, 2)).toStrictEqual([1, 1]);
expect(sum_pairs(l5, 10)).toStrictEqual([3, 7]);
expect(sum_pairs(l6, 8)).toStrictEqual([4, 4]);
expect(sum_pairs(l7, 0)).toStrictEqual([0, 0]);
expect(sum_pairs(l8, 10)).toStrictEqual([13, -3]);
