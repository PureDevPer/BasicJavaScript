class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class CircularLinkedList {
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
			current = this.getElementAt(this.size() - 1);
			current.next = node;
		}

		node.next = this.head;
		this.count++;
	}

	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);
			let current = this.head;
			if (index === 0) {
				if (this.head == null) {
					this.head = node;
					node.next = this.head;
				} else {
					node.next = current;
					current = this.getElementAt(this.size());
					// update last element
					this.head = node;
					current.next = this.head;
				}
			} else {
				const previous = this.getElementAt(index - 1);
				node.next = previous.next;
				previous.next = node;
			}
			this.count++;
			return true;
		}
		return false;
	}

	remove(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				if (this.count === 1) {
					this.head = null;
				} else {
					const removed = this.head;
					current = this.getElementAt(this.count);
					this.head = this.head.next;
					current.next = this.head;
					current = removed;
				}
			} else {
				// no need to update last element for circular list
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
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

	size() {
		return this.count;
	}

	toString() {
		if (this.head == null) {
			return 'Empty';
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

const list = new CircularLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list);
console.log(list.toString()); // 1, 2, 3

list.insert(2.5, 2);
console.log(list.toString()); // 1, 2, 2.5, 3
