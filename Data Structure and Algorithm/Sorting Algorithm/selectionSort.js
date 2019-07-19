const selectionSort = array => {
	const { length } = array;
	let indexMin;
	for (let i = 0; i < length - 1; ++i) {
		indexMin = i;
		for (let j = i; j < length; ++j) {
			if (array[indexMin] > array[j]) {
				indexMin = j;
			}
		}
		if (i !== indexMin) {
			[array[i], array[indexMin]] = [array[indexMin], array[i]];
		}
	}
	return array;
};

const arr = [5, 4, 3, 2, 1];
console.log(selectionSort(arr));
