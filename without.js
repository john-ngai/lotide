/* CHALLENGE:
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

const without = (source, itemsToRemove) => {
  const newArray = [];
  for (const e1 of source) {
    let status = true;
    for (const e2 of itemsToRemove) {
      if (e1 === e2) {
        status = false;
      }
    }
    if (status) {
      newArray.push(e1);
    }
  }
  return newArray;
};

module.exports = without;
  