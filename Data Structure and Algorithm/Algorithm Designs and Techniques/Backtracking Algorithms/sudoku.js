const UNASSIGNED = 0;

// Verify whether the digit exists in the 3x3 box matrix
const usedInBox = (matrix, boxStartRow, boxStartCol, num) => {
	for (let row = 0; row < 3; ++row) {
		for (let col = 0; col < 3; ++col) {
			if (matrix[row + boxStartRow][col + boxStartCol] === num) {
				return true;
			}
		}
	}
	return false;
};

// Verify whether the digit already exists in the column
const usedInCol = (matrix, col, num) => {
	for (let row = 0; row < matrix.length; ++row) {
		if (matrix[row][col] === num) {
			return true;
		}
	}
	return false;
};

// Verify whether the digit already exists in the row
const usedInRow = (matrix, row, num) => {
	for (let col = 0; col < matrix.length; ++col) {
		if (matrix[row][col] === num) {
			return true;
		}
	}
	return false;
};

const isSafe = (matrix, row, col, num) => {
	return (
		!usedInRow(matrix, row, num) &&
		!usedInCol(matrix, col, num) &&
		!usedInBox(matrix, row - (row % 3), col - (col % 3), num)
	);
};

const solveSudoku = matrix => {
	let row = 0;
	let col = 0;
	let checkBlankSpaces = false;
	for (row = 0; row < matrix.length; ++row) {
		for (col = 0; col < matrix[row].length; ++col) {
			if (matrix[row][col] === UNASSIGNED) {
				checkBlankSpaces = true;
				break;
			}
		}
		if (checkBlankSpaces === true) {
			break;
		}
	}

	// if there are no blank spaces (positions with value 0)
	// then puzzle is complete
	if (checkBlankSpaces === false) {
		return true;
	}

	for (let num = 1; num <= 9; ++num) {
		// Check whether it's safe to add the digit
		if (isSafe(matrix, row, col, num)) {
			matrix[row][col] = num;

			// Run solveSudoku function again to try the next available space
			if (solveSudoku(matrix)) {
				return true;
			}

			// In case, a digit is placed in an incorrect position,
			// then, mark the position as blank again
			matrix[row][col] = UNASSIGNED;
		}
	}
	// algorithm will backtrack and try a different digit
	return false;
};

const sudoku = matrix => {
	if (solveSudoku(matrix) === true) {
		return matrix;
	}
	return 'No Solution Found';
};

const sudokuInput = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9]
];
console.log(sudoku(sudokuInput));

/*
[5, 3, 4, 6, 7, 8, 9, 1, 2] 
[6, 7, 2, 1, 9, 5, 3, 4, 8] 
[1, 9, 8, 3, 4, 2, 5, 6, 7] 
[8, 5, 9, 7, 6, 1, 4, 2, 3] 
[4, 2, 6, 8, 5, 3, 7, 9, 1] 
[7, 1, 3, 9, 2, 4, 8, 5, 6] 
[9, 6, 1, 5, 3, 7, 2, 8, 4] 
[2, 8, 7, 4, 1, 9, 6, 3, 5] 
[3, 4, 5, 2, 8, 6, 1, 7, 9] 

*/
