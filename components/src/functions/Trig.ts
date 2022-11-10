import { StdLib } from "./stdlib";

export class Trig {
	static cos(n: number) {
		return StdLib.isNumber(n) ? Math.cos(n) : StdLib.NotNumber();
	}
	static sin(n: number) {
		return StdLib.isNumber(n) ? Math.sin(n) : StdLib.NotNumber();
	}
	static tan(n: number) {
		return StdLib.isNumber(n) ? Math.tan(n) : StdLib.NotNumber();
	}
	static acos(n: number) {
		return StdLib.isNumber(n) ? Math.acos(n) : StdLib.NotNumber();
	}
	static acosh(n: number) {
		return StdLib.isNumber(n) ? Math.acosh(n) : StdLib.NotNumber();
	}
	static asinh(n: number) {
		return StdLib.isNumber(n) ? Math.asinh(n) : StdLib.NotNumber();
	}
	static asin(n: number) {
		return StdLib.isNumber(n) ? Math.asin(n) : StdLib.NotNumber();
	}
	static atan(n: number) {
		return StdLib.isNumber(n) ? Math.atan(n) : StdLib.NotNumber();
	}
	static atanh(n: number) {
		return StdLib.isNumber(n) ? Math.atanh(n) : StdLib.NotNumber();
	}
	static atan2(a: number, b: number) {
		return StdLib.isNumber(a) && StdLib.isNumber(b)
			? Math.atan2(a, b)
			: StdLib.NotNumber();
	}
	static cosh(n: number) {
		return StdLib.isNumber(n) ? Math.cosh(n) : StdLib.NotNumber();
	}
}
