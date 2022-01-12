// Copied from assertEqual.js (12Jan2022 @ 1:31 PM)
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👺🤮💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

// Note: It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.

/*
Pseudocode/Steps:

  1. Declare a function named eqArrays that accepts two parameters, array1 and array2.
  
    2. Declare a let variable named status with a boolean value of true.

    3. If array1.length !== array2.length, then status = false,

      4. Otherwise, create a for...in loop to iterate through the indexes (i) of array1.

        5. If array1[i] !== array2[i], then status = false.

    6. Return status;
*/

const eqArrays = (array1, array2) => {
  let status = true;

  if (array1.length !== array2.length) {
    status = false
  } else {
    for (const i in array1) {
      if (array1[i] !== array2[i]) {
        status = false;
      }
    }
  }
  return status;
};

// -----TEST CASES--START-----

// Expected Output: true
console.log(eqArrays([1, 2, 3], [1, 2, 3]));

// Expected Output: false
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

// Expected Output: true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));

// Expected Output: false
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

// Expeceted Output: ...'Assertion Passed'...
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// // Expeceted Output: ...'Assertion Passed'...
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

// // Expeceted Output: ...'Assertion Passed'...
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);

// -----TEST CASES--END-----