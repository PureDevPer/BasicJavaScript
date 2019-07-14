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

	union(otherSet) {
		const unionSet = new Set();
		this.values().forEach(value => unionSet.add(value));
		otherSet.values().forEach(value => unionSet.add(value));
		return unionSet;
	}

	intersection(otherSet) {
		const intersectionSet = new Set();

		const values = this.values();
		const otherValues = otherSet.values();

		let biggerSet = values;
		let smallerSet = otherValues;

		if (otherValues.length - values.length > 0) {
			biggerSet = otherValues;
			smallerSet = values;
		}
		smallerSet.forEach(value => {
			if (biggerSet.includes(value)) {
				intersectionSet.add(value);
			}
		});

		return intersectionSet;
	}

	difference(otherSet) {
		const differenceSet = new Set();
		this.values().forEach(value => {
			if (!otherSet.has(value)) {
				differenceSet.add(value);
			}
		});
		return differenceSet;
	}

	isSubsetOf(otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		}
		let isSubset = true;
		this.values().every(value => {
			if (!otherSet.has(value)) {
				isSubset = false;
				return false;
			}
			return true;
		});
		return isSubset;
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

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values()); // [1, 2, 3, 4, 5, 6]

const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values()); // [3]

const differenceAB = setA.difference(setB);
console.log(differenceAB.values()); // [1, 2]

const setC = new Set();
setC.add(1);
setC.add(2);

const setD = new Set();
setD.add(1);
setD.add(2);
setD.add(2);

const setE = new Set();
setE.add(2);
setE.add(3);
setE.add(4);

console.log(setC.isSubsetOf(setD)); // true
console.log(setD.isSubsetOf(setE)); // false
