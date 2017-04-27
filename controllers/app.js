const express = require('express');
const app = express();
const getLinks = require('./routes/getLinks');

app.get('/:query', getLinks);

app.get('/', function (req, res) {
  res.render('myindex', {title: 'my index'});
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = app;
