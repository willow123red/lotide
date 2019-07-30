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

const without = function(source, itemsToRemove) {
  const results = [];
    for (let i = 0; i < source.length; i++) {
     const removableItems = source[i];
     if (!itemsToRemove.includes(removableItems)) {
       results.push(removableItems);
     }
  }
  return results;
}


//const words = ["hello", "world", "lighthouse"];
//without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);


