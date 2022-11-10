import { StdLib } from "./stdlib";

export class Maths {
	static e = Math.E;
	static ln2 = Math.LN2;
	static ln10 = Math.LN10;
	static log2e = Math.LOG2E;
	static pi = Math.PI;
	static sqrthalf = Math.SQRT1_2;
	static sqrt2 = Math.SQRT2;
	static sqrt = (a: number) => {
		if (StdLib.isNumber(a)) {
			if (a < 0) {
				let r = Math.abs(a);
				let out = Math.sqrt(r);
				return `${out}i`;
			} else {
				return Math.sqrt(a);
			}
		} else {
			return StdLib.NotNumber("square root");
		}
	};
}
