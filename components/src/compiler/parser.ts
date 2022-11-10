import { lib } from "../functions";
import { queue } from "../struct";
import { TokenType } from "./token";
import { TokenObj } from "./token";
import { TOKENIZER } from "./tokenizer";

export class PARSER {
	private tokenLength: number;
	private queue: queue;
	private stack: TokenObj[];
	private tokens: TokenObj[];
	private tokenizer: TOKENIZER;
	out: string;
	previous: any;
	constructor() {
		this.queue = new queue();
		this.stack = [];
		this.tokenizer = new TOKENIZER();
		this.tokens = [];
		this.tokenLength = 0;
		this.out = "";
	}
	private parse(source: string, latex: boolean) {
		this.queue = new queue();
		this.tokenizer.init(source, latex);
		this.tokens = this.tokenizer.tokenize();
		this.tokenLength = this.tokens.length;
		this.stack = [];
		const tokenCount = this.tokens.length;
		let i = 0;
		for (i = 0; i < tokenCount; i++) {
			let token = this.tokens[i];
			switch (token.type) {
				case TokenType.STRUCT:
					this.queue.enqueue(token.args);
					break;
				case TokenType.VAR:
					let val = lib[token.token] ? lib[token.token] : token.token;
					this.queue.enqueue(val);
					break;
				case TokenType.NUMBER:
				case TokenType.STRING:
				case TokenType.STRUCT:
					this.queue.enqueue(token);
					break;
				case TokenType.OPL1:
				case TokenType.OP1:
				case TokenType.OP2:
				case TokenType.OPL2:
				case TokenType.OP3: {
					const L = this.stack.length - 1;
					while ((this.stack[L] && this.stack[L].args) >= token.args) {
						this.queue.enqueue(this.stack.pop());
					}
					this.stack.push(token);
					break;
				}
				case TokenType.FUN: {
					let args = [];
					if (lib[token.token]) {
						for (let i = 0; i < token.args.length; i++) {
							args.push(token.args[i].token);
						}
						let result = lib[token.token](args);
						this.queue.enqueue(result);
					}
					break;
				}
				case TokenType.LPAREN: {
					this.stack.push(token);
					break;
				}
				case TokenType.RPAREN: {
					const L = this.stack.length - 1;
					while (
						this.stack[L] &&
						this.stack[L].type !== TokenType.LPAREN
					) {
						this.queue.enqueue(this.stack.pop());
					}
					this.stack.pop();
					break;
				}
				case TokenType.LBRACK: {
					this.stack.push(token);
					break;
				}
				case TokenType.RBRACK: {
					const L = this.stack.length - 1;
					while (
						this.stack[L] &&
						this.stack[L].type !== TokenType.LBRACK
					) {
						this.queue.enqueue(this.stack.pop());
					}
					this.stack.pop();
					break;
				}
				case TokenType.LBRACE: {
					this.stack.push(token);
					break;
				}
				case TokenType.RBRACE: {
					const L = this.stack.length - 1;
					while (
						this.stack[L] &&
						this.stack[L]?.type !== TokenType.LBRACE
					) {
						this.queue.enqueue(this.stack.pop());
					}
					this.stack.pop();
					break;
				}
				case TokenType.EOL: {
					continue;
				}
			}
		}
	}
	latexify(source: string) {
		this.parse(source, true);
		let latex = "";
		for (let i = 0; i < this.tokenLength; i++) {
			latex += this.tokens[i].token;
		}
		return latex;
	}
	evalLatex(source: string) {
		let result = this.eval(source);
		let latex = this.latexify(source);
		let out = latex + "=" + result;
		return out;
	}
	eval(source: string) {
		this.parse(source, false);
		while (this.stack.length > 0) {
			let operator = this.stack.pop();
			this.queue.enqueue(operator);
		}
		let result: any[] = [];
		let truthTable:any[] = [];
		let isbooleanResult = false;
		while (this.queue.length() !== 0) {
			let element = this.queue.dequeue();
			switch (element.type) {
				case TokenType.OPL1:
				case TokenType.OPL2: {
					break;
				}
				case TokenType.OP2: {
					let a = result.pop();
					let b = result.pop();
					let c: any;
					if (Array.isArray(a) && Array.isArray(b)) {
						c = lib.matrixOperations[element.token](a, b);
					} else if (typeof a === "number" && typeof b === "number") {
						c = lib[element.token](b, a);
					} else if (typeof a === "string" && typeof b === "string") {
						c = lib[element.token](b, a);
					} else {
						return;
					}
					result.push(c);
					break;
				}
				case TokenType.NUMBER: {
					result.push(element.token);
					break;
				}
				default: {
					result.push(element);
					break;
				}
			}
		}
		this.out = isbooleanResult ? truthTable : result[0];
		return this.out;
	}
	printStack() {
		console.log(this.stack);
	}
	printTokens() {
		console.log(this.tokens);
	}
	printOutputQueue() {
		this.queue.print();
	}
}

export const Csm = new PARSER();
