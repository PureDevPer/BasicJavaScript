const partition = (array, low, high) => {
	let pivot = array[high];
	let i = low - 1;
	for (let j = low; j < high; ++j) {
		// If current element is smaller than or equal to pivot
		if (array[j] < pivot) {
			++i;
			// swap arr[i] and arr[j]
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	// swap arr[i+1] and arr[high] (or pivot)
	[array[i + 1], array[high]] = [array[high], array[i + 1]];
	return i + 1;
};

const sort = (array, low, high) => {
	if (low < high) {
		// pi is partitioning index
		// arr[pi] is  now at right place
		let pi = partition(array, low, high);

		// Recursively sort elements before
		// partition and after partition
		sort(array, low, pi - 1);
		sort(array, pi + 1, high);
	}
};

const quickSort = array => {
	sort(array, 0, array.length - 1);
};

const printArray = array => {
	const { length } = array;
	let str = '';
	for (let i = 0; i < length; ++i) {
		str += `${array[i]} `;
	}
	console.log(str);
};

const arr = [5, 4, 3, 2, 1];
quickSort(arr);
printArray(arr);
