const fibonacci = x => {
	let dp = [];
	if (x < 1) return 0;
	if (x <= 2) return 1;
	return (dp[x] = fibonacci(x - 1) + fibonacci(x - 2));
};

console.log(fibonacci(6)); // 8
