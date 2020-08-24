const letterPositions = function(sentence) {
  let results = {};
  let index = 0;
  for (let letter of sentence) {
    if (letter !== " ") {
      if (letter in results) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    } index++;
  } return results;
};

module.exports = letterPositions;