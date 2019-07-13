class Deque {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	addFront(element) {
		if (this.isEmpty()) {
			this.addBack(element);
		} else if (this.lowestCount > 0) {
			--this.lowestCount;
			this.items[this.lowestCount] = element;
		} else {
			for (let i = this.count; i > 0; --i) {
				this.items[i] = this.items[i - 1];
			}
			++this.count;
			this.items[0] = element;
		}
	}

	addBack(element) {
		this.items[this.count] = element;
		++this.count;
	}

	removeFront() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		++this.lowestCount;
		return result;
	}

	removeBack() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		--this.count;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	peekFront() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		return this.items[this.lowestCount];
	}

	peekBack() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		return this.items[this.count - 1];
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		return this.count - this.lowestCount;
	}

	clear() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
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

const queue = new Deque();

queue.addFront(1);
queue.addFront(2);
queue.addFront(3);
console.log(queue.toString()); // 3, 2, 1

queue.addBack(4);
console.log(queue.toString()); // 3, 2, 1, 4

queue.removeFront();
console.log(queue.toString()); // 2, 1, 4

queue.removeBack();
console.log(queue.toString()); // 2, 1
