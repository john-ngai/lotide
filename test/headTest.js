const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CASES:
assertEqual(head([1, 2, 3]), 1);
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);