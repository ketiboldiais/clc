export enum TokenType {
	OP1 = "unary",
	OPL1 = "unaryLogic",
	OP2 = "binary",
	OPL2 = "binaryLogic",
	OP3 = "ternary",
	LPAREN = "paren1",
	RPAREN = "paren2",
	LBRACK = "bracket1",
	RBRACK = "bracket2",
	LBRACE = "brace1",
	RBRACE = "brace2",
	VAR = "variableName",
	SET = "setName",
	FUN = "functionCall",
	FDC = "functionDeclare",
	STRUCT = "structure",
	EOL = "endOfLine",
	PUN = "punctuation",
	COMMA = "comma",
	NUMBER = "number",
	STRING = "string",
}
export enum Token {
	LPAREN = "(", // = (,
	RPAREN = ")", // = ),
	LBRACE = "{", // = {
	RBRACE = "}", // = },
	LBRACK = "[", // = [,
	RBRACK = "]", // = ],
	DOT = ".", // = .
	COMMA = ",", // = ,
	BANG = "!", // = !
	SEMICOLON = ";", // = ;
	COLON = ":", // = ;
	VBAR = "|",

	EQUAL = "equal", // = x
	PLUS = "add", // + x
	MINUS = "minus", // - x
	NEG = "neg", // - x
	STAR = "mul", // * x
	CARET = "pow", // ^ x
	SLASH = "div", // / x
	MOD = "mod", // %, x
	GREATER = "gt", // > x
	LESS = "lt", // < x
	TILDE = "tilde", // ~
	AMPERSAND = "amp", // &

	DQUOTE = "dquote", // "
	DOLLAR = "dollar", // $
	AT = "at", // @
	HASH = "hash", // #

	BANG_EQUAL = "neq", // != x
	EQUAL_EQUAL = "eq", // == x
	GREATER_EQUAL = "geq", // >= x
	LESS_EQUAL = "leq", // <= x

	// keywords
	AND = "and", // and // x
	NAND = "nand", // nand x
	OR = "or", // or // x
	NOT = "not", // not x
	NOR = "nor", // nor x
	XOR = "xor", // xor x
	XNOR = "xnor", // xnor x
	IFF = "iff", // iff
	IN = "in", // in
	WHERE = "where", // &
	N = "N", // natural numbers
	Z = "Z", // integers
	R = "R", // reals

	SET = "set", // set
	ARRAY = "array", // set
	MATRIX = "matrix", // set

	EOF = "eof", // eof
	NULL = "null", // null
	TRUE = "true", // true
	FALSE = "false", // false
	ERROR = "error", // error
}

export type TokenObj = {
	token: Token | string | number;
	type?: TokenType;
	args?: any;
	body?: any;
};
