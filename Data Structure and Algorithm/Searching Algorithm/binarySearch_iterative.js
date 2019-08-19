const bSearch = (arr, value) => {
	const sortedArr = arr.sort((a, b) => a - b);
	let low = 0;
	let high = sortedArr.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const element = sortedArr[mid];

		if (element < value) low = mid + 1;
		else if (element > value) high = mid - 1;
		else return mid;
	}

	return -1;
};

const array = [1, 2, 3, 4, 5];
console.log(bSearch(array, 5)); // 4
console.log(bSearch(array, 6)); // -1
