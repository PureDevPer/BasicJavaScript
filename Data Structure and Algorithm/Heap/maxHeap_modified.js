class MaxHeap {
	constructor() {
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

	// Parent Node = index / 2
	getParentIndex(index) {
		if (index === 0) return null;

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

	findMaximum() {
		return this.isEmpty() ? null : this.heap[0];
	}

	insert(value) {
		if (value !== null) {
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
		while (index > 0 && this.heap[parent] < this.heap[index]) {
			[this.heap[parent], this.heap[index]] = [
				this.heap[index],
				this.heap[parent]
			];
			index = parent;
			parent = this.getParentIndex(index);
		}
	}

	// This method removes the maxium value (max heap) and returns it
	extract() {
		if (this.isEmpty()) return null;
		if (this.size() === 1) return this.heap.shift();

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

		if (left < size && this.heap[element] < this.heap[left]) element = left;
		if (right < size && this.heap[element] < this.heap[right]) element = right;

		if (index !== element) {
			[this.heap[index], this.heap[element]] = [
				this.heap[element],
				this.heap[index]
			];
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
console.log('Heap max value: ', maxHeap.findMaximum()); //5
console.log('Heap Size: ', maxHeap.size()); // 5
console.log('Heap is empty: ', maxHeap.isEmpty()); // false
console.log(maxHeap); // MaxHeap { heap: [ 5, 4, 3, 2, 1 ] }

const heap1 = new MaxHeap();
for (let i = 1; i < 10; ++i) {
	heap1.insert(i);
}

console.log(heap1); // MaxHeap { heap: [ 9, 8, 6, 7, 3, 2, 5, 1, 4 ] }
console.log('Extract minimum: ', heap1.extract()); // 9
console.log('Heap max value: ', heap1.findMaximum()); // 8
console.log(heap1); // MaxHeap { heap: [ 8, 7, 6, 4, 3, 2, 5, 1 ] }
