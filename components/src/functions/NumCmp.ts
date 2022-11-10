import { StdLib } from "./stdlib";

export class NumCmp {
	static eq(a: number, b: number) {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a === b
			: StdLib.NotNumber();
	}
	static neq(a: number, b: number) {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a !== b
			: StdLib.NotNumber();
	}
	static gt(a: number, b: number) {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a > b
			: StdLib.NotNumber();
	}
	static lt(a: number, b: number) {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a < b
			: StdLib.NotNumber();
	}
	static geq(a: number, b: number) {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a >= b
			: StdLib.NotNumber();
	}
	static leq(a: number, b: number) {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? a <= b
			: StdLib.NotNumber();
	}
}
