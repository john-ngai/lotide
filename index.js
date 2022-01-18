const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

const lotide = {
  head,
  tail,
  middle,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
  assertEqual,
  eqArrays,
  eqObjects,
  assertArraysEqual,
  assertObjectsEqual,
};

module.exports = lotide;
