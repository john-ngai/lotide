// START - Copied from assertArraysEqual.js (13 Jan 2022 @ 4:06 PM).
const eqArrays = (array1, array2) => {
  let status = true;

  if (array1.length !== array2.length) {
    status = false
  } else {
    for (const i in array1) {
      if (array1[i] !== array2[i]) {
        status = false;
      }
    }
  }
  return status;
};

const assertArraysEqual = (array1, array2) => {
  let status = eqArrays(array1, array2);

  status ? 
    console.log('Assertion Passed: array 1 === array 2') : 
    console.log('Assertion Failed: array 1 !== array 2');
};
// END - Copied from assertArraysEqual.js (13 Jan 2022 @ 4:06 PM).

// Test array:
const words = ['Submariner', 'Daytona', 'Datejust', 'Day Date', 'Explorer', ];

// FUNCTION - map:
const map = function(array, callback) {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  };
  return results;
};

// TEST CASES:
assertArraysEqual(map(words, word => word), words);
assertArraysEqual(map(words, word => word[0]), ['S', 'D', 'D', 'D', 'E', ]);
assertArraysEqual(map(words, word => 'Rolex'), ['Rolex', 'Rolex', 'Rolex', 'Rolex', 'Rolex', ]);