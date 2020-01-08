// Create a hash map that counts the occurrences of the element.
// Create an array to push the result to.
// Iterate through the array, add or increment the element in the hash, if the element in the hash is less than or equal to two then push it to the results array.

export function deleteNth(arr, n) {
  let hash = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) hash[arr[i]] += 1;
    if (!hash[arr[i]]) hash[arr[i]] = 1;
    if (hash[arr[i]] <= n) result.push(arr[i]);
  }
  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 1), [1, 1, 3, 3, 7, 2, 2, 2]);
