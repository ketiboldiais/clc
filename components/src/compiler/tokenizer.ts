import { latexBindings } from "../functions";
import { Scan, SCANNER } from "./scanner";
import { Token, TokenObj, TokenType } from "./token";

export class TOKENIZER {
	scanner: SCANNER;
	scan: Scan | any;
	tokenList: TokenObj[];
	tokenLength: number;
	asLatex: boolean;
	
	constructor() {
		this.scanner = new SCANNER();
		this.scan = [];
		this.tokenList = [];
		this.tokenLength = 0;
		this.asLatex = false;
	}
	

	init(source: string, latex: boolean) {
		this.scanner = new SCANNER();
		this.scan = this.scanner.scan(source, latex);
		this.tokenList = this.scan.tokens;
		this.tokenLength = this.tokenList.length;
		this.asLatex = latex;
	}
	tokenize() {
		this.scan.containsArrays && this.tokenizeArrays();
		let tokens = this.asLatex ? this.latexify() : this.clean();
		this.tokenList = tokens;
		return this.tokenList;
	}
	private clean() {
		let cleanedTokens: TokenObj[] = [];
		let n: number;
		for (n = 0; n < this.tokenList.length; n++) {
			if (n !== 0 && this.tokenList[n].token === Token.LPAREN) {
				if (
					this.tokenList[n - 1].type === TokenType.NUMBER ||
					this.tokenList[n - 1].type === TokenType.VAR ||
					this.tokenList[n - 1].type === TokenType.VAR ||
					this.tokenList[n - 1].type === TokenType.FUN
				) {
					let t = this.makeToken(Token.STAR, TokenType.OP2, 12);
					cleanedTokens.push(t);
				}
			}
			if (this.tokenList[n]?.token === Token.MINUS) {
				if (
					n !== 0 &&
					n < this.tokenList.length &&
					this.tokenList[n + 1].type === TokenType.NUMBER &&
					this.tokenList[n - 1].type !== TokenType.NUMBER &&
					this.tokenList[n - 1].type !== TokenType.VAR &&
					this.tokenList[n - 1].type !== TokenType.FUN
				) {
					let val =
						(this.tokenList[n + 1].token as unknown as number) * -1;
					let t = this.makeToken(val, TokenType.NUMBER);
					cleanedTokens.push(t);
					n += 2;
				} else if (n === 0) {
					let t = this.makeToken(Token.NEG, TokenType.OP1, 15);
					cleanedTokens.push(t);
					n += 1;
				}
			}
			cleanedTokens.push(this.tokenList[n]);
		}
		return cleanedTokens;
	}
	private tokenizeArrays():any {
		let index = 0;
		const buildList = (tokens: any[]):any => {
			let arr = [];
			while (index < tokens.length) {
				let c = tokens[index++];
				if (c.token === Token.LBRACK) {
					arr.push(buildList(tokens));
				} else if (c.token === Token.RBRACK) {
					break;
				} else if (c.token === Token.COMMA) {
				} else if (
					c.type === TokenType.NUMBER ||
					c.type === TokenType.STRING
				) {
					arr.push(c.token);
				} else {
					arr.push(c);
				}
			}
			return arr;
		};
		let arraylist = buildList(this.tokenList);
		let newTokens = [];
		let i = 0;
		for (i = 0; i < arraylist.length; i++) {
			if (Array.isArray(arraylist[i])) {
				newTokens.push(
					this.makeToken(Token.ARRAY, TokenType.STRUCT, arraylist[i]),
				);
				continue;
			}
			newTokens.push(arraylist[i]);
		}
		this.tokenList = newTokens;
	}
	private makeToken(
		token: Token | string | number,
		type: TokenType,
		args: null | any = [],
	) {
		return args ? { token, type, args } : { token, type };
	}
	private latexify(arr = this.tokenList) {
		let result: TokenObj[] = arr;
		let i = 0;
		for (i = 0; i < result.length; i++) {
			let token = result[i];
			if (token.token === Token.TILDE) {
				result[i] = this.makeToken("~", TokenType.PUN);
			}
			if (latexBindings[token.token]) {
				result[i] = this.makeToken(latexBindings[token.token],
					TokenType.VAR,
				);
			}
			if (token.type === TokenType.LPAREN) {
				result[i] = this.makeToken("(", TokenType.PUN);
			}
			if (token.type === TokenType.RPAREN) {
				result[i] = this.makeToken(")", TokenType.PUN);
			}
			if (token.type === TokenType.STRING) {
				result[i] = this.makeToken(
					`\\text{${token.token}}`,
					TokenType.STRING,
				);
			}
		}
		return result;
	}
}
