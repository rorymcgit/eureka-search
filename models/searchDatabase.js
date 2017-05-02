var db = require('../db.js');
var pgp = require('pg-promise')({noLocking:true});
var prepareQueryString = require('./prepareQueryString');

function searchDatabase(search) {
  var description_search = [];
  var title_search = [];
  var keyword_search;
  
  search = ["%fish%"];
  for(i=0; i < search.length; i++){
    description_search.push(db.any('SELECT * FROM weburlsandcontent WHERE description LIKE ${str}', {
      str: search[i]
    }));
    title_search.push(db.any('SELECT * FROM weburlsandcontent WHERE title LIKE ${str}', {
      str: search[i]
    }));
    keyword_search = db.any('SELECT * FROM weburlsandcontent WHERE keywords LIKE ${str}', {
      str: search[i]
    });
  }

  console.log("keyword:", keyword_search)
  console.log("title:", title_search)
  console.log("desc:", description_search)

  return Promise.all([description_search, title_search, keyword_search]);
}

module.exports = searchDatabase;
