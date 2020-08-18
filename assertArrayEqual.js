const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true;
}

const assertArraysEqual = function(newArr1, newArr2) {
  if (eqArrays(newArr1, newArr2)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("❌❌❌ Assertion Failed");
  }
}

assertArraysEqual([1, 2, 35], [1, 2, 35]);