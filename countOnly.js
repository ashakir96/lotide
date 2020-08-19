const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let returnedObj = {};
  for (let item of allItems) {
    if (item in itemsToCount) {
      if (item in returnedObj) {
        returnedObj[item] += 1;
      } else {
        returnedObj[item] = 1;
      }
    }
  } return returnedObj;
};