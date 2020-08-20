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


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!Array.isArray(object1[key]) || !Array.isArray(object2[key])) {
      return false;
    } else if (typeof object1[key] !== typeof object2[key]) {
      return false;
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌❌❌ Assertion Failed: " + actual + " === " + expected);
  }
};
