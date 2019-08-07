const sort = arr => {
	const { length } = arr;

	// Build heap (rearrange array)
	for (let i = Math.floor(length / 2) - 1; i >= 0; --i) heapify(arr, length, i);

	// One by one extract an element from heap
	for (let i = length - 1; i >= 0; --i) {
		// Move current root to end
		[arr[0], arr[i]] = [arr[i], arr[0]];

		// call max heapify on the reduced heap
		heapify(arr, i, 0);
	}
	return arr;
};

// To heapify a subtree rooted with node i which is an index in arr[].
// length is size of heap
const heapify = (arr, length, i) => {
	let largest = i; // Initialize largest as root
	let left = 2 * i + 1;
	let right = 2 * i + 2;

	// If left child is larger than root
	if (left < length && arr[left] > arr[largest]) largest = left;

	// If right child is larger than largeest
	if (right < length && arr[right] > arr[largest]) largest = right;

	// If largest is not root
	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];

		// Recursively heapify the affected sub-tree
		heapify(arr, length, largest);
	}
};

let arr = [12, 11, 13, 5, 6, 7];

console.log(sort(arr)); // [ 5, 6, 7, 11, 12, 13 ]
