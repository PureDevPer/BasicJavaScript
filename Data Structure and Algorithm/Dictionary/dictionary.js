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

class ValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}

	toString() {
		return `[#${this.key}: ${this.value}]`;
	}
}

class Dictionary {
	constructor(toStrFn = defaultToString) {
		this.table = {};
		this.toStrFn = toStrFn;
	}

	hasKey(key) {
		return this.table[this.toStrFn(key)] != null;
	}

	set(key, value) {
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key);
			this.table[tableKey] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)];
			return true;
		}
		return false;
	}

	get(key) {
		const valuePair = this.table[this.toStrFn(key)];
		return valuePair == null ? null : valuePair.value;
	}

	keyValues() {
		return Object.values(this.table);
	}

	keyValuesLegacy() {
		const valuePairs = [];
		for (const k in this.table) {
			if (this.hasKey(k)) {
				valuePairs.push(this.table[k]);
			}
		}
		return valuePairs;
	}
	values() {
		return this.keyValues().map(valuePair => valuePair.value);
	}

	keys() {
		return this.keyValues().map(valuePair => valuePair.key);
		/*
		const keys = [];
		const valuePairs = this.keyValues();
		for (let i = 0; i < valuePairs.length; ++i) {
			keys.push(valuePairs[i].key);
		}
        return keys;
        */
	}

	forEach(callbackFn) {
		const valuePairs = this.keyValues();
		for (let i = 0; i < valuePairs.length; ++i) {
			const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
			if (result === false) {
				break;
			}
		}
	}

	size() {
		return Object.keys(this.table).length;
		// return this.keyValues().length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	clear() {
		this.table = {};
	}

	toString() {
		if (this.isEmpty()) {
			return 'Dictionary is Empty';
		}

		const valuePairs = this.keyValues();
		let objString = `${valuePairs[0].toString()}`;
		for (let i = 1; i < valuePairs.length; ++i) {
			objString = `${objString}, ${valuePairs[i].toString()}`;
		}
		return objString;
	}
}

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@gmail.com');
dictionary.set('John', 'johnsnow@gmail.com');
dictionary.set('Tyrion', 'tyrion@gmail.com');

console.log(dictionary.hasKey('Gandalf')); // true
console.log(dictionary.size()); // 3
console.log(dictionary.keys()); // ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values()); // ["gandalf@gmail.com", "johnsnow@gmail.com", "tyrion@gmail.com"]
console.log(dictionary.get('Tyrion')); // tyrion@gmail.com

dictionary.remove('John');
console.log(dictionary.keys()); // ["Gandalf", "Tyrion"]
console.log(dictionary.values()); // ["gandalf@gmail.com", "tyrion@gmail.com"]
console.log(dictionary.keyValues()); // [{key: "Gandalf", value: "gandalf@gmail.com"}, {key: "Tyrion", value: "tyrion@gmail.com"}]

dictionary.forEach((k, v) => {
	console.log('forEach: ', `key: ${k}, value: ${v}`);
});
// forEach:  key: Gandalf, value: gandalf@gmail.com
// forEach:  key: Tyrion, value: tyrion@gmail.com
