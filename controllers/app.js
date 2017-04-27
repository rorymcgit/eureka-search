const express = require('express');
const app = express();
const getLinks = require('./routes/getLinks');

app.get('/', function (req, res) {
  res.send("Hello, you're home");
});

app.get('/:query', getLinks);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = app;
