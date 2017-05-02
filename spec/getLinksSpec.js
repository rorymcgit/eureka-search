// 'use strict';
//
// const sinon = require('sinon');
// require('chai').use(require('sinon-chai'));
// const expect = require('chai').expect;
// const assert = require('assert');
// const getLinks = require('../controllers/routes/getLinks');
//
// const db = require('../db.js');
//
// describe('query', () => {
//   it('getLinks calls database querier', () => {
//     var fakeRequest, fakeResponse, spyDB;
//     fakeRequest = { params: { query: 'cats' } };
//     fakeResponse = {};
//     spyDB = sinon.spy(db, 'many');
//     getLinks(fakeRequest, fakeResponse);
//     expect(spyDB).called;
//     spyDB.restore();
//   });
// });
