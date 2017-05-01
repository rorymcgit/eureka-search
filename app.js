const express = require('express'),
      getLinks = require('./controllers/routes/getLinks'),
      bodyParser = require('body-parser'),
      app = express();
      var db = require('./db.js');
      var pgp = require('pg-promise')({noLocking:true});

var urlencodedParser = bodyParser.urlencoded({ extended: true});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('search');
});

app.post('/search', urlencodedParser, function(req, res) {
  var query = req.body.searchinput;
  console.log(req.body.searchinput);
  var results = db.any('SELECT * FROM weburlsandcontent WHERE title = ${str}', {
      str: query
    }).then(function (returned_data) {
      console.log(returned_data);
      res.render('search_results', {data: returned_data, query: query});
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(3000, function () {
  console.log("I'M LISTENING #3000!");
});

module.exports = app;
