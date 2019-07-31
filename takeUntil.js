const takeUntil = function (array, callback) {
  for (let output = 0; output < array.length; output++) {
    if (callback(array[output])) {
      array.splice(output);
      return array;
    }
  }
};