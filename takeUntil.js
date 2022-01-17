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

module.exports = takeUntil;
