const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👺🤮💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = array => {
  if (array !== []) {
    return array[0];
  } else {
    return undefined;
  }
};

assertEqual(head([1, 2, 3]), 1);
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);
