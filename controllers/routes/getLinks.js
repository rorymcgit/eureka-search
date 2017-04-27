var urlRetrieval = require('../../models/urlRetrieval');

var db = require('../../db');
var pgp = require('pg-promise')({noLocking:true});
var QueryResultError = pgp.errors.QueryResultError;
var qrec = pgp.errors.queryResultErrorCode;


function getLinks(req, res) {
  if(req.params.query !== 'favicon.ico'){
    /// many, then and catch is from the promise library
    /// 'many' retrieves from db urls where search term matches links 'title'(db)
    db.many("SELECT url FROM links WHERE title = '" + req.params.query + "'")
      .then(function (data) {
        var urls = urlRetrieval(data);
        res.send(urls.join("</br>"));
      })
      /// catching any errors e.g query not in database
      /// will be improved later, to inform user
      .catch(function (error) {
        console.log('The error is:\n', error);
        // console.log(qrec);
        // if the error code you get matches the error code of 'no data retrieved'
        if(error.code === qrec.noData) {
          res.send("no links match your query");
        }
    });
  }
}

module.exports = getLinks;
