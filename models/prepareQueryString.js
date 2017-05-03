const removeDataFromSearch = require("./removeDataFromSearch");

function prepareQueryForDatabaseSearch(query) {
  var query_array = query.split(" ");
  var stripped_query = removeDataFromSearch(query_array);
  return appendPercentageCharacter(stripped_query);
}

function appendPercentageCharacter(query_array) {
  return query_array.map(function(word) {
    return "%" + word + "%";
  });
}

module.exports = prepareQueryForDatabaseSearch;
