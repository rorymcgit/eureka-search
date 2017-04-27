'use strict';

var sinon = require('sinon');
require('chai').use(require('sinon-chai'));
var expect = require('chai').expect;
var assert = require('assert');
var router = require('../controllers/app');
var getLinks = require('../controllers/routes/getLinks');

var testApp = require('../controllers/app.js');
var db = require('../db.js');

describe('query', () => {
  it('calls mydb.many', () => {
    var spy = sinon.spy(db, 'many');
    // console.log(testApp);
    console.log(router.get('/:query', getLinks));
    expect(spy).called;
    spy.restore();
  });
});
