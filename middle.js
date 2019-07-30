const middle = function (arr) {
  if (arr.length < 3) {
    return [];
  
  } else if (arr.length % 2 === 0) {
    let evenstart = (arr.length / 2 - 1);
    let evenend = (arr.length / 2);
    return [arr[evenstart], arr[evenend]];

  } else {

    let median = Math.floor(arr.length / 2);
    return [arr[median]];
  }
};


module.exports = middle;