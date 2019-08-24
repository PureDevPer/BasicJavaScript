const knapSack = (capacity, weights, values, n) => {
	let kS = [];

	// Make 2D array
	for (let i = 0; i <= n; ++i) kS[i] = [];

	// Item #
	for (let i = 0; i <= n; ++i) {
		// Weight we want
		for (let w = 0; w <= capacity; ++w) {
			// Base Case
			if (i === 0 || w === 0) {
				kS[i][w] = 0;
			} else if (weights[i - 1] <= w) {
				kS[i][w] = Math.max(
					values[i - 1] + kS[i - 1][w - weights[i - 1]],
					kS[i - 1][w]
				);
			} else {
				kS[i][w] = kS[i - 1][w];
			}
		}
	}

	return kS[n][capacity];
};

const values = [3, 4, 5];
const weights = [2, 3, 4];
const capacity = 5;
const n = values.length;
console.log(
	`Total value that can be carried: ${knapSack(capacity, weights, values, n)}`
);
// Total value that can be carried: 7
