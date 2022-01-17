const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

// ADDITIONAL TEST CODE
assertEqual('Dog', 'Dog'); // Comparing identical strings
assertEqual('Dog', 'dog'); // Comparing non-identical strings
assertEqual(42, 42); // Comparing identical numbers
assertEqual(10, 20); // Comparing non-identical numbers
