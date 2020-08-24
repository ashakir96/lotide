const middle = require("../middle");
const assertEqualArrays = require("../assertArrayEqual");

middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);

assertEqualArrays(middle([1, 2, 3, 4]), [2, 3]);
assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]);