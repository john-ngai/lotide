const assertArraysEqual = require('../assertArraysEqual');


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