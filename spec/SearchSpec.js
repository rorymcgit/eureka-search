'use strict';

var sinon = require('sinon');
var chai = require('chai');
var assert = require('assert');
var Search = require('../controllers/app.js');
var pgp = require('pg-promise')({noLocking:true});
var db = pgp('postgres://localhost/app_test');

describe('query', () => {
  it('calls db.many', () => {
    var spy = sinon.spy(db, 'many');
    console.log(Search.app)
    Search.get("/cats")
    assert(spy.calledOnce)
  });
});
