const merge = (arr, left, mid, right) => {
	// Find sizes of two subarrays to be merged
	let leftSize = mid - left + 1;
	let rightSize = right - mid;

	/* Create temp arrays */
	let leftSub = [];
	let rightSub = [];

	/*Copy data to temp arrays*/
	for (let i = 0; i < leftSize; ++i) leftSub[i] = arr[left + i];
	for (let j = 0; j < rightSize; ++j) rightSub[j] = arr[mid + 1 + j];

	/* Merge the temp arrays */

	// Initial indexes of first and second subarrays
	let i = 0,
		j = 0;

	// Initial index of merged subarry array
	let k = left;
	while (i < leftSize && j < rightSize) {
		if (leftSub[i] <= rightSub[j]) {
			arr[k] = leftSub[i];
			i++;
		} else {
			arr[k] = rightSub[j];
			j++;
		}
		k++;
	}

	/* Copy remaining elements of leftSub[] if any */
	while (i < leftSize) {
		arr[k] = leftSub[i];
		i++;
		k++;
	}

	/* Copy remaining elements of rightSub[] if any */
	while (j < rightSize) {
		arr[k] = rightSub[j];
		j++;
		k++;
	}
};

const sort = (arr, left, right) => {
	if (left < right) {
		let mid = Math.floor((left + right) / 2);

		// Sort first and second halves
		sort(arr, left, mid);
		sort(arr, mid + 1, right);

		merge(arr, left, mid, right);

		return arr;
	}
};

const arr = [12, 11, 13, 5, 6, 7];
console.log(sort(arr, 0, arr.length - 1)); // [5, 6, 7, 11, 12, 13]
