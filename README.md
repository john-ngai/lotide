# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @johnming/lotide`

**Require it:**

`const _ = require('@johnming/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Determines if two arrays are equal. Will print to the console, 'Assertion Pass' if true and 'Assertion Failed' if false.

* `assertEqual(actual, expected)`: Determines if two string, number, or boolean values are equal. Will print to the console, 'Assertion Pass' if true and 'Assertion Failed' if false.

* `assertObjectsEqual(actual, expected)`: Determines if two objects are equal. Will print to the console, 'Assertion Pass' if true and 'Assertion Failed' if false.

* `countLetters(string)`: Passes in a string and returns an object with each letter from the string as it's property, and the number of times the letter appears in the string as it's associated value. Does not included spaces

* `countOnly(allItems, itemsToCount)`: Given an array and an object. It will return an object containing counts of everything that the input object listed as true.

* `eqArrays(array1, array2)`: Takes in two arrays and returns true or false, based on a perfect match.

* `eqObjects(object1, object2)`: Takes in two objects and returns true or false, based on a perfect match.

* `findKey(object, callback)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should will undefined.

* `findKeyByValue(object, value)`: Takes in an object and a value. It should scan the object and return the first key that matches value. If no key is found, then it will return undefined.

* `head(array`: Takes in an array and returns the element found at the first index. If the array is empty, then it will return undefined.

* `letterPositions(string)`: Takes in a string and returns an object that records each letter as its keys and the index of each letter as its key-values.

* `map(array, callback)`: Takes in an array and callback function. Creates a new array populated with the results of the callback function on every element in the calling array.

* `middle(array)`: Take in an array and return the middle-most element(s) of the given array. If the number of elements in the array is 0 or 1, then it will return an empty array.

* `tail(array)`: Takes in an array and returns a new array containing every element except the element found at the first index. If the array is empty, then it will return undefined.

* `takeUntil(array, callback)`: Takes in an array and callback function. Loops through the elements of the calling array and creates a new array populated with the results of the callback function until the function returns true.

* `without(source, itemsToRemove)`: Take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.