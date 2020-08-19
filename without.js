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

const without = function (arr1, arr2) {
  let a = arr1.filter(filtered => !arr2.includes(filtered));
  return a;
};