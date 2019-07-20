const isSafe = (maze, x, y) => {
	const n = maze.length;
	if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
		return true;
	}
	return false;
};

const findPath = (maze, x, y, solution) => {
	const n = maze.length;

	// Verify whether the rat reached its destination
	if (x === n - 1 && y === n - 1) {
		// The last position as part of the path
		solution[x][y] = 1;
		return true;
	}

	// Whether it's safe for the rat to move into position
	if (isSafe(maze, x, y) === true) {
		// Move into the path
		solution[x][y] = 1;

		// Move horizontally
		if (findPath(maze, x + 1, y, solution)) {
			return true;
		}

		// Move vertically
		if (findPath(maze, x, y + 1, solution)) {
			return true;
		}

		// Otherwise, the algorithm will try another possible solution
		solution[x][y] = 0;
		return false;
	}

	// After the algorithm tries all possible moves and it doesn't find a solution
	return false;
};

const ratInMaze = maze => {
	const solution = [];
	for (let i = 0; i < maze.length; ++i) {
		solution[i] = [];
		for (let j = 0; j < maze[i].length; ++j) {
			solution[i][j] = 0;
		}
	}
	if (findPath(maze, 0, 0, solution) === true) {
		return solution;
	}
	return 'No Path Found';
};

const maze = [[1, 0, 0, 0], [1, 1, 1, 1], [0, 0, 1, 0], [0, 1, 1, 1]];
console.log(ratInMaze(maze));
// [[1, 0, 0, 0],
//  [1, 1, 1, 0],
//  [0, 0, 1, 0],
//  [0, 0, 1, 1]]
