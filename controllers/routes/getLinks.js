var db = require('../../db.js');
var pgp = require('pg-promise')({noLocking:true});
var QueryResultError = pgp.errors.QueryResultError;
var qrec = pgp.errors.queryResultErrorCode;

function getLinks(req, res) {
	// if(req.params.query !== 'favicon.ico') {
		db.map('SELECT weburl FROM weburlsandcontent WHERE title = ${query}', req.params, a => a.weburl)
			.then(function (urls) {
				res.send(urls.join("</br>"));
			})
			.catch(function (error) {
        console.log('ERROR:\n', error);
        if(error.code === qrec.noData) {
          res.send("No links match your query.");
			}
		});
	// }
}

module.exports = getLinks;
