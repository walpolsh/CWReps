function list(names) {
  let arr = names.map(x => x.name);
  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return names[0].name.toString();
  } else {
    return (
      arr.slice(0, arr.length - 1).join(", ") + " & " + arr[arr.length - 1]
    );
  }
}

export const list1 = console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" }
  ]),
  "Bart, Lisa, Maggie, Homer & Marge",
  "Must work with many names",
  list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
  "Bart, Lisa & Maggie",
  "Must work with many names",
  list([{ name: "Bart" }, { name: "Lisa" }]),
  "Bart & Lisa",
  "Must work with two names",
  list([{ name: "Bart" }]),
  "Bart",
  "Wrong output for a single name",
  list([]),
  "",
  "Must work with no names"
);
