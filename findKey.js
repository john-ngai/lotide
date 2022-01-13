// START - Copied from assertEquals.js (13 Jan 2022 @ 4:57 PM)
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// END - Copied from assertEquals.js (13 Jan 2022 @ 4:57 PM)

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

// TEST CASES:
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2),
"noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 4),
undefined);

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 5 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 5),
"Ora");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 5 },
  "Akelarre": { stars: 3 }
}, x => x.stars > 4),
"Ora");