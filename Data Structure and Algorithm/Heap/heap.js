class Heap {
	constructor() {
		this.values = [];
	}

	insert(value) {
		this.values.push(value);
		this.floatUp();
	}

	floatUp(index) {
		let currIndex = index || this.values.length - 1;
		let parent = Math.floor((currIndex - 1) / 2);
		if (parent >= 0 && this.values[parent] > this.values[currIndex]) {
			[this.values[parent], this.values[currIndex]] = [
				this.values[currIndex],
				this.values[parent]
			];
			this.floatUp(parent);
		}
	}

	remove() {
		const front = 0;
		const back = this.values.length - 1;
		[this.values[front], this.values[back]] = [
			this.values[back],
			this.values[front]
		];
		let removed = this.values.pop();
		this.sinkDown();
		return removed;
	}

	sinkDown(index) {
		let currIndex = index || 0;
		let left = currIndex * 2 + 1;
		let right = currIndex * 2 + 2;
		let sinkTo = this.values[left] < this.values[right] ? left : right;
		if (
			sinkTo < this.values.length &&
			this.values[currIndex] > this.values[sinkTo]
		) {
			[this.values[currIndex], this.values[sinkTo]] = [
				this.values[sinkTo],
				this.values[currIndex]
			];
			this.sinkDown(sinkTo);
		}
	}

	isEmpty() {
		return this.values.length === 0;
	}

	peek() {
		return this.values[0];
	}
}