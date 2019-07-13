class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.count = 0;
		this.head = null;
	}

	push(element) {
		const node = new Node(element);
		let current;
		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		++this.count;
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

	removeAt(index) {
		if (index >= 0 && index <= this.count) {
			let current = this.head;

			if (index === 0) {
				this.head = current.next;
			} else {
				let previous = this.head;
				for (let i = 0; i < index - 1; ++i) {
					previous = previous.next;
				}
				current = previous.next;
				previous.next = current.next;
			}
			--this.count;
			return current.element;
		}
		return null;
	}

	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);
			if (index === 0) {
				const current = this.head;
				node.next = current;
				this.head = node;
			} else {
				const previous = this.getElementAt(index - 1);
				const current = previous.next;
				node.next = current;
				previous.next = node;
			}
			++this.count;
			return true;
		}
		return false;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	toString() {
		if (this.head == null) {
			return 'Head is Empty';
		}
		let objString = `${this.head.element}`;
		let current = this.head.next;
		for (let i = 1; i < this.size() && current != null; i++) {
			objString = `${objString}, ${current.element}`;
			current = current.next;
		}
		return objString;
	}
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);

console.log(list.getElementAt(2).element); // 3
console.log(list.removeAt(2)); // 3

list.insert(3, 2);
console.log(list);

console.log(list.toString());
