// Copied from eqArrays.js (12Jan2022 @ 3:01 PM)
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

const assertArraysEqual = (array1, array2) => {
  let status = eqArrays(array1, array2);

  status ? 
  console.log('Assertion Passed: array 1 === array 2') : 
  console.log('Assertion Failed: array 1 !== array 2');
};

// -----TEST CASES--START-----
  // Expected Output: 'Assertion Passed...'
  assertArraysEqual(
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  );

  // Expected Output: 'Assertion Failed...'
  assertArraysEqual(
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4]
  );

  // Expected Output: 'Assertion Failed...'
  assertArraysEqual(
    [1, 2, 3, 5],
    [1, 2, 3, 4]
  );
// -----TEST CASES--END-----