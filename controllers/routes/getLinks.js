var db = require('../../db.js');
var pgp = require('pg-promise')({noLocking:true});
var QueryResultError = pgp.errors.QueryResultError;
var qrec = pgp.errors.queryResultErrorCode;

function getLinks(req, res) {
	if(req.params.query !== 'favicon.ico') {
		db.map('SELECT url FROM links WHERE title = ${query}', req.params, a => a.url)
			.then(function (urls) {
				res.send(urls.join("</br>"));
			})
			.catch(function (error) {
        console.log('ERROR:\n', error);
        if(error.code === qrec.noData) {
          res.send("no links match your query");
			}
		});
	}
}

module.exports = getLinks;
