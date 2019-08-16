const binarySearchRecursive = (arr, x, low, high) => {
	if (low > high) return -1;

	let mid = Math.floor((low + high) / 2);

	if (arr[mid] < x) return binarySearchRecursive(arr, x, mid + 1, high);
	else if (arr[mid] > x) return binarySearchRecursive(arr, x, low, mid - 1);
	else return mid;
};

const array = [2, 3, 4, 10, 40];
console.log(
	`Element at Index: ${binarySearchRecursive(array, 10, 0, array.length - 1)}`
);
console.log(
	`Element at Index: ${binarySearchRecursive(array, 5, 0, array.length - 1)}`
);
