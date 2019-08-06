class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.back = null;
	}

	add(value) {
		const node = new LinkedList(value);
		if (this.front === null) {
			this.front = node;
			this.back = node;
		} else {
			const prevBack = this.back;
			this.back = node;
			prevBack.next = this.back;
		}
	}

	remove() {
		const removed = this.front;
		if (this.front === this.back) {
			this.front = null;
			this.back = null;
		} else {
			this.front = this.front.next;
		}

		return removed !== null ? removed.value : null;
	}

	peek() {
		return this.front !== null ? this.front.value : null;
	}

	isEmpty() {
		return this.front === null;
	}
}

const q = new Queue();
q.add('a');
q.add('b');
q.add('c');
console.log(q.remove()); // a
console.log(q.peek()); // b
console.log(q.remove()); // b
console.log(q.remove()); // c
console.log(q.isEmpty()); // true
