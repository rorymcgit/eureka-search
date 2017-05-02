var db = require('../db.js');
var pgp = require('pg-promise')({noLocking:true});

function searchDatabase(search) {
  var database_search = db.any('SELECT * FROM weburlsandcontent WHERE description LIKE ${str}', {
      str: search
    })
  return database_search;
}

module.exports = searchDatabase;
