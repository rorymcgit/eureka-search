'use strict';

const sinon = require('sinon');
require('chai').use(require('sinon-chai'));
const expect = require('chai').expect;
const assert = require('assert');

const dataRetrieval = require('../models/dataRetrieval');

describe('retrieval', () => {
  it('adds urls from database rows to an array', () => {
    var fakeData;
    fakeData = [{ weburl: 'www.cats.com' }];
    var retrieved = dataRetrieval(fakeData);
    expect(retrieved[0]).to.equal("www.cats.com");
  });
});
