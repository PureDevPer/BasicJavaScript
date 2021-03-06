const partition = (array, left, right) => {
	const pivot = array[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		while (array[i] < pivot) {
			++i;
		}
		while (array[j] > pivot) {
			--j;
		}
		if (i <= j) {
			[array[i], array[j]] = [array[j], array[i]];
			++i;
			--j;
		}
	}
	return i;
};

const quick = (array, left, right) => {
	let index;
	if (array.length > 1) {
		index = partition(array, left, right);
		if (left < index - 1) {
			quick(array, left, index - 1);
		}
		if (index < right) {
			quick(array, index, right);
		}
	}
	return array;
};

const quickSort = array => {
	return quick(array, 0, array.length - 1);
};

const arr = [5, 4, 3, 2, 1];
console.log(quickSort(arr));
