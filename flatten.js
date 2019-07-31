const flatten = function(previous) {
  let flattened = [];
    for (let i = 0; i < previous.length; i++) {
      flattened = flattened.concat(previous[i]);
    }
    return flattened;
};
 

