var db = require('../db.js');
var pgp = require('pg-promise')({noLocking:true});
var prepareQueryString = require('./prepareQueryString');

function searchDatabase(search) {
  var description_search,
  title_search,
  keyword_search;

  prepareQueryString(search).then(function(search_array) {

    for(var i = 0; i < search_array.length; i++) {
      description_search = db.any('SELECT * FROM weburlsandcontent WHERE description LIKE ${str}', {
        str: search_array[i]
      });
      title_search = db.any('SELECT * FROM weburlsandcontent WHERE title LIKE ${str}', {
        str: search_array[i]
      });
      keyword_search = db.any('SELECT * FROM weburlsandcontent WHERE keywords LIKE ${str}', {
        str: search_array[i]
      });
    }
    return Promise.all([description_search, title_search, keyword_search]);
  });
}

module.exports = searchDatabase;
