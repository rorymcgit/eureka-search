var db = require('../../db.js');

function getLinks(req, res) {
  db.many("SELECT url FROM links WHERE title = '" + req.params.query + "'")
    .then(function (data) {
      var urls = [];
      for(var i = 0; i < data.length; i++) {
        urls.push(data[i].url);
      }
      res.send(urls.join("</br>"));
    })
    .catch(function (error) {
      console.log('ERROR:', error);
  });
}

module.exports = getLinks;
