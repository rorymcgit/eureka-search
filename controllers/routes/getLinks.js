var db = require('../../db.js');
var pgp = require('pg-promise')({noLocking:true});
var QueryResultError = pgp.errors.QueryResultError;
var qrec = pgp.errors.queryResultErrorCode;
var dataRetrieval = require('../../models/dataRetrieval');

function getLinks(req, res) {
	if(req.params.query !== 'favicon.ico') {
		db.many('SELECT weburl, title, description FROM weburlsandcontent WHERE title = ${query}', req.params)
			.then(function (data) {
				console.log(data);
				content = dataRetrieval(data);
				res.send(content.join('</br>'));
			})
			.catch(function (error) {
        console.log('The error is:\n', error);
        if(error.code === qrec.noData) {
          res.send('No links match your query');
			}
		});
	}
}

module.exports = getLinks;
