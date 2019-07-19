const sequentialSearch = (array, value) => {
	for (let i = 0; i < array.length; ++i) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};

const array = [1, 2, 3, 4, 5];
console.log(sequentialSearch(array, 2));
console.log(sequentialSearch(array, 6));
