const express = require('express');
const app = express();
const router = express.Router();
const getLinks = require('./routes/getLinks');
const stuff = require('./routes/stuff');

app.use(router);
// app.use(express.bodyParser());

router.get('/:query', getLinks);

router.get('/', function (req, res) {
  res.render('myindex', {title: 'my index'});
});

router.get('/this/stuff', stuff);

app.post('/searchquery', function (req, res) {
  res.render('myindex', { name: req.body.searchquery });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = router;
