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

  it('has an array of words to remove from searches', () => {
    assert.equal(prepareQueryString.nonSearchWords.constructor.name, 'Array');
  });

  it('splits the query string into an array of strings', () => {
    var appendPercentageCharacter = sinon.spy(prepareQueryString, 'appendPercentageCharacter');
    assert.equal(prepareQueryString.query.constructor.name, 'Array');
  });

  it('adds percentage sign around every word in the array', () => {
    prepareQueryString.query = ['one', 'two'];
    prepareQueryString.appendPercentageCharacter();
    assert.equal(prepareQueryString.query[0], '%one%');
    assert.equal(prepareQueryString.query[1], '%two%');
  });

  it('non search words are taken out of a query', () => {
    prepareQueryString.query = ['one', 'two', 'an'];
    prepareQueryString.removeNonSearchWords();
    assert.equal(prepareQueryString.query[2], undefined);
  });
});
