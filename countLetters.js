const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let output = {};
  let stringNew = string.replace(/\s/g, '');
  for (let letter of stringNew) {
    if (letter in output) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  } return output;
};