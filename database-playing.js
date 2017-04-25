var knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'clemcapelbird',
    database: 'myapp_test'
  }
});

module.exports = require('bookshelf')(knex);

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
});
