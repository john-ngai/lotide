const assertEqual = require('./assertEqual');

const head = array => {
  if (array !== []) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;