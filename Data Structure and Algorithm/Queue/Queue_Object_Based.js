class Queue {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	enqueue(element) {
		this.items[this.count] = element;
		++this.count;
	}

	dequeue() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}

		const result = this.items[this.lowestCount];
		++this.lowestCount;
		return result;
	}

	isEmpty() {
		return this.count === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}

		return this.items[this.lowestCount];
	}

	size() {
		return this.count - this.lowestCount;
	}

	clear() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	toString() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		let objString = `${this.items[this.lowestCount]}`;
		for (let i = this.lowestCount + 1; i < this.count; ++i) {
			objString = `${objString}, ${this.items[i]}`;
		}
		return objString;
	}
}

const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.toString()); // 1, 2

queue.enqueue(3);
console.log(queue.toString()); // 1, 2, 3
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.dequeue();
queue.dequeue();
console.log(queue.toString()); // 3
