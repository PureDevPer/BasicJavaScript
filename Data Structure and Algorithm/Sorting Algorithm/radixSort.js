const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
	Math.floor(((value - minValue) / significantDigit) % radixBase);

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
	let bucketsIndex;
	const buckets = [];
	const temp = [];

	// Initialize the buckets based on the radix base (10 buckets)
	for (let i = 0; i < radixBase; i++) {
		buckets[i] = 0;
	}

	// Counting sort based on the significant digit of the numbers that are in the array
	for (let i = 0; i < array.length; i++) {
		bucketsIndex = getBucketIndex(
			array[i],
			minValue,
			significantDigit,
			radixBase
		);
		buckets[bucketsIndex]++;
	}

	// Need to compute the cumulates because doing a counting sort
	for (let i = 1; i < radixBase; i++) {
		buckets[i] += buckets[i - 1];
	}

	// After counting the values, we start moving the vluaes back to the original array
	for (let i = array.length - 1; i >= 0; i--) {
		bucketsIndex = getBucketIndex(
			array[i],
			minValue,
			significantDigit,
			radixBase
		);
		temp[--buckets[bucketsIndex]] = array[i];
	}

	// Transfer all the values from the temp array to the original array
	for (let i = 0; i < array.length; i++) {
		array[i] = temp[i];
	}
	return array;
};

const findMinValue = array => {
	const { length } = array;
	let temp = array[0];
	for (let i = 1; i < length; ++i) {
		if (temp > array[i]) {
			temp = array[i];
		}
	}
	return temp;
};

const findMaxValue = array => {
	const { length } = array;
	let temp = array[0];
	for (let i = 1; i < length; ++i) {
		if (temp < array[i]) {
			temp = array[i];
		}
	}
	return temp;
};

const radixSort = (array, radixBase = 10) => {
	if (array.length < 2) {
		return array;
	}
	const minValue = findMinValue(array);
	const maxValue = findMaxValue(array);
	let significantDigit = 1;
	while ((maxValue - minValue) / significantDigit >= 1) {
		array = countingSortForRadix(array, radixBase, significantDigit, minValue);
		significantDigit *= radixBase;
	}
	return array;
};

const array = [5, 4, 3, 2, 1];
console.log(radixSort(array));
