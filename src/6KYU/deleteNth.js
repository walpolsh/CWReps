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
