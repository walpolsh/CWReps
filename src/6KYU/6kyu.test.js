import { countSmileys } from "./countSmileys";
// it("🤙", () => {
//   expect().toBe();
// });
it("🤙", () => {
  expect(countSmileys([])).toBe(0);
});

it("🤙", () => {
  expect(countSmileys([":D", ":~)", ";~D", ":)"])).toBe(4);
});
it("🤙", () => {
  expect(countSmileys([":)", ":(", ":D", ":O", ":;"])).toBe(2);
});
it("🤙", () => {
  expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
});
