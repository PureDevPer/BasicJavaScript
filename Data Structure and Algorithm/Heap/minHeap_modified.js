class MinHeap {
	constructor() {
		this.heap = [];
	}

	// Left Child = 2*index + 1
	getLeftIndex(index) {
		return 2 * index + 1;
	}

	// Right Child = 2*index+2;
	getRightIndex(index) {
		return 2 * index + 2;
	}

	// Parent Node = index/2
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

	findMinimum() {
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

		// If the inserted value is smaler than its parent,
		// we swap the element with its parent
		while (index > 0 && this.heap[parent] > this.heap[index]) {
			[this.heap[parent], this.heap[index]] = [
				this.heap[index],
				this.heap[parent]
			];
			index = parent;
			parent = this.getParentIndex(index);
		}
	}

	// This method removes the minimum value (min heap) and returns it
	extract() {
		if (this.isEmpty()) return null;
		if (this.size() === 1) return this.heap.shift();

		const removedValue = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.siftDown(0);
		return removedValue;
	}

	// Heapify
	// The sift down operation consists of swapping the element with its smallest child (min heap)
	siftDown(index) {
		let element = index;
		const left = this.getLeftIndex(index);
		const right = this.getRightIndex(index);
		const size = this.size();

		if (left < size && this.heap[element] > this.heap[left]) element = left;
		if (right < size && this.heap[element] > this.heap[right]) element = right;

		if (index !== element) {
			[this.heap[index], this.heap[element]] = [
				this.heap[element],
				this.heap[index]
			];
			this.siftDown(element);
		}
	}
}

const minHeap = new MinHeap();

minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(1);

console.log('Heap Size: ', minHeap.size()); // 5
console.log('Heap min value: ', minHeap.findMinimum()); //1
console.log('Heap Size: ', minHeap.size()); // 5
console.log('Heap is empty: ', minHeap.isEmpty()); // false
console.log(minHeap); // MinHeap { heap: [ 1, 2, 4, 5, 3 ] }

const heap1 = new MinHeap();
for (let i = 1; i < 10; ++i) {
	heap1.insert(i);
}

console.log(heap1); // MinHeap { heap: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }
console.log('Extract minimum: ', heap1.extract()); // 1
console.log('Heap max value: ', heap1.findMinimum()); // 2
console.log(heap1); // MinHeap { heap: [ 2, 4, 3, 8, 5, 6, 7, 9 ] }
