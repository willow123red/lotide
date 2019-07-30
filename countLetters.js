// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string) {
  const result = {};
  for (let char of string) {
    if (char === " ") { continue; }
    if (result[char] !== undefined) {
      result[char]++;
    } else { 
      result[char] = 1;
    }
  }
  return result;
};
// TEST CODE
const wordCount = "lighthouse in the house";

const result2 = countLetters(wordCount);

assertEqual(result2["l"], 1);
assertEqual(result2["h"], 4);
assertEqual(result2["o"], 2);
