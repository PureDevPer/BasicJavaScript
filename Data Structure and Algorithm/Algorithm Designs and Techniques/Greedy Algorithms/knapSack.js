const knapSack = (capacity, weights, values) => {
	const n = values.length;
	let load = 0;
	let val = 0;

	// the total load is less than the capacity because we can't carry more than capacity
	for (let i = 0; i < n && load < capacity; ++i) {
		// if we can use the total weight of the item
		if (weights[i] <= capacity - load) {
			// Add to the total value
			val += values[i];
			// Update the current load of the knapsack
			load += weights[i];
		} else {
			// If we can't use the total weight of the item

			// Calculate what is the ratio (r) that we can use
			const r = (capacity - load) / weights[i];
			val += r * values[i];
			load += weights[i];
		}
	}
	return val;
};

console.log(knapSack(5, [2, 3, 4], [3, 4, 5])); // 7
console.log(knapSack(6, [2, 3, 4], [3, 4, 5])); // 8.25
