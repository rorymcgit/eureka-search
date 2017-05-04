require('chai').use(require('sinon-chai'));

const sinon = require('sinon'),
      expect = require('chai').expect,
      assert = require('assert'),
      removeDataFromSearch = require('../models/removeDataFromSearch');

describe('Remove Data From Search', () => {
  it('takes a user search and returns an array of their search', () => {
    run_remove_data_from_search = removeDataFromSearch(['cats', 'and', 'dogs']);
    expect(run_remove_data_from_search).to.eql(['cats', 'dogs']);
  });

  it('takes a user search and removes unwanted common words', () => {
    run_remove_data_from_search = removeDataFromSearch(['cats', 'and', 'dogs']);
    expect(run_remove_data_from_search).to.not.include.members(['and']);
  });
});
