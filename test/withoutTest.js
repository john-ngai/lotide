const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// TEST CASES:
  // Expected Output: 'Assertion Passed...'
  assertArraysEqual(without([5, 6, 7, 8], [6, 8, 7]), [5]);

  // Expected Output: 'Assertion Passed...'
  assertArraysEqual(without([5, 6, 7, 8], [6, 8]), [5, 7]);

  // Expected Output: 'Assertion Passed...'
  assertArraysEqual(without([5, 6, 7, 8], [5, 6, 7, 8]), []);