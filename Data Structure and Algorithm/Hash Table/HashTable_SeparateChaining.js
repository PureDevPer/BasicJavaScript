class Node {
	constructor(element, next) {
		this.element = element;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.count = 0;
		this.head = null;
	}

	push(element) {
		const node = new Node(element);
		let current;
		if (this.head == null) {
			// catches null && undefined
			this.head = node;
		} else {
			current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}

	getElementAt(index) {
		if (index >= 0 && index <= this.count) {
			let node = this.head;
			for (let i = 0; i < index && node !== null; ++i) {
				node = node.next;
			}
			return node;
		}
		return null;
	}

	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				this.head = current.next;
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}

	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.size() && current !== null; i++) {
			if (element === current.element) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		return this.count;
	}

	getHead() {
		return this.head;
	}
}

class ValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}

	toString() {
		return `[#${this.key}: ${this.value}]`;
	}
}

const defaultToString = item => {
	if (item === null) {
		return 'NULL';
	}
	if (item === undefined) {
		return 'UNDEFINED';
	}
	if (typeof item === 'string' || item instanceof String) {
		return `${item}`;
	}
	return item.toString();
};

class HashTableSeparateChaining {
	constructor(toStrFn = defaultToString) {
		this.table = {};
		this.toStrFn = toStrFn;
	}

	hashCode(key) {
		if (typeof key === 'number') {
			return key;
		}
		// Generate a number based on the sum of each char ASCII value that compose the key
		const tableKey = this.toStrFn(key);
		let hash = 0;
		for (let i = 0; i < tableKey.length; ++i) {
			hash += tableKey.charCodeAt(i);
		}
		// Use the rest of the division of the hash number using an arbitrary number
		return hash % 37;
	}

	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			if (this.table[position] == null) {
				this.table[position] = new LinkedList();
			}
			this.table[position].push(new ValuePair(key, value));
			return true;
		}
		return false;
	}

	get(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
		}
		return null;
	}

	remove(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					linkedList.remove(current.element);
					if (linkedList.isEmpty()) {
						delete this.table[position];
					}
					return true;
				}
				current = current.next;
			}
		}
		return false;
	}
}
