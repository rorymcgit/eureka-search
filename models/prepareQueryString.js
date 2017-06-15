const removeDataFromSearch = require("./removeDataFromSearch");

function prepareQueryForDatabaseSearch(query) {
  var queryArray = query.split(" ");
  var strippedQuery = removeDataFromSearch(queryArray);
  return appendPercentageCharacter(strippedQuery);
}

function appendPercentageCharacter(queryArray) {
  return queryArray.map(function(word) {
    return "%" + word + "%";
  });
}

module.exports = prepareQueryForDatabaseSearch;
