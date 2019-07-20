const binarySearchRecursive = (array, value, low, high) => {
	if (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const element = array[mid];

		if (element < value) {
			return binarySearchRecursive(array, value, mid + 1, high);
		} else if (element > value) {
			return binarySearchRecursive(arry, value, low, mid - 1);
		} else {
			return mid;
		}
	}
	return -1;
};

const binarySearch = (array, value) => {
	const sortedArray = array.sort((a, b) => a - b);
	const low = 0;
	const high = sortedArray.length - 1;

	return binarySearchRecursive(array, value, low, high);
};

const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 6));
