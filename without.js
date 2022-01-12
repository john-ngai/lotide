// Copied from eqArrays.js (12Jan2022 @ 3:47 PM)
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (const i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

// Copied from assertArraysEqual.js (12Jan2022 @ 3:48 PM)
const assertArraysEqual = (array1, array2) => {
  let status = eqArrays(array1, array2);
  status ? 
    console.log('Assertion Passed: array 1 === array 2') : 
    console.log('Assertion Failed: array 1 !== array 2');
};

/* CHALLENGE:
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

const without = (source, itemsToRemove) => {
  const newArray = [];
  for (const e1 of source) {
    let status = true;
    for (const e2 of itemsToRemove) {
      if (e1 === e2) {
        status = false;
      }
    }
    if (status) {
      newArray.push(e1);
    }
  }
  return newArray;
};

// TEST CASES:
  // Expected Output: 'Assertion Passed...'
  assertArraysEqual(without([5, 6, 7, 8], [6, 8, 7]), [5]);

  // Expected Output: 'Assertion Passed...'
  assertArraysEqual(without([5, 6, 7, 8], [6, 8]), [5, 7]);

  // Expected Output: 'Assertion Passed...'
  assertArraysEqual(without([5, 6, 7, 8], [5, 6, 7, 8]), []);
  