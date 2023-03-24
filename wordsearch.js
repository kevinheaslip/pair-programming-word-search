const wordSearch = (letters, word) => {
  // return false if letters is an empty array
  if (!letters.length) {
    return false;
  }
  // assuming a horizontal orientation
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let i = 0; i < horizontalJoin.length; i++) {
    if (horizontalJoin[i] === word) {
      return true;
    }
  }
  // assuming a vertical orientation, transpose the matrix
  const verticalArray = [];
  for (let i = 0; i < letters[0].length; i++) {
    verticalArray.push([]);
  }
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      verticalArray[j].push(letters[i][j]);
    }
  }

  const verticalJoin = verticalArray.map((ls) => ls.join(""));
  for (let i = 0; i < verticalJoin.length; i++) {
    if (verticalJoin[i] === word) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
