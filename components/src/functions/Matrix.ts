import { StdLib } from "./stdlib";

export class Matrix {
	static isMatrix(matrix: number[][]): boolean {
		const matrixLength = matrix.length;
		for (let i = 0; i < matrixLength; i++) {
			if (!Array.isArray(matrix[i])) return false;
		}
		return true;
	}
	static rowCount(matrix: number[][]): number | void {
		return this.isMatrix(matrix) ? matrix.length : StdLib.NotMatrix();
	}
	static colCount(matrix: number[][]): number {
		const rowCount = this.rowCount(matrix);
		const colCount = matrix[0].length;
		for (let i = 0; i < rowCount; i++) {
			const matrixRowLength = matrix[i].length;
			if (matrixRowLength !== colCount) return -1;
		}
		return colCount;
	}
	static isSquare(matrix: number[][]): boolean {
		return this.colCount(matrix) === this.rowCount(matrix);
	}
}
