// A naive recursive 0-1 Knapsack

const knapSack = (capacity, weights, values, n) => {
	// Base Case
	if (n === 0 || capacity === 0) return 0;

	// If weight of nth item is more than Knapsack capacity W,
	// the item can't be included in the optimal solution
	if (weights[n - 1] > capacity) {
		return knapSack(capacity, weights, values, n - 1);
	} else {
		// [1] nth item included
		// [2] nth item is NOT included
		return Math.max(
			values[n - 1] +
				knapSack(capacity - weights[n - 1], weights, values, n - 1),
			knapSack(capacity, weights, values, n - 1)
		);
	}
};

const values = [3, 4, 5];
const weights = [2, 3, 4];
const capacity = 5;
const n = values.length;
console.log(
	`Total value that can be carried: ${knapSack(capacity, weights, values, n)}`
);
// Total value that can be carried: 7
