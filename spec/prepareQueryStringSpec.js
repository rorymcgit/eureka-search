"use strict";

require("chai").use(require("sinon-chai"));

var chai = require("chai"), spies = require("chai-spies");

const assert = require("assert"),
  expect = require("chai").expect,
  sinon = require("sinon"),
  prepareQueryForDatabaseSearch = require("../models/prepareQueryString");

describe("Preparing Query String For Database Search", () => {
  it("splits the search into an array", () => {
    expect(prepareQueryForDatabaseSearch("cats and dogs")).to.eql([
      "%cats%",
      "%dogs%"
    ]);

    it("returns an empty array when input is empty", () => {
      expect(prepareQueryForDatabaseSearch("cats   dogs   cats")).to.eql([]);
    });

    it("removes duplicate words", () => {
      run_remove_data_from_search = removeDataFromSearch(["cats", "cats"]);
      expect(run_remove_data_from_search).to.eql(["%cats%"]);
    });
  });
});
