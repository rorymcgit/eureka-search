'use strict'

const Search = require('./Search')
const expect = require('chai').expect

describe('Search module', () => {
  it('should export a function', () => {
    expect(Search.up).to.be.a('function')
  })
})
