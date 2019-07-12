class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		return this.items.shift();
	}

	peek() {
		return this.items[0];
	}

	size() {
		return this.items.length;
	}

	isEmpty() {
		return this.items.length === 0;
	}

	toString() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		return this.items.join(' ');
	}
}

const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.toString()); // 1 2

queue.enqueue(3);
console.log(queue.toString()); // 1 2 3
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.dequeue();
queue.dequeue();
console.log(queue.toString()); // 3

queue.dequeue();
console.log(queue.toString()); // Queue is Empty
