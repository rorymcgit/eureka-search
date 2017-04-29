const express = require('express');
const app = express();
const getLinks = require('./controllers/routes/getLinks');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  /// response being sent to the user
  res.send("Hello, you're home");
});

app.get('/about', function(req, res) {
    res.render('about');
});

// Use below to ignore favicon request? Or use guard in getLinks.js?
// app.get('/favicon.ico', function(req, res) {
//     res.sendStatus(204);
// });

/// takes users query and calls on getLinks.js
app.get('/:query', getLinks);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = app;
