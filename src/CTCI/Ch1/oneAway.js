let splitMapFilter = (arr, arr2) =>
  arr
    .split("")
    .map(char => !arr2.includes(char))
    .filter(x => x === true).length !== 1;

export const oneAway = strings => {
  let [string1, string2] = [strings[0], strings[1]];
  if (
    string1
      .split("")
      .map(char => !string2.includes(char))
      .filter(x => x === true).length !== 1
  ) {
    return false;
  }
  return true;
};

function oneEditInsert(str1, str2) {
  let index1 = 0;
  let index2 = 0;
  while (index2 <= str2.length && index1 <= str1.length) {
    if (str1[index1] !== str2[index2]) {
      return false;
    }
  }
}

export const oneAway2 = strings => {
  let [string1, string2] = [strings[0], strings[1]];
  let charNotFound = char => !string2.includes(char);
  let filterTrue = string => string.filter(x => x === true);
  if (
    filterTrue(string1.split("").map(char => charNotFound(char))).length !== 1
  ) {
    return false;
  }
  return true;
};

// // insert a char for str1 -> remove a char for str2
// const checkOneMissing = function(first = first1[0], second = first[1]) {
//   if (first.length !== second.length - 1) {
//     return false;
//   } else {
//     var mulligan = false;
//     var firstPointer = 0; // first Pointer
//     var secondPointer = 0; // second Pointer
//     while (firstPointer < first.length) {
//       if (first[firstPointer] !== second[secondPointer]) {
//         if (mulligan) {
//           return false;
//         } else {
//           mulligan = true;
//           secondPointer++; // second length is longer
//         }
//       } else {
//         firstPointer++;
//         secondPointer++;
//       }
//     }
//     return true;
//   }
// };

// const checkOneDiff = (first, second) => {
//   if (first.length !== second.length) {
//     return false;
//   } else {
//     var mulligan = false;
//     var firstPointer = 0; // first Pointer
//     var secondPointer = 0; // second Pointer
//     while (firstPointer < first.length) {
//       if (first[firstPointer] !== second[secondPointer]) {
//         if (mulligan) {
//           return false; // more than one mismatch
//         } else {
//           mulligan = true; // use up mulligan
//         }
//       }
//       firstPointer++;
//       secondPointer++;
//     }
//     return true;
//   }
// };

// const res1 = checkOneMissing(string1[0], string1[1]);
// const res2 = checkOneMissing(string1[1], string1[0]);
// const res3 = checkOneDiff(string1[0], string1[1]);

// // insert a char for str1 -> remove a char for str2
// // check one diff

// console.log(res1 || res2 || res3);

// return res1 || res2 || res3;
