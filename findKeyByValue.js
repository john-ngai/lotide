const findKeyByValue = (object, value) => {
  const keyArray = Object.keys(object);
  for (const element of keyArray) {
    if (object[element] === value) {
      return element;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;
