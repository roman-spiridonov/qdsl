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
%nonassoc LE '<' GE '>' EQ NEQ
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


body : var	/* single var */
    { $$ = [$1]; }
| body var /* several vars */
    { $$ = appendChild($1, $2); }
| error ';'
| function	/* single function*/
    { $$ = [$1]; }
| body function	/* several functions */
    { $$ = appendChild($1, $2); }
| expr_stmt
    { $$ = [$1]; }
| body expr_stmt
    { $$ = appendChild($1, $2); }
;

function : FUNCTION id '(' params ')' '{' body '}'
    { $$ = {type: "FunctionDeclaration", id: $2, params: $4,
        body: {type: "BlockStatement", body: $7}, async: false, expression: false, generator: false}; }
;

var	: VAR id '=' expr ';' // '
    { $$ = {type: "VariableDeclaration", kind: "var", declarations:
                [{type: "VariableDeclarator", id: $2, "init": $4}], };
    }
;

expr_stmt: ';' /* empty */
    { $$ = {type: "EmptyStatement"};  }
| expr ';'
    { $$ = {type: "ExpressionStatement", "expression": $1}; }
| if_stmt
    { $$ = $1; }
| RETURN expr ';'
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
| expr NEQ expr
    { $$ = {type: "BinaryExpression", operator: "!=", "left": $1, "right": $3}; }
| expr '^' expr
    { $$ = {type: "BinaryExpression", operator: "^", "left": $1, "right": $3}; }
| '-' expr %prec NEG
    { $$ = {type: "UnaryExpression", operator: "-", "argument": $2}; }
| array
    { $$ = $1; }
| obj
    { $$ = $1; }
| int
    { $$ = $1; }
| bool
    { $$ = $1; }
| string
    { $$ = $1; }
| id
    { $$ = $1; }
;

if_stmt: IF '(' expr ')' '{' body '}'
    { $$ = {type: "IfStatement", test: $3, consequent: {type: "BlockStatement", body: $6},
            alternate: null}; }
| IF '(' expr ')' '{' body '}' ELSE '{' body '}'
    { $$ = {type: "IfStatement", test: $3, consequent: {type: "BlockStatement", body: $6},
            alternate: {type: "BlockStatement", body: $10}}; }
;

int: NUM_CONST
  { $$ = {type: "Literal", value: parseFloat(yytext), raw: $1}; }
;
bool: BOOL_CONST
  { $$ = {type: "Literal", value: JSON.parse(yytext), raw: $1}; }
;
string: STR_CONST
  { $$ = {type: "Literal", value: yytext, raw: "\""+$1+"\""}; }
;

array: '[' ']'
    { $$ = {type: "ArrayExpression", elements: [] }; }
| '[' values ']'
    { $$ = {type: "ArrayExpression", elements: $2 }; }
;

values: value
    { $$ = [$1]; }
| values ',' value
    { $$ = appendChild($1, $3); }
;

value: expr
{
  $$ = $1;
};

obj: '{' kv_pairs '}'
    { $$ = {type: "ObjectExpression", "properties": $2}; }
| '{' values '}'
    { $$ = {type: "ObjectExpression", "properties": $2}; }
;

// {key: value, ...}
kv_pairs: /* empty */
    { $$ = []; }
| kv_pairs_nonempty
    { $$ = $1; }
;

kv_pairs_nonempty: kv_pair
    { $$ = [$1]; }
| kv_pairs_nonempty ',' kv_pair
    { $$ = appendChild($1, $3); }
;


kv_pair: key expr
    { $$ = {type: "Property", "key": $1, "value": $2,
            "computed": false, "kind": "init", "method": false, "shorthand": false} }
;

key: id ':'
  { $$ = $1; }
| int ':'
  { $$ = $1; }
| string ':'
  { $$ = $1; }
;


// {1, 2} -> {1: 1, 2: 2}
set_values: set_value
    { $$ = [$1]; }
| set_values ',' set_value
    { $$ = appendChild($1, $3); }
;

set_value: expr
{
  if(yy.key_id === null) yy.key_id = 1;
  $$ = {type: "Property", "key": {type: "Literal", value: yy.key_id, "raw": `${yy.key_id}`}, value: $1};
  yy.key_id++;
};

/* end of grammar */
%%
