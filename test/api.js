/**
 * Created by Roman Spiridonov <romars@phystech.edu> on 11/20/2017.
 */
"use strict";

const
  fs = require('fs'),
  mocha = require('mocha'),
  expect = require('chai').expect;

const
  qdsl = require('../index');

// Load test files
const
  example1 = fs.readFileSync('./test/data/example1.qdsl', {encoding: 'utf-8'}),
  example1_error = fs.readFileSync('./test/data/example1_error.qdsl', {encoding: 'utf-8'});

describe("API", function() {
  it.skip('runs algorithm and calculates variables, plus returns number of tries', function(done) {
    qdsl.run(example1, (err, vars) => {
      expect(vars).to.have.all.keys("_seed", "_tries", "a1", "a2", "b");
      expect(vars._tries >= 1).to.be.true;
      expect(vars._seed).to.be.a('number');
      expect(vars).to.have.property('a1').that.is.a('number');
      expect(vars).to.have.property('a2').that.is.a('string');
      expect(vars).to.have.property('b').that.is.a('number');
      expect(vars.a1 <= 3).to.be.true;

      expect(qdsl.getVars()).to.equal(vars);

      // run second time, verify that seed is different
      let oldSeed = vars._seed;
      qdsl.run(example1, (err, vars) => {
        expect(vars._seed).to.not.equal(oldSeed);
        done();
      });
    });
  });

  it.skip('performs error recovery and produces error messages', function(done) {
      qdsl.run(example1_error, (err, vars) => {
          expect(vars).to.have.all.keys("_errors", "a2");
          expect(vars._errors.length>=1);
          expect(vars.a2).to.equal(undefined);
          done();
      });
  });

  it.skip('allows to run custom function', function(done) {
      qdsl.run(example1, (err, vars) => {
          expect(vars.fact(3)).to.equal(6);
      });
  });

});
