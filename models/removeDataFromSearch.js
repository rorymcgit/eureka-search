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
  remove_unwanted_characters = difference(query, nonSearchWords);
  return remove_unwanted_characters;
}

function difference(query_array, wordsToRemove) {
  return query_array.filter(function(word) {
    return wordsToRemove.indexOf(word) < 0;
  });
}

module.exports = removeDataFromSearch;
