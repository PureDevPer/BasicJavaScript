class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.count = 0;
		this.head = null;
		this.tail = null;
	}

	push(element) {
		const node = new Node(element);
		if (this.head == null) {
			this.head = node;
			this.tail = node;
		} else {
			// Attach to the tail node
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		++this.count;
	}

	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);
			let current = this.head;
			if (index === 0) {
				if (this.head == null) {
					// If the list is empty
					this.head = node;
					this.tail = node;
				} else {
					node.next = this.head;
					current.prev = node;
					this.head = node;
				}
			} else if (index === this.count) {
				// last item
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				node.next = current;
				previous.next = node;
				current.prev = node;
				node.prev = previous;
			}
			++this.count;
			return true;
		}
		return false;
	}

	remove(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				this.head = current.next;
				if (this.count === 1) {
					// If there is only one item
					this.tail = null;
				} else {
					this.head.prev = null;
				}
			} else if (index === this.count - 1) {
				// Last item
				current = this.tail;
				this.tail = current.prev;
				this.tail.next = null;
			} else {
				current = this.getElementAt(index);
				const previous = current.prev;
				previous.next = current.next;
				current.next.prev = previous;
			}
			--this.count;
			return current.element;
		}
		return null;
	}

	getElementAt(index) {
		if (index >= 0 && index <= this.count) {
			let node = this.head;
			for (let i = 0; i < index && node != null; ++i) {
				node = node.next;
			}
			return node;
		}
		return null;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		return this.tail;
	}

	clear() {
		this.count = 0;
		this.head = null;
		this.prev = null;
	}

	size() {
		return this.count;
	}

	toString() {
		if (this.head == null) {
			return 'Empty';
		}
		let objString = `${this.head.element}`;
		let current = this.head.next;
		while (current != null) {
			objString = `${objString}, ${current.element}`;
			current = current.next;
		}
		return objString;
	}

	inverseToString() {
		if (this.tail == null) {
			return 'Empty';
		}
		let objString = `${this.tail.element}`;
		let previous = this.tail.prev;
		while (previous != null) {
			objString = `${objString}, ${previous.element}`;
			previous = previous.prev;
		}
		return objString;
	}
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list);
console.log(list.toString()); // 1, 2, 3

list.insert(2.5, 2);
console.log(list.toString()); // 1, 2, 2.5, 3
console.log(list.inverseToString()); // 3, 2.5, 2, 1
