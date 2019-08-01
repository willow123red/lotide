const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};


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
