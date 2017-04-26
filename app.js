var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://localhost/app_test');

db.one('SELECT name FROM users WHERE id = 1')
  .then(function (data) {
    console.log('DATA:', data);
  })
  .catch(function (error) {
    console.log('ERROR:', error);
  });
