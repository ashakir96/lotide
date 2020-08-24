const eqArrays = require("./eqArrays");


const assertArraysEqual = function(newArr1, newArr2) {
  if (eqArrays(newArr1, newArr2)) {
    console.log("✅✅✅ Assertion Passed: " + newArr1 + " === " + newArr2);
  } else {
    console.log("❌❌❌ Assertion Failed: " + newArr1 + " !== " + newArr2);
  }
};

module.exports = assertArraysEqual;