class Stack {
	constructor() {
		this.items = {};
		this.count = 0;
	}

	push(element) {
		this.items[this.count] = element;
		++this.count;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	pop() {
		if (this.isEmpty()) {
			return 'Stack is Empty';
		}
		--this.count;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	toString() {
		if (this.isEmpty()) {
			return 'Stack is Empty';
		}
		let objString = `${this.items[0]}`;
		for (let i = 1; i < this.count; ++i) {
			objString = `${objString}, ${this.items[i]}`;
		}
		return objString;
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.items);
// 0: 1
// 1: 2

console.log(stack.count); // 2
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

console.log(stack.toString()); // 1, 2

console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // Stack is Empty
