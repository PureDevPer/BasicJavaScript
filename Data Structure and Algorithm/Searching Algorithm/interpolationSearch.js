const interpolationSearch = (array, value) => {
	const { length } = array;
	let low = 0,
		high = length - 1,
		position = -1,
		delta = -1;

	while (low <= high && value >= array[low] && value <= array[high]) {
		delta = (value - array[low]) / (array[high] - array[low]);
		// Find the higher value near the position if the searched value is closer to array[high]
		// and the lowest value near the position if the searched value is closer to array[low]
		position = low + Math.floor((high - low) * delta);
		console.log(delta + ' ' + position);
		if (array[position] === value) {
			return position;
		}
		if (array[position] < value) {
			low = position + 1;
		} else {
			high = position - 1;
		}
	}
	return -1;
};

const array = [1, 2, 3, 4, 5];
console.log(interpolationSearch(array, 5));
console.log(interpolationSearch(array, 6));
