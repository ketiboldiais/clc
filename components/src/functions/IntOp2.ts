import { StdLib } from "./stdlib";

export class IntOp2 {
	static mod(a: number, b: number) {
		if (StdLib.isInt(a) && StdLib.isInt(b)) {
			if (b === 0) {
				return StdLib.prohibitedOperand("mod", "0");
			}
			return a % b;
		} else {
			return StdLib.NotNumber("mod");
		}
	}
}
