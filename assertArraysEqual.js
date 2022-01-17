const eqArrays = require('./eqArrays');

const assertArraysEqual = (array1, array2) => {
  let status = eqArrays(array1, array2);

  status ? 
    console.log('Assertion Passed: array 1 === array 2') : 
    console.log('Assertion Failed: array 1 !== array 2');
};

module.exports = assertArraysEqual;
