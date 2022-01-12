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

// CHALLENGE:
  // Implement middle which will take in an array and return the middle-most element(s) of the given array.

const getEvenMidIndex = array => {
  const midIndex = [];
  let i1 = (array.length / 2) - 1; 
  let i2 = array.length / 2;
  midIndex.push(array[i1], array[i2]);
  return midIndex;
};

const getOddMidIndex = array => {
  const midIndex = [];
  let i = (array.length - 1) / 2;
  midIndex.push(array[i]);
  return midIndex;
};

const middle = array => {
  if (array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return getEvenMidIndex(array);
  } else if (array.length % 2 !== 0 && array.length !== 1) {
    return getOddMidIndex(array);
  } else {
    return [];
  }
};

// TEST CASES:
  // An array that contains one element.
  assertArraysEqual(middle([5]), []);

  // An array that contains two elements.
  assertArraysEqual(middle([5, 6]), []);

  // An array with an even number of elements.
  assertArraysEqual(middle([5, 6, 7, 8]), [6, 7]);

  // An array with an odd number of elements.
  assertArraysEqual(middle([5, 6, 7, 8, 9]), [7]);
