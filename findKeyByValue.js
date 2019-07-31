const findKeyByValue = function (obj, name) {
  let result;
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (name === obj[key]) {
      return key;
    }
  }
  return result; 
};
