class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}

	toString() {
		console.log(this.items.join(' '));
	}
}

const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3

stack.push(4);
console.log(stack.size()); // 4
console.log(stack.isEmpty()); // false

stack.pop();
stack.pop();
console.log(stack.size()); // 2

stack.toString(); // 1 2
