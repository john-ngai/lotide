const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? 
  console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}\n`) : 
  console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}\n`);
}

module.exports = assertObjectsEqual;