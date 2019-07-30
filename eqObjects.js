// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keysOfOne = Object.keys(object1);
  const keysOfTwo = Object.keys(object2);
  
  if (keysOfOne.length !== keysOfTwo.length) {
    return false; 
  }
    for (let key of keysOfOne) {
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } 
        } else {

      if (object1[key] !== object2[key])  {
        return false;
      }
    }
  }
  return true;
};

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual((eqObjects(cd, dc)), true); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual((eqObjects(cd, cd2)), false); // => false


//const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc);

//console.log(eqObjects(ab, ba));