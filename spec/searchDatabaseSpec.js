"use strict";

const expect = require("chai").expect,
  searchDatabase = require("../models/searchDatabase");

describe("Search Database", () => {
  it("searchDatabase accepts a string and returns an object", () => {
    expect(searchDatabase("string")).to.eql({});
  });

  it("test length", () => {
    var call_search_database = searchDatabase("string");
    expect(call_search_database).to.be.a("promise");
  });
});
