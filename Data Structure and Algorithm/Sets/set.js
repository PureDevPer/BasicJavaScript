class Set {
	constructor() {
		this.items = {};
	}

	has(element) {
		// The Object prototype has the hasOwnProperty method.
		// This method returns a boolean indicating whether the object has the specified property directly in the object or not,
		// While the in operator returns a boolean indicating whether the object has the specified property in the object chain.
		return Object.prototype.hasOwnProperty.call(this.items, element);
		// return element in this.items;
	}

	add(element) {
		if (!this.has(element)) {
			this.items[element] = element;
			return true;
		}
		return false;
	}

	delete(element) {
		if (this.has(element)) {
			delete this.items[element];
			return true;
		}
		return false;
	}

	clear() {
		this.items = {};
	}

	size() {
		// keys returns an array of all the properties of a given object
		return Object.keys(this.items).length;
	}

	sizeLegacy() {
		let count = 0;
		for (let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				++count;
			}
			return count;
		}
	}

	values() {
		// The Object.values() method returns an array of all of the properties' values of a given object.
		// It was added in ECMAScript 2017 and it's only available in modern browsers
		return Object.values(this.items);
	}

	valuesLegacy() {
		let values = [];
		for (let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				values.push(key);
			}
		}
		return values;
	}
}

const set = new Set();

set.add(1);
console.log(set.values()); // [1]
console.log(set.has(1)); // true
console.log(set.size()); // 1

set.add(2);
console.log(set.values()); // [1, 2]
console.log(set.has(2)); // true
console.log(set.size()); // 2

set.delete(1);
console.log(set.values()); // [2]

set.delete(2);
console.log(set.values()); // []
