var db = require('../db.js');
var pgp = require('pg-promise')({noLocking:true});

var QueryResultError = pgp.errors.QueryResultError;
var qrec = pgp.errors.queryResultErrorCode;

function getData(search_request) {
  console.log(search_request + "hello")
		db.any('SELECT * FROM weburlsandcontent WHERE title="' + search_request + '"')
    .then(function (data) {
        return data;
			// .then(function (retrieved_data) {
			// 	return retrieved_data;
				// res.render('search_results', {results: retrieved_data});
			// });
	});}



module.exports = getData;

// db.any("select * from users")
//
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
