// Copied from assertEqual.js (12 Jan 2022 @ 8:42 PM)
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Copied from eqArrays.js (12 Jan 2022 @ 9:16 PM)
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (const i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);

  // If both arrays are not the same length, return false.
  if (keysArray1.length !== keysArray2.length) {
    return false;
  }

  // process.exit();
  // Loop through and compare the target elemenet from two arrays.
  for (const element1 of keysArray1) {
    for (const element2 of keysArray2) {

      // If the target element (key name) in both arrays are the same then, 
      if (element1 === element2) {

        // If neither of the key-values in are objects then,
        if (typeof object1[element1] !== 'object' && typeof object1[element1] !== 'object') {

          // If both key-values are not the same, then return false.
          if (object1[element1] !== object2[element2]) {
            return false;
          }

        // Otherwise, if one key-value is not an object, but the other one is, then return false,
        } else if (typeof object1[element1] !== 'object' && typeof object1[element1] === 'object') {
          return false;
        
        // Otherwise, if both key-values are objects, pass in both key-values into the eqArray function to determine if they match.
        } else {
          return eqArrays(object1[element1], object2[element2]);
        }
      }
    }
  }

  // Return true as a default if none of the above conditions are met.
  return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

// TEST CASES:
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
