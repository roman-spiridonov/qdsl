%{
    var Jison = require('jison');
    var debug = require('debug')('qdsl:parser');

    function appendChild(node, child) {
        node.splice(node.length, 0, child);
        return node;
    }

%}

/* operator associations and precedence */
%nonassoc RETURN
%right "="
%nonassoc LE '<' GE '>' EQ
%left '+' '-'
%left '*' '/'
%left NEG
%left '^'
%left '.'

%%
/* start of grammar */

program	: body {
    $$ = {type: "Program", body: $1, sourceType: "script"};
    typeof console !== 'undefined' ? debug(JSON.stringify($1, null, 2)) : print($1);
    return $$;
};


body : var ';'		/* single var */
    { $$ = [$1]; }
| body var ';'	/* several vars */
    { $$ = appendChild($1, $2); }
| error ';'
| function	/* single function*/
    { $$ = [$1]; }
| body function	/* several functions */
    { $$ = appendChild($1, $2); }
| expr_stmt ';'
    { $$ = [$1]; }
| body expr_stmt ';'
    { $$ = appendChild($1, $2); }
;

function : FUNCTION id '(' params ')' '{' body '}'
    { $$ = {type: "FunctionDeclaration", id: $2, params: $4,
        body: {type: "BlockStatement", body: $7}, async: false, expression: false, generator: false}; }
;

var	: VAR id '=' expr // '
    { $$ = {type: "VariableDeclaration", kind: "var", declarations:
                [{type: "VariableDeclarator", id: $2, "init": $4}], };
    }
;

expr_stmt: /* empty */
    { $$ = {type: "EmptyStatement"};  }
| expr
    { $$ = {type: "ExpressionStatement", "expression": $1}; }
| RETURN expr
    { $$ = {type: "ReturnStatement", "argument": $2}; }
;

/* Comma-separated list */
params: /* empty */
    { $$ = []; }
| params_nonempty
    { $$ = $1; }
;

params_nonempty: id
    { $$ = [$1]; }
| params_nonempty ',' id
    { $$ = appendChild($1, $3); }
;

id: ID
    { $$ = {"type": "Identifier", "name": $1}; }
;

args: /* empty */
    { $$ = []; }
| args_nonempty
    { $$ = $1; }
;

args_nonempty: expr
    { $$ = [$1]; }
| args ',' expr
    { $$ = appendChild($1, $3); }
;


expr: id '(' args ')'
    { $$ = {type: "CallExpression", "callee": $1, "arguments": $3}; }
| expr '+' expr
    { $$ = {type: "BinaryExpression", operator: "+", "left": $1, "right": $3}; }
| expr '-' expr
    { $$ = {type: "BinaryExpression", operator: "-", "left": $1, "right": $3}; }
| expr '*' expr
    { $$ = {type: "BinaryExpression", operator: "*", "left": $1, "right": $3}; }
| expr '/' expr
    { $$ = {type: "BinaryExpression", operator: "/", "left": $1, "right": $3}; }
| expr '<' expr
    { $$ = {type: "BinaryExpression", operator: "<", "left": $1, "right": $3}; }
| expr LE expr
    { $$ = {type: "BinaryExpression", operator: "<=", "left": $1, "right": $3}; }
| expr GE expr
    { $$ = {type: "BinaryExpression", operator: ">=", "left": $1, "right": $3}; }
| expr '>' expr
    { $$ = {type: "BinaryExpression", operator: ">", "left": $1, "right": $3}; }
| expr EQ expr
    { $$ = {type: "BinaryExpression", operator: "==", "left": $1, "right": $3}; }
| expr '^' expr
    { $$ = {type: "BinaryExpression", operator: "^", "left": $1, "right": $3}; }
| '-' expr %prec NEG
    { $$ = {type: "UnaryExpression", operator: "-", "argument": $2}; }
| INT_CONST
    { $$ = {type: "Literal", value: parseInt(yytext), raw: $1}; }
| BOOL_CONST
    { $$ = {type: "Literal", value: JSON.parse(yytext), raw: $1}; }
| STR_CONST
    { $$ = {type: "Literal", value: yytext, raw: $1}; }
| id
    { $$ = $1; }
;

/* end of grammar */
%%
