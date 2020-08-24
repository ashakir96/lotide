const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if (!item === callback(item)) {
      output.push(item);
    } else {
      break;
    }
  } return output;
};

module.exports = takeUntil;