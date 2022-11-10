export class StdLib {
	static InvalidBinaryOp(op: string) {
		throw new Error(
			`${op} is a binary operand. Expected two operands, but only gone one.`,
		);
	}
	static DivideByZero() {
		throw new Error(`Dividing by zero prohibited.`);
	}
	static isNumber(n: any) {
		return typeof (n === "number") && !isNaN(n);
	}
	static number(n: any) {
		return this.isNumber(n) ? n : this.NotNumber();
	}
	static isInt(n: any) {
		return StdLib.isNumber(n) && (n | 0) === n;
	}
	static isArray(n: any) {
		return Array.isArray(n);
	}
	static emptyArrayError(op?: string) {
		throw new Error(
			`${op ? op : "This operand"} requires a non-empty array.`,
		);
	}
	static prohibitedOperand(op?: string, operand?: string) {
		throw new Error(
			`${operand ? operand : "This operand is"} prohibited on ${
				op ? op : "this operation."
			} Register a custom function.`,
		);
	}
	static NotNumber(op?: string) {
		throw new Error(
			`${op ? op : "This operation"} is only defined on numbers.`,
		);
	}
	static NotInteger(op?: string) {
		throw new Error(
			`${op ? op : "This operation"} is only defined on integers.`,
		);
	}
	static NotString(op?: string) {
		throw new Error(
			`${op ? op : "This operation"} is only defined on strings.`,
		);
	}
	static NotBool(op?: string) {
		throw new Error(
			`${op ? op : "This operation"} is only defined on booleans.`,
		);
	}
	static NotArray(op?: string) {
		throw new Error(
			`${op ? op : "This operation"} is only defined on arrays.`,
		);
	}
	static NotNumberArray(op?: string) {
		throw new Error(
			`${
				op ? op : "This operation"
			} is only defined on arrays of numbers.`,
		);
	}
	static NotMatrix(op?: string) {
		throw new Error(
			`Invalid operand: ${
				op ? op : "This operation"
			} is only defined on matrices (nested arrays).`,
		);
	}
}
