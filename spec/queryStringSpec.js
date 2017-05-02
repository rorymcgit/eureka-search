// 'use strict';

require('chai').use(require('sinon-chai'));

const sinon = require('sinon'),
      expect = require('chai').expect,
      assert = require('assert'),
      PrepareQueryString = require('../models/prepareQueryString');

describe('Preparing Query String', () => {
  beforeEach(function() {
    prepareQueryString = new PrepareQueryString('query words');
  });

  it('accepts a query as a string', () => {
    assert.equal(prepareQueryString.query.constructor.name, 'String');
  });

  it('splits the query string into an array of strings', () => {
    prepareQueryString.splitQueryString()
    assert.equal(prepareQueryString.query.constructor.name, 'Array')
  })
});
