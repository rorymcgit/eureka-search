var knex = require('knex')({
  client: 'pg'
  connection: {
    database: 'myapp_test'
  }
});

var bookshelf = require('bookshelf')(knex)
