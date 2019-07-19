const findMaxValue = array => {
	let max = array[0];
	for (let i = 1; i < array.length; ++i) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
};

const countingSort = array => {
	if (array.length < 2) {
		return array;
	}
	const maxValue = findMaxValue(array);

	// Create the counts array, starting from index 0 until the max value + 1
	const counts = new Array(maxValue + 1);
	// Iterate each position of the array
	// and then, increment the counting of the element in the counts array
	array.forEach(element => {
		if (!counts[element]) {
			counts[element] = 0;
		}
		++counts[element];
	});

	let sortedIndex = 0;
	counts.forEach((count, i) => {
		while (count > 0) {
			array[sortedIndex++] = i;
			console.log(i);
			--count;
		}
	});
	return array;
};

const arr = [5, 4, 3, 2, 1];
console.log(countingSort(arr));
