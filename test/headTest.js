const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 4 for [4]", () => {
    assert.strictEqual(head([4]), 4); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });
});