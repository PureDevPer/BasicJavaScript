class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	push(value) {
		let node = new LinkedList(value);
		node.next = this.top;
		this.top = node;
	}

	pop() {
		let popped = this.top;
		if (this.top !== null) this.top = this.top.next;

		return popped.value;
	}

	peek() {
		return this.top !== null ? this.top.value : null;
	}

	isEmpty() {
		return this.top === null;
	}
}

const stack = new Stack();
stack.push('a'); // a
stack.push('b'); // b->a
stack.push('c'); // c->b->a

console.log(stack.peek()); // c
console.log(stack.isEmpty()); // false
stack.pop();
console.log(stack); // b->a

stack.pop();
stack.pop();
console.log(stack.isEmpty()); // true
