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
  it("Parses example2 (simple program) correctly", function() {
    const file = fs.readFileSync('./test/data/example2.qdsl', {encoding: 'utf-8'});
    let expected = require('./data/example2_ast');

    let res = parser.parse(file);
    expect(expected).to.eql(res);
  });

  it("Parses example1 (real use case) correctly", function() {
    const file = fs.readFileSync('./test/data/example1.qdsl', {encoding: 'utf-8'});
    let expected = require('./data/example1_ast');

    let res = parser.parse(file);
    expect(expected).to.eql(res);
  });
});