// Copied from assertEquals.js (12 Jan 2022 @ 5:33 PM)
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const results = {};
  for (const element of string) {
    if (element !== ' ') {
      if (!results[element]) {
        results[element] = 1;
      } else {
        results[element] += 1;
      }
    }
  }
  return results;
}

// TEST CASES:
assertEqual(countLetters("lighthouse in the house")[' '], undefined);
assertEqual(countLetters("lighthouse in the house")['l'], 1);
assertEqual(countLetters("lighthouse in the house")['i'], 2);
assertEqual(countLetters("lighthouse in the house")['g'], 1);
assertEqual(countLetters("lighthouse in the house")['h'], 4);
assertEqual(countLetters("lighthouse in the house")['t'], 2);
assertEqual(countLetters("lighthouse in the house")['o'], 2);
assertEqual(countLetters("lighthouse in the house")['u'], 2);
assertEqual(countLetters("lighthouse in the house")['s'], 2);
assertEqual(countLetters("lighthouse in the house")['e'], 3);
assertEqual(countLetters("lighthouse in the house")['n'], 1);