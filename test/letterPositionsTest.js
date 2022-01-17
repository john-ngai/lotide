const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES:
// console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);