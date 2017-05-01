const express = require('express'),
      getLinks = require('./controllers/routes/getLinks'),
      bodyParser = require('body-parser'),
      app = express();

      // body parser- parse incoming request bodies in a middleware before your handlers, available under the re.body property.

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//search engine view to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('search');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.post('/search', function(req, res) {
  var query = req.body.searchinput;
  console.log(req.body.searchinput);
  res.redirect(307, '/' + req.body.searchinput, getLinks);
});

// app.get('/:query', getLinks);

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
