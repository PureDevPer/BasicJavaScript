const Node = data => {
	this.data = data;
	this.next = null;
};

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.count = 0;
	}

	add(data) {
		const node = new Node(data);
		if (!this.head) {
			// the list has no length
			// Then The node will be both the tail and the head
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		++this.count;
	}

	remove(data) {
		let previous = this.head;
		let current = this.head;
		while (current) {
			if (current.data === data) {
				// if the node that we want to remove is head node
				if (current === this.head) {
					this.head = this.head.next;
				}
				// if the node that we want to remove is tail node
				if (current === this.tail) {
					this.tail = previous;
				}
				previous.next = current.next;
				--this.count;
			} else {
				previous = current;
			}
			current = current.next;
		}
	}

	insert(data, toNodeData) {
		let current = this.head;
		while (current) {
			if (current.data === toNodeData) {
				const node = new Node(data);
				if (current === this.tail) {
					this.tail.next = node;
					this.tail = node;
				} else {
					node.next = current.next;
					current.next = node;
				}
				++this.count;
			}
			current = current.next;
		}
	}

	traverse(Node) {
		let current = this.head;
		while (current) {
			if (Node) {
				Node(current);
			}
			current = current.next;
		}
	}
}
