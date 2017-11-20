/**
 * Created by Roman Spiridonov <romars@phystech.edu> on 11/20/2017.
 */
"use strict";

const
  fs = require('fs'),
  mocha = require('mocha'),
  expect = require('chai').expect;

const
  parser = require('../qdsl').parser,
  helpers = require('./helpers');

describe("QDSL lexer", function() {
    it("lexer works correctly for simple program", function() {
      let file = fs.readFileSync('./test/data/example2.qdsl', {encoding: 'utf-8'});
      let expected = fs.readFileSync('./test/data/example2_lexer.output', {encoding: 'utf-8'});
      expected = helpers.dos2nix(expected);

      var lexer = parser.lexer;
      lexer.setInput(file);

      let r, val, res = "";
      while(r = lexer.lex()) {
        if(r === 1) {
          break;
        }
        val = r.search(/CONST/) !== -1 ? ` <${lexer.yytext}>` : "";
        res += `${lexer.yylloc.first_line} ${r}${val}\n`;
      }

      expect(res).to.have.eql(expected);
    });

    // jison.lexer bug was fixed manually in qdsl.flex
    it("correctly works with windows line endings", function() {
      let file = fs.readFileSync('./test/data/example2.qdsl', {encoding: 'utf-8'});
      file = helpers.nix2dos(file); // prepare file
      let expected = fs.readFileSync('./test/data/example2_lexer.output', {encoding: 'utf-8'});
      expected = helpers.dos2nix(expected);


      var lexer = parser.lexer;
      lexer.setInput(file);

      let r, val, res = "";
      while(r = lexer.lex()) {
        if(r === 1) {
          break;
        }
        val = r.search(/CONST/) !== -1 ? ` <${lexer.yytext}>` : "";
        res += `${lexer.yylloc.first_line} ${r}${val}\n`;
      }

      expect(res).to.have.eql(expected);
    });
});