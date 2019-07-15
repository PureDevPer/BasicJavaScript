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

class HashTable {
	constructor(toStrFn = defaultToString) {
		this.table = {};
		this.toStrFn = toStrFn;
	}

	loseloseHashCode(key) {
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

	hashCode(key) {
		return this.loseloseHashCode(key);
	}

	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			this.table[position] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	get(key) {
		const valuePair = this.table[this.hashCode(key)];
		return valuePair == null ? null : valuePair.value;
	}

	remove(key) {
		const hash = this.hashCode(key);
		const valuePair = this.table[hash];
		if (valuePair != null) {
			delete this.table[hash];
			return true;
		}
		return false;
	}

	getTable() {
		return this.table;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		return Object.keys(this.table).length;
	}

	clear() {
		this.table = {};
	}

	toString() {
		if (this.isEmpty()) {
			return 'Hash Table is Empty';
		}
		const keys = Object.keys(this.table);
		let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
		for (let i = 1; i < keys.length; ++i) {
			objString = `${objString}, {${keys[i]} => ${this.table[
				keys[i]
			].toString()}}`;
		}
		return objString;
	}
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@gmail.com');
hash.put('John', 'johnsnow@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');

console.log(hash.hashCode('Gandalf') + ' - Gandalf'); // 19 - Gandalf
console.log(hash.hashCode('John') + ' - John'); // 29 - John
console.log(hash.hashCode('Tyrion') + ' - Tyrion'); // 16 - Tyrion

console.log(hash.get('Gandalf')); // gandalf@gmail.com
console.log(hash.get('Loiane')); // null

hash.remove('Gandalf');
console.log(hash.get('Gandalf')); // undefined

console.log(hash.toString());
// {16 => [#Tyrion: tyrion@gmail.com]}, {29 => [#John: johnsnow@gmail.com]}
