// CHALLENGE:
  // Implement the function findKey which takes in an object and a callback.
  // It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  const keyArray = Object.keys(object);
  for (const element of keyArray) {
    if (callback(object[element])) {
      return element;
    }
  }
  return undefined;
}

module.exports = findKey;
