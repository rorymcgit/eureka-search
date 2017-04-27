var db = require('../../db.js');

function getLinks(req, res) {
  db.map('SELECT url FROM links WHERE title = ${query}', req.params, a => a.url)
    .then(function (urls) {
      res.send(urls.join("</br>"));
    })
    .catch(function (error) {
      console.log('ERROR:', error);
  });
}

module.exports = getLinks;
