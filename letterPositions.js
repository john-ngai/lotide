// -----ASSERTION FUNCTION--START-----
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

const assertArraysEqual = (array1, array2) => {
  let status = eqArrays(array1, array2);

  status ? 
    console.log('Assertion Passed: array 1 === array 2') : 
    console.log('Assertion Failed: array 1 !== array 2');
};
// -----ASSERTION FUNCTION--END-----


const letterPositions = (string) => {
  const results = {};
  let count = 0;

  for (const element of string) {
    if (element !== ' ') {
      if (!results[element]) {
        results[element] = [count];
       } else {
         results[element].push(count);
       }
    }
    count++;
  }

  return results;
}

console.log(letterPositions('lighthouse in the house'));

// TEST CASES:
assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);

// Completed in 25 min.