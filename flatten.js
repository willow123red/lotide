// TEST ASSERTION FUNCTIONS
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// WORKING CODE
const flatten = function(previous) {
  let flattened = [];
    for (let i = 0; i < previous.length; i++) {
      flattened = flattened.concat(previous[i]);
    }
    return flattened;
};
  
  

console.log(flatten([1, 2, 67, 89, [3, 4], 5, [6], 98]));


