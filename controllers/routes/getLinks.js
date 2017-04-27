var retrieval = require('../../models/urlRetrieval');
var db = require('../../db');

function getLinks(req, res) {
  if (req.params.query !== 'favicon.ico'){
    /// many, then and catch is from the promise library
    /// 'many' retrieves from db urls where search term matches links 'title'(db)
    db.many("SELECT url FROM links WHERE title = '" + req.params.query + "'")
      .then(function (data) {
        var urls = retrieval(data);
        res.send(urls.join("</br>"));
      })
      /// catching any errors e.g query not in database
      /// will be improved later, to inform user
      .catch(function (error) {
        console.log('ERROR:', error);
    });
  }
}

module.exports = getLinks;
