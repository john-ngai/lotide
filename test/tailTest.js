const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case #1: Check to ensure that the original array has not be modified.
const array1 = ['Light', 'House', 'Labs'];
console.log(`Test Case #1:`);
assertEqual(tail(array1).length, 2); // Expected Output: 'Assertion Passed'
console.log('\n');

// Test Case #2: An array with only one element should yield an empty array for its tail.
const array2 = ['Light'];
console.log(`Test Case #2:`);
assertEqual(tail(array2).length, 0); // Expected Output: 'Assertion Passed'
console.log('\n');

// Test Case #3: An empty array should yield an empty array for its tail.
const array3 = [];
console.log(`Test Case #3:`);
assertEqual(tail(array3).length, 0); // Expected Output: 'Assertion Passed'