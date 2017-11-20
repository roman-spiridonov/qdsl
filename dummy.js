/**
 * Created by Roman Spiridonov <romars@phystech.edu> on 11/20/2017.
 */
const fs = require('fs');

var parser = require('./qdsl').parser;

let file = fs.readFileSync('./test/data/example1.qdsl', {encoding: 'utf-8'});
var lexer = parser.lexer;
lexer.setInput(file);

let r;
console.log("Lexer output:\n");
while(r = lexer.lex()) {
    if(r === 1) {
        break;
    }
    console.log(lexer.yylloc.first_line, r);
}
//
//
// console.log("Launching parser:\n");
// let res = parser.parse(file);
//
// console.log("\nas JSON:\n");
// console.log(JSON.stringify(res, null, 2));
