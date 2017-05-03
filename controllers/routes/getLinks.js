
// var db = require('../../db.js');
// var pgp = require('pg-promise')({noLocking:true});
//
// var QueryResultError = pgp.errors.QueryResultError;
// var qrec = pgp.errors.queryResultErrorCode;
//
// function getLinks(req, res) {
// 	// need to find out why favicon and style are treated as queries
// 	if(req.params.query !== 'favicon.ico' && req.params.query !== 'style.css' && req.params.query !== '307') {
// 		db.many('SELECT weburl, title, description FROM weburlsandcontent WHERE title = ${query}', req.params)
// 			.then(function (retrieved_data) {
// 				res.render('search_results', {results: retrieved_data});
// 				console.log(req.params.query);
// 			})
// 			.catch(function (error) {
//         console.log('The error is:\n', error);
//         if(error.code === qrec.noData) {
//           res.send('No links match your query');
// 			}
// 		});
// 	}
// }
//
// module.exports = getLinks;
