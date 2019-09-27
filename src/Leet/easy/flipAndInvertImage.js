const flipAndInvertImage = A =>
  A.map(x => x.reverse().map(y => (y == 1 ? 0 : 1)));
