import { IntOp2 } from "./IntOp2";
import { Maths } from "./Maths";
import { NumCmp } from "./NumCmp";
import { NumOp2 } from "./NumOp2";
import { Trig } from "./Trig";
import { VectorOp1 } from "./VectorOp1";

function vectorAdd(a: number[], b: number[]) {
	const aLength = a.length;
	const bLength = b.length;
	let out = a;
	if (aLength !== bLength) {
		throw new RangeError(
			"One vector operand is longer than the other. Vector addition is only defined on vectors of the same length.",
		);
	}
	for (let i = 0; i < aLength; i++) {
		out[i] += b[i];
	}
	return out;
}

function matrixAdd(a: number[][], b: number[][]) {
	const aRowCount = a.length;
	const bRowCount = b.length;
	let out = [];
	for (let i = 0; i < aRowCount; i++) {
		let row = [];
		for (let j = 0; j < bRowCount; j++) {
			let x = a[i][j];
			let y = b[i][j];
			if (x && y) {
				let sum = x + y;
				row.push(sum);
			} else {
				throw new Error("Invalid matrix operands.");
			}
		}
		out.push(row);
	}
	return out;
}

function generateTruthValues(vars: string[]) {
	const varCount = vars.length;
	let rows = 1 << varCount;
	let results:any[] = [];
	for (let i = 0; i < rows; i++) {
		results.push({});
		for (let j = 0; j < varCount; j++) {
			if (((1 << j) & i) > 0) {
				results[i][vars[j]] = true;
			} else {
				results[i][vars[j]] = false;
			}
		}
	}
	return results;
}

export const lib:any = {
	cos: (n: number) => Trig.cos(n),
	sin: (n: number) => Trig.sin(n),
	tan: (n: number) => Trig.tan(n),
	acos: (n: number) => Trig.acos(n),
	acosh: (n: number) => Trig.acosh(n),
	asinh: (n: number) => Trig.asinh(n),
	asin: (n: number) => Trig.asin(n),
	atan: (n: number) => Trig.atan(n),
	atan2: (n: number, m: number) => Trig.atan2(n, m),
	cosh: (n: number) => Trig.cosh(n),
	add: (a: number, b: number) => NumOp2.add(a, b),
	minus: (a: number, b: number) => NumOp2.sub(a, b),
	mul: (a: number, b: number) => NumOp2.mul(a, b),
	abs: (a: number) => NumOp2.abs(a),
	div: (a: number, b: number) => NumOp2.div(a, b),
	divides: (a: number, b: number) => NumOp2.div(a, b),
	pow: (a: number, b: number) => NumOp2.pow(a, b),
	sqrt: (a: number) => Maths.sqrt(a),
	floor: (a: string) => Math.floor(parseFloat(a)),
	ceil: (a: string) => Math.ceil(parseFloat(a)),
	ln: (a: string) => Math.log(parseFloat(a)),

	eq: (a: number, b: number) => NumCmp.eq(a, b),
	neq: (a: number, b: number) => NumCmp.neq(a, b),
	lt: (a: number, b: number) => NumCmp.lt(a, b),
	geq: (a: number, b: number) => NumCmp.eq(a, b),
	leq: (a: number, b: number) => NumCmp.leq(a, b),
	mod: (a: number, b: number) => IntOp2.mod(a, b),
	gt: (a: number, b: number) => NumCmp.gt(a, b),

	max: (arr: number[]) => VectorOp1.max(arr),
	min: (arr: number[]) => VectorOp1.min(arr),

	and: (x: boolean, y: boolean) => x && y,
	or: (x: boolean, y: boolean) => x || y,

	e: Math.E,
	ln2: Math.LN2,
	ln10: Math.LN10,
	log2e: Math.LOG2E,
	pi: Math.PI,
	sqrt1_2: Math.SQRT1_2,
	sqrt2: Math.SQRT2,

	matrixOperations: {
		add: (a: any, b: any) => {
			return a[0].constructor === Array && b[0].constructor === Array
				? matrixAdd(a, b)
				: vectorAdd(a, b);
		},
	},
	generateTruthVars: (vars: string[]) => generateTruthValues(vars),
};
