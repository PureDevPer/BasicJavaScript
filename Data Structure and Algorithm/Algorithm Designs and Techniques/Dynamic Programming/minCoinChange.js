const minCoinChange = (coins, amount) => {
	// To be more efficient and not recalculate values, we keep cache (memoization)
	const cache = [];

	// Recursive and the function which will solve the problem
	const makeChange = value => {
		// if amount (value) < 0, return an empty array
		if (!value) {
			return [];
		}

		// If the result is already cached,
		// we will simply return its value
		if (cache[value]) {
			return cache[value];
		}
		let min = [];
		let newMin, newAmount;

		// For each coin, we calculate newAmount, which will decrease the value
		// until we reach the minimum amount of change we can give
		for (let i = 0; i < coins.length; ++i) {
			const coin = coins[i];
			console.log(`newAmount: ${newAmount} value: ${value} coin: ${coin}`);
			newAmount = value - coin;
			// If newAmount is a valid value (positive value),
			// we calculate the result
			console.log(`newAmount: ${newAmount} min: ${min} value: ${value}`);
			if (newAmount >= 0) {
				newMin = makeChange(newAmount);
			}

			console.log(
				`newAmount: ${newAmount} newMin.length: ${newMin.length} min.length: ${
					min.length
				}`
			);
			console.log(
				`${newAmount >= 0}  ${newMin.length < min.length - 1 ||
					!min.length}  ${newMin.length || !newAmount}`
			);
			// Verify whether newAmount is valid, whether minValue (the minimum amount of coins) is the best result
			// whether minValue and newAmount are valid values
			if (
				newAmount >= 0 &&
				(newMin.length < min.length - 1 || !min.length) &&
				(newMin.length || !newAmount)
			) {
				console.log(newMin);
				// If all the verifications are positive, we have a better result than previously
				min = [coin].concat(newMin);
				console.log('new Min ' + min + ' for ' + amount);
			}
		}
		console.log(`value: ${value} min: ${min}`);
		return (cache[value] = min);
	};
	console.log(`amount: ${amount}`);
	// makeChange function is being evoked with amount passed as a paramter to minCoinChange function
	// Because makeChane is an inner function, it also has access to the cache variable
	return makeChange(amount);
};

console.log(minCoinChange([1, 5, 10, 25], 36)); // [1, 10, 25]

/*
new Min 1 for 36
new Min 1,1 for 36
new Min 1,1,1 for 36
new Min 1,1,1,1 for 36
new Min 1,1,1,1,1 for 36
new Min 5 for 36
new Min 1,5 for 36
new Min 1,1,5 for 36
new Min 1,1,1,5 for 36
new Min 1,1,1,1,5 for 36
new Min 1,1,1,1,1,5 for 36
new Min 5,5 for 36
new Min 10 for 36
new Min 1,10 for 36
new Min 1,1,10 for 36
new Min 1,1,1,10 for 36
new Min 1,1,1,1,10 for 36
new Min 1,1,1,1,1,10 for 36
new Min 5,10 for 36
new Min 1,5,10 for 36
new Min 1,1,5,10 for 36
new Min 1,1,1,5,10 for 36
new Min 1,1,1,1,5,10 for 36
new Min 1,1,1,1,1,5,10 for 36
new Min 5,5,10 for 36
new Min 10,10 for 36
new Min 1,10,10 for 36
new Min 1,1,10,10 for 36
new Min 1,1,1,10,10 for 36
new Min 1,1,1,1,10,10 for 36
new Min 1,1,1,1,1,10,10 for 36
new Min 5,10,10 for 36
new Min 25 for 36
new Min 1,25 for 36
new Min 1,1,25 for 36
new Min 1,1,1,25 for 36
new Min 1,1,1,1,25 for 36
new Min 1,1,1,1,1,25 for 36
new Min 5,25 for 36
new Min 1,5,25 for 36
new Min 1,1,5,25 for 36
new Min 1,1,1,5,25 for 36
new Min 1,1,1,1,5,25 for 36
new Min 1,1,1,1,1,5,25 for 36
new Min 5,5,25 for 36
new Min 10,25 for 36
new Min 1,10,25 for 36
*/
