const assertEqual = require('./assertEqual');


// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

// Note: It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (const i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;
