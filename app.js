const express = require('express'),
      getLinks = require('./controllers/routes/getLinks'),
      bodyParser = require('body-parser'),
      getData = require('./models/searchDatabase'),
      app = express();
      var db = require('./db.js');
      var pgp = require('pg-promise')({noLocking:true});

      // body parser- parse incoming request bodies in a middleware before your handlers, available under the re.body property.

var urlencodedParser = bodyParser.urlencoded({ extended: true});

//search engine view to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('search');
});

app.post('/search', urlencodedParser, function(req, res) {
  var query = req.body.searchinput;
  console.log(req.body.searchinput)
  var results = db.any('SELECT * FROM weburlsandcontent WHERE title = ${str}', {
      str: query
    }).then(function (returned_data) {
      console.log(returned_data)
      res.render('search_results', {data: returned_data });
    })
})

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/:query', getLinks);

// Use below to ignore favicon request? Or use guard in getLinks.js?
// app.get('/favicon.ico', function(req, res) {
//     res.sendStatus(204);
// });
// app.post('search', )
/// takes users query and calls on getLinks.js

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = app;
