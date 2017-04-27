var pgp = require('pg-promise')({noLocking:true});
var db = pgp('postgres://localhost/beetle_crawler_development');

module.exports = db;
