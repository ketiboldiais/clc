import { StdLib } from "./stdlib";

export class NumOp2 {
	static add(a: number, b: number): number | void {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a + b
			: StdLib.NotNumber();
	}
	static sub(a: number, b: number): number | void {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a - b
			: StdLib.NotNumber();
	}
	static mul(a: number, b: number): number | void {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a * b
			: StdLib.NotNumber();
	}
	static abs(n: number): number | void {
		return StdLib.isNumber(n) ? Math.abs(n) : StdLib.NotNumber();
	}
	static div(a: number, b: number): number | string | void {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? b !== 0
				? a / b
				: "Undefined"
			: StdLib.NotNumber();
	}
	static divides(a: number, b: number): boolean | void {
		return this.div(a, b) === 0;
	}
	static pow(a: number, b: number): number | void {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a ** b
			: StdLib.NotNumber();
	}
}
