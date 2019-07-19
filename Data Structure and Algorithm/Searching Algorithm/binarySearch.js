const partition = (array, low, high) => {
	let pivot = array[high];
	let i = low - 1;

	for (let j = low; j < high; ++j) {
		if (array[j] < pivot) {
			++i;
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	[array[i + 1], array[high]] = [array[high], array[i + 1]];
	return i + 1;
};

const sort = (array, low, high) => {
	if (low < high) {
		let p = partition(array, low, high);

		sort(array, low, p - 1);
		sort(array, p + 1, high);
	}
	return array;
};

const quickSort = array => {
	return sort(array, 0, array.length - 1);
};

const binarySearch = (array, value) => {
	//const sortedArray = array.sort((a, b) => a - b);
	const sortedArray = quickSort(array);
	let low = 0;
	let high = sortedArray.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const element = sortedArray[mid];

		if (element < value) {
			low = mid + 1;
		} else if (element > value) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};

const array = [1, 2, 3, 4, 5];
console.log(binarySearch(array, 5));
console.log(binarySearch(array, 6));
