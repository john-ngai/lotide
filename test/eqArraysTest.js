const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// -----TEST CASES--START-----
  // Expected Output: true
  console.log(eqArrays([1, 2, 3], [1, 2, 3]));

  // Expected Output: false
  console.log(eqArrays([1, 2, 3], [3, 2, 1]));

  // Expected Output: true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));

  // Expected Output: false
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

  // Expeceted Output: '...Assertion Passed...'
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

  // // Expeceted Output: '...Assertion Passed...'
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

  // // Expeceted Output: '...Assertion Passed...'
  assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
// -----TEST CASES--END-----