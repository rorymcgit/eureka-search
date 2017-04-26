'use strict';

var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('assert');
var testApp = require('../controllers/app.js');
var pgp = require('pg-promise')({noLocking:true});
var db = pgp('postgres://localhost/app_test');

describe('query', () => {
  it('calls db.many', () => {
    var spy = sinon.spy(db, 'many');
    console.log(testApp);
    testApp.get("/cats");
    assert(spy.called);
  });
});
