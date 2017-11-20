/**
 * Created by Roman Spiridonov <romars@phystech.edu> on 11/20/2017.
 */
"use strict";

const
  fs = require('fs'),
  mocha = require('mocha'),
  chai = require('chai'),
  expect = chai.expect,
  chaiSubset = require('chai-subset');

chai.use(chaiSubset);

const
  parser = require('../qdsl').parser;

describe("QDSL parser", function() {
  it("Parses simple program correctly", function() {
    const example2 = fs.readFileSync('./test/data/example2.qdsl', {encoding: 'utf-8'});
    let expected = require('./data/example2_ast');

    let res = parser.parse(example2);
    expect(expected).to.eql(res);
  });
});