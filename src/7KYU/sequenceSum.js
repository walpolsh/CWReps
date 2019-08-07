export const sequenceSum = (begin, end, step) => {
  let res = begin;
  for (let i = begin; i < end; i++) {
    res += step;
  }

  return res;
};
