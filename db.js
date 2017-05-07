var pgp = require('pg-promise')({noLocking:true});
var db = pgp('postgres://localhost/eureka_development');

module.exports = db;
