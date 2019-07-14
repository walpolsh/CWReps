function toCamelCase(str) {
  if (str === "") return str;
  str = str.match(/[^_\W]+/g);
  console.log(str);
  return str;
}

export const camelCase = console.log(
  toCamelCase(""),
  "",
  "An empty string was provided but not returned",
  toCamelCase("the_stealth_warrior"),
  "theStealthWarrior",
  "toCamelCase('the_stealth_warrior') did not return correct value",
  toCamelCase("The-Stealth-Warrior"),
  "TheStealthWarrior",
  "toCamelCase('The-Stealth-Warrior') did not return correct value",
  toCamelCase("A-B-C"),
  "ABC",
  "toCamelCase('A-B-C') did not return correct value"
);
