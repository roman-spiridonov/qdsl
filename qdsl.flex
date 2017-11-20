%options flex

%x COMMENT
%x LINE_COMMENT
%x STRING
%x CLASSDEF
%x INHERITSDEF

DIGIT         [0-9]
ID            [a-zA-Z][_a-zA-Z0-9]*

%{
    yy.MAX_STR_CONST = 256;

    yy.error_msg = undefined;
    yy.lex_error = () => {
      console.error(`Lexer error at line ${yylloc.first_line}:\n${this.showPosition()}\n`, yy.error_msg);
    };
%}

%%
"<="        return "LE";
">="        return "GE";
"=="        return "EQ";
"!="        return "NEQ"

({DIGIT}*\.?{DIGIT}+|{DIGIT}+\.)        return "NUM_CONST";
"true"                                  return "BOOL_CONST";
"false"                                 return "BOOL_CONST";
\n                                      ;

"//"                                    this.pushState('LINE_COMMENT');
<LINE_COMMENT>[^\n\r]* ;
<LINE_COMMENT>\n %{
  this.popState();
%}
<LINE_COMMENT>\r %{
  yylineno--;
  yylloc.first_line--; yylloc.last_line--; yylloc.first_column--; yylloc.last_column--;
%}
<LINE_COMMENT><<EOF>>  this.popState();  // eof in this case is ok

"*/"  %{
  yy.error_msg = "Unmatched */";
  yy.lex_error();
%}
<INITIAL>"/*"  %{
  this.pushState("COMMENT");
  yy.nested_comment_count = 0;
%}
<COMMENT>"/*"  yy.nested_comment_count++;
<COMMENT>"*/"  %{
  if(yy.nested_comment_count == 0)
    this.popState();
  else
    yy.nested_comment_count--;
%}
<COMMENT>([^/*\n\r]+)|. ;
<COMMENT>\n   ;
<COMMENT>\r %{
  // fix windows line endings
  yylineno--;
  yylloc.first_line--; yylloc.last_line--; yylloc.first_column--; yylloc.last_column--;
%}
<COMMENT><<EOF>> %{
  yy.error_msg = "EOF in comment";
  this.popState();
  yy.lex_error();
%}

[ \t\f\v]+   ; // skip whitespace
\r  %{
  // fix windows line endings
  yylineno--;
  yylloc.first_line--; yylloc.last_line--; yylloc.first_column--; yylloc.last_column--;
%}

"else"   return "ELSE";
"if"     return "IF";
"var"    return "VAR";
"function"  return "FUNCTION";
"return"    return "RETURN";

{ID}    return "ID";

\"  %{  // "
  // String constants (C syntax) Escape sequence \c is accepted for all characters c. Except for \n \t \b \f, the result is c.
  yy.string_error = false;
  yy.string_buf = "";
  this.pushState('STRING');
%}

<STRING>\" %{  // "
  this.popState();
  if(!yy.string_error) {
    if(yy.string_buf.length >= yy.MAX_STR_CONST) {
      yy.error_msg = "String constant too long";
      yy.string_error = true;
      yy.lex_error();
      // error recovery
      yy.string_buf.length = yy.MAX_STR_CONST;
    }
    yytext = yy.string_buf;
    return "STR_CONST";
  }
%}

<STRING>\\\n  %{
  yy.string_buf += '\n';
%}

<STRING>\\\r\n %{  // support both win and unix style of line endings
  yy.string_buf += '\n';
  yylineno--;
  yylloc.first_line--; yylloc.last_line--; yylloc.first_column--; yylloc.last_column--;
%}

<STRING>"\\t"  yy.string_buf += '\t';
<STRING>"\\n"  yy.string_buf += '\n';
<STRING>"\\b"  yy.string_buf += '\b';
<STRING>"\\f"  yy.string_buf += '\f';
<STRING>\n  %{
  this.popState();
  if(!yy.string_error) {
    this.error_msg = "Unterminated string constant";
    return "ERROR";
  }
%}
<STRING>\0|\\\0  %{
  if(!yy.string_error) {
    yy.error_msg = "String contains null character";
    yy.string_error = true;
    yy.lex_error();
  }
%}
<STRING>[^\0\\\n\r\"]+        %{  //"
        yy.string_buf += yytext;
%}
<STRING>\\[0-7]{1,3} %{
        // octal escape sequence
        var result = parseInt(yytext, 8);
        if ( result > 0xff ) {
          if(!yy.string_error) {
            yy.error_msg = "Escape code is out of bounds";
            yy.string_error = true;
            yy.lex_error();
          }
        }
        yy.string_buf += String.fromCharCode(result);
%}
<STRING>\\[0-9]+ %{
        // like '\48' or '\0777777'
        if(!yy.string_error) {
          yy.error_msg = "Invalid escaped character";
          yy.string_error = true;
          yy.lex_error();
        }
%}
<STRING><<EOF>> %{
  this.popState();
  if(!yy.string_error) {
    yy.error_msg = "EOF in string";
    yy.lex_error();
  }
%}
<STRING>[^\0\"\\\t\n\b\f]+  yy.string_buf += yytext;

"+"|"/"|"-"|"*"|"="|"<"|">"|","|";"|"("|")"|"{"|"}"|"["|"]"|":" %{
  return yytext;
%}

\0 %{
  yy.error_msg = "Null character in code: ";
  yy.lex_error();
%}

. %{
  yy.error_msg = "Skipping token: " + yytext;
  yy.lex_error();
  // simply skip error tokens
%}
