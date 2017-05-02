var db = require('../db.js');
var pgp = require('pg-promise')({noLocking:true});
var prepareQueryString = require('./prepareQueryString');

function searchDatabase(search) {
  var description_search = db.any('SELECT * FROM weburlsandcontent WHERE description LIKE ${str}', {
      str: search
    });
    var title_search = db.any('SELECT * FROM weburlsandcontent WHERE title LIKE ${str}', {
        str: search
      });
      var keyword_search = db.any('SELECT * FROM weburlsandcontent WHERE keywords LIKE ${str}', {
          str: search
        });

      return Promise.all([description_search, title_search, keyword_search]);
}

module.exports = searchDatabase;
