var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://localhost/app_test');

var query = "cats";

db.many("SELECT url FROM links WHERE title = '" + query + "'")
  .then(function (data) {
    console.log('DATA:', data[0].url);
  })
  .catch(function (error) {
    console.log('ERROR:', error);
});
