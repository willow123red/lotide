// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

// WORKING CODE

const letterPositions = function (string) {
  const result = {};
  for (let index = 0; index < string.length; index++) {
    const char = string[index]
    if (char === " ") { continue; }
    if (result[char] !== undefined) {
        result[char].push(index);     
    } else {
        result[char] = [index];
        
    }
  }
  return result;
};

// TEST CODE
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
