/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var qdsl = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[2,11],$V2=[1,8],$V3=[1,7],$V4=[1,10],$V5=[1,16],$V6=[1,12],$V7=[1,13],$V8=[1,14],$V9=[1,15],$Va=[1,6,9,15,16,19,22,26,35,36,37],$Vb=[1,25],$Vc=[1,26],$Vd=[1,27],$Ve=[1,28],$Vf=[1,29],$Vg=[1,30],$Vh=[1,31],$Vi=[1,32],$Vj=[1,33],$Vk=[1,34],$Vl=[6,13,21,25,26,27,28,29,30,31,32,33,34],$Vm=[13,21],$Vn=[6,13,21,25,26,27,28,29,30,31,32,33],$Vo=[6,13,21,25,26,29,30,31,32,33],$Vp=[6,13,21];
var parser = {trace: function trace() {
        Jison.print.apply(null, arguments);
    },
yy: {},
symbols_: {"error":2,"program":3,"body":4,"var":5,";":6,"function":7,"expr_stmt":8,"FUNCTION":9,"id":10,"(":11,"params":12,")":13,"{":14,"}":15,"VAR":16,"=":17,"expr":18,"RETURN":19,"params_nonempty":20,",":21,"ID":22,"args":23,"args_nonempty":24,"+":25,"-":26,"*":27,"/":28,"<":29,"LE":30,"GE":31,">":32,"EQ":33,"^":34,"INT_CONST":35,"BOOL_CONST":36,"STR_CONST":37,"$accept":0,"$end":1},
terminals_: {2:"error",6:";",9:"FUNCTION",11:"(",13:")",14:"{",15:"}",16:"VAR",17:"=",19:"RETURN",21:",",22:"ID",25:"+",26:"-",27:"*",28:"/",29:"<",30:"LE",31:"GE",32:">",33:"EQ",34:"^",35:"INT_CONST",36:"BOOL_CONST",37:"STR_CONST"},
productions_: [0,[3,1],[4,2],[4,3],[4,2],[4,1],[4,2],[4,2],[4,3],[7,8],[5,4],[8,0],[8,1],[8,2],[12,0],[12,1],[20,1],[20,3],[10,1],[23,0],[23,1],[24,1],[24,3],[18,4],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,2],[18,1],[18,1],[18,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

    this.$ = {type: "Program", body: $$[$0], sourceType: "script"};
    typeof console !== 'undefined' ? debug(JSON.stringify($$[$0], null, 2)) : print($$[$0]);
    return this.$;

break;
case 2: case 7:
 this.$ = [$$[$0-1]]; 
break;
case 3: case 8:
 this.$ = appendChild($$[$0-2], $$[$0-1]); 
break;
case 5: case 16: case 21:
 this.$ = [$$[$0]]; 
break;
case 6:
 this.$ = appendChild($$[$0-1], $$[$0]); 
break;
case 9:
 this.$ = {type: "FunctionDeclaration", id: $$[$0-6], params: $$[$0-4],
        body: {type: "BlockStatement", body: $$[$0-1]}, async: false, expression: false, generator: false}; 
break;
case 10:
 this.$ = {type: "VariableDeclaration", kind: "var", declarations:
                [{type: "VariableDeclarator", id: $$[$0-2], "init": $$[$0]}], };
    
break;
case 11:
 this.$ = {type: "EmptyStatement"};  
break;
case 12:
 this.$ = {type: "ExpressionStatement", "expression": $$[$0]}; 
break;
case 13:
 this.$ = {type: "ReturnStatement", "argument": $$[$0]}; 
break;
case 14: case 19:
 this.$ = []; 
break;
case 15: case 20: case 38:
 this.$ = $$[$0]; 
break;
case 17: case 22:
 this.$ = appendChild($$[$0-2], $$[$0]); 
break;
case 18:
 this.$ = {"type": "Identifier", "name": $$[$0]}; 
break;
case 23:
 this.$ = {type: "CallExpression", "callee": $$[$0-3], "arguments": $$[$0-1]}; 
break;
case 24:
 this.$ = {type: "BinaryExpression", operator: "+", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 25:
 this.$ = {type: "BinaryExpression", operator: "-", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 26:
 this.$ = {type: "BinaryExpression", operator: "*", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 27:
 this.$ = {type: "BinaryExpression", operator: "/", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 28:
 this.$ = {type: "BinaryExpression", operator: "<", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 29:
 this.$ = {type: "BinaryExpression", operator: "<=", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 30:
 this.$ = {type: "BinaryExpression", operator: ">=", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 31:
 this.$ = {type: "BinaryExpression", operator: ">", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 32:
 this.$ = {type: "BinaryExpression", operator: "==", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 33:
 this.$ = {type: "BinaryExpression", operator: "^", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 34:
 this.$ = {type: "UnaryExpression", operator: "-", "argument": $$[$0]}; 
break;
case 35:
 this.$ = {type: "Literal", value: parseInt(yytext), raw: $$[$0]}; 
break;
case 36:
 this.$ = {type: "Literal", value: JSON.parse(yytext), raw: $$[$0]}; 
break;
case 37:
 this.$ = {type: "Literal", value: yytext, raw: $$[$0]}; 
break;
}
},
table: [{2:$V0,3:1,4:2,5:3,6:$V1,7:5,8:6,9:$V2,10:11,16:$V3,18:9,19:$V4,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{1:[3]},{1:[2,1],5:17,6:$V1,7:18,8:19,9:$V2,10:11,16:$V3,18:9,19:$V4,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{6:[1,20]},{6:[1,21]},o($Va,[2,5]),{6:[1,22]},{10:23,22:$V5},{10:24,22:$V5},{6:[2,12],25:$Vb,26:$Vc,27:$Vd,28:$Ve,29:$Vf,30:$Vg,31:$Vh,32:$Vi,33:$Vj,34:$Vk},{10:11,18:35,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},o($Vl,[2,38],{11:[1,36]}),{10:11,18:37,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},o($Vl,[2,35]),o($Vl,[2,36]),o($Vl,[2,37]),o([6,11,13,17,21,25,26,27,28,29,30,31,32,33,34],[2,18]),{6:[1,38]},o($Va,[2,6]),{6:[1,39]},o($Va,[2,2]),o($Va,[2,4]),o($Va,[2,7]),{17:[1,40]},{11:[1,41]},{10:11,18:42,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:43,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:44,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:45,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:46,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:47,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:48,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:49,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:50,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:11,18:51,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{6:[2,13],25:$Vb,26:$Vc,27:$Vd,28:$Ve,29:$Vf,30:$Vg,31:$Vh,32:$Vi,33:$Vj,34:$Vk},o($Vm,[2,19],{10:11,23:52,24:53,18:54,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9}),o($Vn,[2,34],{34:$Vk}),o($Va,[2,3]),o($Va,[2,8]),{10:11,18:55,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{10:58,12:56,13:[2,14],20:57,22:$V5},o($Vo,[2,24],{27:$Vd,28:$Ve,34:$Vk}),o($Vo,[2,25],{27:$Vd,28:$Ve,34:$Vk}),o($Vn,[2,26],{34:$Vk}),o($Vn,[2,27],{34:$Vk}),o($Vp,[2,28],{25:$Vb,26:$Vc,27:$Vd,28:$Ve,34:$Vk}),o($Vp,[2,29],{25:$Vb,26:$Vc,27:$Vd,28:$Ve,34:$Vk}),o($Vp,[2,30],{25:$Vb,26:$Vc,27:$Vd,28:$Ve,34:$Vk}),o($Vp,[2,31],{25:$Vb,26:$Vc,27:$Vd,28:$Ve,34:$Vk}),o($Vp,[2,32],{25:$Vb,26:$Vc,27:$Vd,28:$Ve,34:$Vk}),o($Vl,[2,33]),{13:[1,59],21:[1,60]},o($Vm,[2,20]),o($Vm,[2,21],{25:$Vb,26:$Vc,27:$Vd,28:$Ve,29:$Vf,30:$Vg,31:$Vh,32:$Vi,33:$Vj,34:$Vk}),{6:[2,10],25:$Vb,26:$Vc,27:$Vd,28:$Ve,29:$Vf,30:$Vg,31:$Vh,32:$Vi,33:$Vj,34:$Vk},{13:[1,61]},{13:[2,15],21:[1,62]},o($Vm,[2,16]),o($Vl,[2,23]),{10:11,18:63,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},{14:[1,64]},{10:65,22:$V5},o($Vm,[2,22],{25:$Vb,26:$Vc,27:$Vd,28:$Ve,29:$Vf,30:$Vg,31:$Vh,32:$Vi,33:$Vj,34:$Vk}),{2:$V0,4:66,5:3,6:$V1,7:5,8:6,9:$V2,10:11,16:$V3,18:9,19:$V4,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},o($Vm,[2,17]),{5:17,6:$V1,7:18,8:19,9:$V2,10:11,15:[1,67],16:$V3,18:9,19:$V4,22:$V5,26:$V6,35:$V7,36:$V8,37:$V9},o($Va,[2,9])],
defaultActions: {},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    var Jison = require('jison');
    var debug = require('debug')('qdsl:parser');

    function appendChild(node, child) {
        node.splice(node.length, 0, child);
        return node;
    }


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
    var nested_comment_count = 0,
        string_error = false,
        MAX_STR_CONST = 256,
        string_buf = "";

    yy.lval = undefined;
    yy.error_msg = undefined;
    yy.curr_lineno = 1;
    yy.lex_error = () => {
      console.error(`Lexer error at line ${yy.curr_lineno}:\n${this.showPosition()}\n`, yy.error_msg);
    };

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "LE";
break;
case 1:return "GE";
break;
case 2:return "EQ";
break;
case 3:return "FUNCTION";
break;
case 4:return "RETURN";
break;
case 5:return "INT_CONST";
break;
case 6:return "BOOL_CONST";
break;
case 7:return "BOOL_CONST";
break;
case 8:yy.curr_lineno++;
break;
case 9:this.pushState('LINE_COMMENT');
break;
case 10:;
break;
case 11:
  yy.curr_lineno++;
  this.popState();

break;
case 12:this.popState();  // eof in this case is ok
break;
case 13:
  yy.error_msg = "Unmatched *)";
  yy.lex_error();

break;
case 14:this.pushState("COMMENT");
break;
case 15:nested_comment_count++;
break;
case 16:
  if(nested_comment_count == 0)
    this.popState();
  else
    nested_comment_count--;

break;
case 17:;
break;
case 18:yy.curr_lineno++;
break;
case 19:
  yy.error_msg = "EOF in comment";
  this.popState();
  yy.lex_error();

break;
case 20:; // skip whitespace
break;
case 21:return "ELSE";
break;
case 22:return "IF";
break;
case 23:return "VAR";
break;
case 24:return "ID";
break;
case 25:  // "
  // String constants (C syntax) Escape sequence \c is accepted for all characters c. Except for \n \t \b \f, the result is c.
  string_error = false;
  string_buf = "";
  this.pushState('STRING');

break;
case 26:  // "
  this.popState();
  if(!string_error) {
    if(string_buf.length >= MAX_STR_CONST) {
      yy.error_msg = "String constant too long";
      string_error = true;
      yy.lex_error();
      // error recovery
      string_buf.length = MAX_STR_CONST;
    }
    return "STR_CONST";
  }

break;
case 27:  // support both win and unix style of line endings
  string_buf += '\n';
  yy.curr_lineno++;

break;
case 28:string_buf += '\t';
break;
case 29:string_buf += '\n';
break;
case 30:string_buf += '\b';
break;
case 31:string_buf += '\f';
break;
case 32:
  this.popState();
  if(!string_error) {
    this.error_msg = "Unterminated string constant";
    return "ERROR";
  }

break;
case 33:
  if(!string_error) {
    yy.error_msg = "String contains null character";
    string_error = true;
    yy.lex_error();
  }

break;
case 34:string_buf += yy_.yytext;
break;
case 35:  //"
        string_buf += yy_.yytext;

break;
case 36:
        // octal escape sequence
        var result = parseInt(yy_.yytext, 8);
        if ( result > 0xff ) {
          if(!string_error) {
            yy.error_msg = "Escape code is out of bounds";
            string_error = true;
            yy.lex_error();
          }
        }
        string_buf += String.fromCharCode(result);

break;
case 37:
        // like '\48' or '\0777777'
        if(!string_error) {
          yy.error_msg = "Invalid escaped character";
          string_error = true;
          yy.lex_error();
        }

break;
case 38:
  this.popState();
  if(!string_error) {
    yy.error_msg = "EOF in string";
    yy.lex_error();
  }

break;
case 39:
  return yy_.yytext;

break;
case 40:
  yy.error_msg = "Null character in code: ";
  yy.lex_error();

break;
case 41:
  yy.error_msg = "Skipping token: " + yy_.yytext;
  yy.lex_error();
  // simply skip error tokens

break;
case 42:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:function)/,/^(?:return)/,/^(?:(([0-9])*\.?([0-9])+|([0-9])+\.))/,/^(?:true)/,/^(?:false)/,/^(?:\n)/,/^(?:\/\/)/,/^(?:[^\n]*)/,/^(?:\n)/,/^(?:$)/,/^(?:\*\/)/,/^(?:\/\*)/,/^(?:\/\*)/,/^(?:\*\/)/,/^(?:([^\/*\n]+)|.)/,/^(?:\n)/,/^(?:$)/,/^(?:[ \t\f\r\v]+)/,/^(?:else)/,/^(?:if)/,/^(?:var)/,/^(?:([a-zA-Z][_a-zA-Z0-9]*))/,/^(?:")/,/^(?:")/,/^(?:\\\n|\\\r\n)/,/^(?:\\t)/,/^(?:\\n)/,/^(?:\\b)/,/^(?:\\f)/,/^(?:\n)/,/^(?:\0|\\\0)/,/^(?:\\[^\0])/,/^(?:[^\0\\\n\"]+)/,/^(?:\\[0-7]{1,3})/,/^(?:\\[0-9]+)/,/^(?:$)/,/^(?:\+|\/|-|\*|=|<|>|,|;|\(|\)|\{|\})/,/^(?:\0)/,/^(?:.)/,/^(?:.)/],
conditions: {"INHERITSDEF":{"rules":[],"inclusive":false},"CLASSDEF":{"rules":[],"inclusive":false},"STRING":{"rules":[26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":false},"LINE_COMMENT":{"rules":[10,11,12],"inclusive":false},"COMMENT":{"rules":[15,16,17,18,19],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,13,14,20,21,22,23,24,25,39,40,41,42],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = qdsl;
exports.Parser = qdsl.Parser;
exports.parse = function () { return qdsl.parse.apply(qdsl, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}