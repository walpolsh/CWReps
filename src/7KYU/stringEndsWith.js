function solution(str, ending) {
  return ending === str.slice(-ending.length) ? true : false;
}

export const stringEndsWith = console.log(
  solution("abcde", "cde"),
  true,
  solution("abcde", "abc"),
  false,
  solution("samurai", "ai"),
  true
);
