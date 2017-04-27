'use strict';

const sinon = require('sinon');
require('chai').use(require('sinon-chai'));
const expect = require('chai').expect;
const assert = require('assert');
const urlRetrieval = require('../models/urlRetrieval');

describe('retrieval', () => {
  it('adds urls from "data" to the urls array', () => {
    var fakeData;
    fakeData = [{ url: 'www.cats.com' }];
    var retrieved = urlRetrieval(fakeData)
    expect(retrieved[0]).to.equal("www.cats.com");
  });
});
