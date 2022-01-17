const assertEqual = require('./assertEqual');

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

module.exports = tail;
