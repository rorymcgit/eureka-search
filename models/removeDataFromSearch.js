var nonSearchWords = [
  "a",
  "an",
  "the",
  "is",
  "and",
  "or",
  "www.",
  "he",
  "she",
  "it",
  "they",
  "i"
];

function removeDataFromSearch(query) {
  return _difference(query, nonSearchWords);
}

function _difference(queryArray, wordsToRemove) {
  return queryArray.filter(function(word) {
    return wordsToRemove.indexOf(word) === -1;
  });
}

module.exports = removeDataFromSearch;
