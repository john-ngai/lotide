const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// TEST ARRAY:
const words = ['Submariner', 'Daytona', 'Datejust', 'Day Date', 'Explorer', ];

// TEST CASES:
assertArraysEqual(map(words, word => word), words);
assertArraysEqual(map(words, word => word[0]), ['S', 'D', 'D', 'D', 'E', ]);
assertArraysEqual(map(words, word => 'Rolex'), ['Rolex', 'Rolex', 'Rolex', 'Rolex', 'Rolex', ]);