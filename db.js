var pgp = require('pg-promise')({noLocking:true});
var db = pgp('postgres://localhost/app_test');

module.exports = db;
