var db = require('../db.js');
var pgp = require('pg-promise')({noLocking:true});

var QueryResultError = pgp.errors.QueryResultError;
var qrec = pgp.errors.queryResultErrorCode;

function getData(search_request) {
  db.any('SELECT * FROM weburlsandcontent WHERE title = ${str}', {
    str: search_request
  })
  .then(function (returned_data) {
    sayhello(returned_data)
    // console.log(returned_data[0].id)
    return returned_data
  })
  ;}

  module.exports = getData;


function sayhello(string) {
  console.log(string)
}
