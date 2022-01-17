const assert = require('chai').assert;
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

describe('#middle', () => {
  it('returns an empty array when the input array contains one element', () => {
    const arr = [5];
    assert.deepEqual(middle(arr), []);
  });

  it('returns an empty array when the input array contains two element', () => {
    const arr = [5, 6];
    assert.deepEqual(middle(arr), []);
  });

  it('returns the two middle elements of an input array with an even number of elements', () => {
    const arr = [5, 6, 7, 8];
    assert.deepEqual(middle(arr), [6, 7]);
  });

  it('returns the single middle element of an input array with an odd number of elements', () => {
    const arr = [5, 6, 7, 8, 9];
    assert.deepEqual(middle(arr), [7]);
  });
});