const assertEqualArrays = require("./assertArrayEqual");

const middle = function(array) {
  let middleElement = Math.ceil(array.length / 2);
  let output = [];
  if (array.length <= 2) {
    return output;
  } else if (array.length % 2 !== 0) {
    output.push(middleElement);
  } else if (array.length % 2 === 0) {
    output.push(middleElement);
    output.push(middleElement + 1);
  } return output;
};

module.exports = middle;