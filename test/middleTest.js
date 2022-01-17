const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CASES:
  // An array that contains one element.
  assertArraysEqual(middle([5]), []);

  // An array that contains two elements.
  assertArraysEqual(middle([5, 6]), []);

  // // An array with an even number of elements.
  assertArraysEqual(middle([5, 6, 7, 8]), [6, 7]);

  // // An array with an odd number of elements.
  assertArraysEqual(middle([5, 6, 7, 8, 9]), [7]);
