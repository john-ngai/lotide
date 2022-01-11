const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👺🤮💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function tail which returns the "tail" of an array:
const tail = array => {
  const newArray = [];
  
  for (const i in array) {
    if (Number(i) !== 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Test Case #1: Check to ensure that the original array has not be modified.
const array1 = ['Light', 'House', 'Labs'];
tail(array1);
console.log(`Test Case #1:`);
assertEqual(array1.length, 3); // Expected Output: 'Assertion Passed'
console.log('\n');

// Test Case #2: An array with only one element should yield an empty array for its tail.
const array2 = ['Light'];
console.log(`Test Case #2:`);
console.log(tail(array2)); // Expected Output: []
console.log('\n');

// Test Case #3: An empty array should yield an empty array for its tail.
const array3 = [];
console.log(`Test Case #3:`); // Expected Output: []
console.log(tail(array3));
