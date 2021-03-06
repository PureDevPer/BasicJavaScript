const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
	EQUALS: 0
};

const defaultCompare = (a, b) => {
	if (a === b) {
		return Compare.EQUALS;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const swap = (array, a, b) => {
	[array[a], array[b]] = [array[b], array[a]];
};

const reverseCompare = compareFn => {
	return (a, b) => compareFn(b, a);
};

class MaxHeap {
	constructor(compareFn = defaultCompare) {
		this.compareFn = reverseCompare(compareFn);
		this.heap = [];
	}

	// Left Child = 2*index + 1
	getLeftIndex(index) {
		return 2 * index + 1;
	}

	// Right Child = 2*index + 2
	getRightIndex(index) {
		return 2 * index + 2;
	}

	// Parent Node = index/2
	getParentIndex(index) {
		if (index === 0) {
			return null;
		}
		return Math.floor((index - 1) / 2);
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.size() <= 0;
	}

	clear() {
		this.heap = [];
	}

	findMinimum() {
		return this.isEmpty() ? null : this.heap[0];
	}

	insert(value) {
		if (value != null) {
			this.heap.push(value);
			this.siftUp(this.heap.length - 1);
			return true;
		}
		return false;
	}

	siftUp(index) {
		let parent = this.getParentIndex(index);
		// If the inserted value is smaller than its parent,
		// we swap the element with its parent
		while (
			index > 0 &&
			this.compareFn(this.heap[parent], this.heap[index]) ===
				Compare.BIGGER_THAN
		) {
			swap(this.heap, parent, index);
			index = parent;
			parent = this.getParentIndex(index);
		}
	}

	// This method removes the maximum value (max heap) and returns it
	extract() {
		if (this.isEmpty()) {
			return null;
		}

		if (this.size() === 1) {
			return this.heap.shift();
		}
		const removedValue = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.siftDown(0);
		return removedValue;
	}

	// Heapify
	// The sift down operation consists of swapping the element with its greatest child (max heap)
	siftDown(index) {
		let element = index;
		const left = this.getLeftIndex(index);
		const right = this.getRightIndex(index);
		const size = this.size();
		if (
			left < size &&
			this.compareFn(this.heap[element], this.heap[left]) ===
				Compare.BIGGER_THAN
		) {
			element = left;
		}
		if (
			right < size &&
			this.compareFn(this.heap[element], this.heap[right]) ===
				Compare.BIGGER_THAN
		) {
			element = right;
		}
		if (index !== element) {
			swap(this.heap, index, element);
			this.siftDown(element);
		}
	}
}

const maxHeap = new MaxHeap();

maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);

console.log('Heap Size: ', maxHeap.size()); // 5
console.log('Heap min value: ', maxHeap.findMinimum()); //5
