const matrixChain = (p, i = 1, j = p.length - 1) => {
	if (i === j) {
		return 0;
	}
	let min = Number.MAX_SAFE_INTEGER;
	for (let k = i; k < j; k++) {
		const count =
			matrixChain(p, i, k) + matrixChain(p, k + 1, j) + p[i - 1] * p[k] * p[j];
		if (count < min) {
			min = count;
		}
	}
	return min;
};

console.log(matrixChain([10, 100, 5, 50, 1]));
