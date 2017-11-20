/**
 * Created by Roman Spiridonov <romars@phystech.edu> on 11/20/2017.
 */
const fs = require('fs');

var parser = require('./qdsl').parser;

let file = fs.readFileSync('./test/data/example1.qdsl', {encoding: 'utf-8'});
var lexer = parser.lexer;
lexer.setInput(file);

let r, val;
console.log("Lexer output:\n");
while (r = lexer.lex()) {
  if (r === 1) {
    break;
  }
  val = r.search(/CONST/) !== -1 ? `<${lexer.yytext}>` : "";
  console.log(`${lexer.yylloc.first_line} ${r} ${val}`);
}


console.log("Launching parser:\n");
let res = parser.parse(file);

console.log("\nas JSON:\n");
console.log(JSON.stringify(res, null, 2));

console.log("Launching CodeGen:\n");
var escodegen = require('escodegen');
console.log(escodegen.generate(res));