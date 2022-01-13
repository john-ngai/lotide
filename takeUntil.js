// Implement a function named takeUntil

// It will take in two parameters as well:
  // The array to work with
  // The callback (which Lodash calls "predicate")

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      return newArray;
    }
  }
  return newArray;
}

// TEST CASES:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1, '\n'); // Expected Output: [ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // Expected Output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]