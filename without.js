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

const without = function (arr1, arr2) {
  let newArray = Array.from(arr1);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (newArray[i] === arr2[j]) {
        newArray.splice(i, 1);
      }
    }
  } return newArray;
};