'use strict';

require('chai').use(require('sinon-chai'));

const sinon = require('sinon'),
      expect = require('chai').expect,
      assert = require('assert'),
      db = require('../db.js'),
      searchDatabase = require('../models/searchDatabase');

describe('Search Database', () => {
  it('searchDatabase calls database querier', () => {
    var fakeRequest, fakeResponse, spyDB;
    fakeRequest = { params: { query: 'cats' } };
    fakeResponse = {};
    spyDB = sinon.spy(db, 'any');
    searchDatabase(fakeRequest, fakeResponse);
    expect(spyDB).called;
    spyDB.restore();
  });
});
