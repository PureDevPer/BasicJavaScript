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

class Graph {
	constructor(isDirected = false) {
		this.isDirected = isDirected;
		this.vertices = [];
		this.adjList = new Dictionary();
	}

	addVertex(v) {
		if (!this.vertices.includes(v)) {
			this.vertices.push(v);
			this.adjList.set(v, []);
		}
	}

	addEdge(v, w) {
		if (!this.adjList.get(v)) {
			this.addVertex(v);
		}
		if (!this.adjList.get(w)) {
			this.addVertex(w);
		}
		this.adjList.get(v).push(w);
		if (!this.isDirected) {
			this.adjList.get(w).push(v);
		}
	}

	getVertices() {
		return this.vertices;
	}

	getAdjList() {
		return this.adjList;
	}

	toString() {
		let s = '';
		for (let i = 0; i < this.vertices.length; ++i) {
			s += `${this.vertices[i]} -> `;
			const neighbors = this.adjList.get(this.vertices[i]);
			for (let j = 0; j < neighbors.length; ++j) {
				s += `${neighbors[j]}`;
			}
			s += '\n';
		}
		return s;
	}
}

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; ++i) {
	graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
