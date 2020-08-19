const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(newArr1, newArr2) {
  if (eqArrays(newArr1, newArr2)) {
    console.log("✅✅✅ Assertion Passed: " + newArr1 + " === " + newArr2);
  } else {
    console.log("❌❌❌ Assertion Failed: " + newArr1 + " !== " + newArr2);
  }
};

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