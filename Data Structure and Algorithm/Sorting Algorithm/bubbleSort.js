const swap = (array, a, b) => {
	[array[a], array[b]] = [array[b], array[a]];
};

const bubbleSort = array => {
	const { length } = array;
	for (let i = 0; i < length; ++i) {
		for (let j = 0; j < length - 1; ++j) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
			}
		}
	}
	return array;
};

let arr = [5, 4, 3, 2, 1];
console.log(bubbleSort(arr));
