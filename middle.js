const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
