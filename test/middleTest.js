const assert = require('chai').assert;
const middle   = require('../middle');


/* const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([3, 7, 9, 10]), [7, 9]);
assertArraysEqual(middle([3, 7, 6, 8, 10]), [6]);

 */

describe("#middle", () => {
  it("returns [7, 9] for [3, 7, 9, 10]", () => {
    assert.deepEqual(middle([3, 7, 9, 10]), [7, 9]);
  });

  it("returns [6] for [3, 7, 6, 8, 10]", () => {
    assert.deepEqual(middle([3, 7, 6, 8, 10]), [6]); 
  });
});
  