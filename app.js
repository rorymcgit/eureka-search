const express = require('express');
const app = express();
const getLinks = require('./controllers/routes/getLinks');

app.get('/', function (req, res) {
  /// response being sent to the user
  res.send("Hello, you're home");
});

/// takes users query and calls on getLinks.js
app.get('/:query', getLinks);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = app;
