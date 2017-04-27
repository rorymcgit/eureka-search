var retrieval = require('../../models/urlRetrieval');
var db = require('../../db');

function getLinks(req, res) {
  if (req.params.query !== 'favicon.ico'){
    db.many("SELECT url FROM links WHERE title = '" + req.params.query + "'")
      .then(function (data) {
        var urls = retrieval(data);
        res.send(urls.join("</br>"));
      })
      .catch(function (error) {
        console.log('ERROR:', error);
    });
  }
}

module.exports = getLinks;
