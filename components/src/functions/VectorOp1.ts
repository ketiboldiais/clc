import { StdLib } from "./stdlib";

export class VectorOp1 {
	static max(array: number[]): number | void {
		return StdLib.isArray(array)
			? ((array) => {
					const arrayLength = array.length;
					if (arrayLength === 0) {
						return StdLib.emptyArrayError("max");
					} else {
						let max = Number.MIN_SAFE_INTEGER;
						for (let i = 0; i < array.length; i++) {
							if (StdLib.isNumber(array[i])) {
								max = array[i] > max ? array[i] : max;
							} else {
								return StdLib.NotNumber("max");
							}
						}
						return max;
					}
			  })(array)
			: StdLib.NotArray();
	}
	static min(array: number[]): number | void {
		return StdLib.isArray(array)
			? ((array) => {
					const arrayLength = array.length;
					if (arrayLength === 0) {
						return StdLib.emptyArrayError("min");
					} else {
						let min = Number.MAX_SAFE_INTEGER;
						for (let i = 0; i < array.length; i++) {
							if (StdLib.isNumber(array[i])) {
								min = array[i] < min ? array[i] : min;
							} else {
								return StdLib.NotNumber("max");
							}
						}
						return min;
					}
			  })(array)
			: StdLib.NotArray();
	}
}
