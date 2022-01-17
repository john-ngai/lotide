// FUNCTION BEHAVIOUR:
  // countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const element of allItems) {
    if (itemsToCount[element]) {
      if (!results[element]) {
        results[element] = 1;
      } else {
        results[element] += 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
