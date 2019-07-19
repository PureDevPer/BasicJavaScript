const insertionSort = array => {
	const { length } = array;
	let temp;
	for (let i = 1; i < length; ++i) {
		let j = i;
		temp = array[i];
		while (j > 0 && array[j - 1] > temp) {
			array[j] = array[j - 1];
			--j;
		}
		array[j] = temp;
	}
	return array;
};

const sortBuckets = buckets => {
	const sortedArray = [];
	for (let i = 0; i < buckets.length; i++) {
		if (buckets[i] != null) {
			insertionSort(buckets[i]);
			sortedArray.push(...buckets[i]);
		}
	}
	return sortedArray;
};

const createBuckets = (array, bucketSize) => {
	let minValue = array[0];
	let maxValue = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < minValue) {
			minValue = array[i];
		} else if (array[i] > maxValue) {
			maxValue = array[i];
		}
	}
	const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
	const buckets = [];
	for (let i = 0; i < bucketCount; i++) {
		buckets[i] = [];
	}
	for (let i = 0; i < array.length; i++) {
		buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
	}
	return buckets;
};

const bucketSort = (array, bucketSize = 5) => {
	if (array.length < 2) {
		return array;
	}
	const buckets = createBuckets(array, bucketSize);
	return sortBuckets(buckets);
};

const array = [5, 4, 3, 2, 1];
console.log(bucketSort(array));
