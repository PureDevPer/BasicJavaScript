const fibonacciMemoization = n => {
	// A memo array that will chache all the computed results
	const memo = [0, 1];
	const fibonacci = n => {
		if (memo[n] != null) {
			// If the result has been coputed, we return it
			return memo[n];
		}
		// Otherwise, we compute the result and add it to the cache
		return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
	};
	return fibonacci;
};
