const fibonacciIterative = n => {
	if (n < 1) {
		return 0;
	}
	if (n < 2) {
		return 1;
	}

	let fibNMinus2 = 0;
	let fibNMinus1 = 1;
	let fibN = n;

	for (let i = 2; i <= n; ++i) {
		fibN = fibNMinus1 + fibNMinus2;
		fibNMinus2 = fibNMinus1;
		fibNMinus1 = fibN;
	}
	return fibN;
};
