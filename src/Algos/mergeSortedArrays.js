function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
console.log(mergeSortedArrays([], [3, 4, 6, 30]));
console.log(mergeSortedArrays([0, 3, 4, 31], []));
console.log(mergeSortedArrays([0, 22, 3, 4, 31], [5, 4242, 51, 512, 55, 27, 88]));
