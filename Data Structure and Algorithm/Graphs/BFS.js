// White: The vertex hasn't been visited
// Grey: The vertex has been visited but not explored
// Black: The vertex has been completely explored
const Colors = {
	WHITE: 0,
	GREY: 1,
	BLACK: 2
};

const initializeColor = vertices => {
	const color = {};
	for (let i = 0; i < vertices.length; ++i) {
		color[vertices[i]] = Colors.WHITE;
	}
	return color;
};

const breadthFirstSearch = (graph, startVertex, callback) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	const queue = new Queue();

	queue.enqueue(startVertex);

	while (!queue.isEmpty()) {
		const u = queue.dequeue();
		const neighbors = adjList.get(u);
		color[u] = Colors.GREY;
		for (let i = 0; i < neighbors.length; ++i) {
			const w = neighbors[i];
			if (color[w] === Colors.WHITE) {
				color[w] = Colors.GREY;
				queue.enqueue(w);
			}
		}
		color[u] = Colors.BLACK;
		if (callback) {
			callback(u);
		}
	}
};

// Finding the shortest paths using BFS
const BFS = (graph, startVertex) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	const queue = new Queue();
	// The distance[u] from v to u
	const distances = {};
	// Predecessors[u] is used to derive the shortest path from v to every other vertex u
	const predecessors = {};
	queue.enqueue(startVertex);

	for (let i = 0; i < vertices.length; ++i) {
		distances[vertices[i]] = 0;
		predecessors[vertices[i]] = null;
	}

	while (!queue.isEmpty()) {
		const u = queue.dequeue();
		const neighbors = adjList.get(u);
		color[u] = Colors.GREY;
		for (let i = 0; i < neighbors.length; ++i) {
			const w = neighbors[i];
			if (color[w] === Colors.WHITE) {
				color[w] = Colors.GREY;
				distances[w] = distances[u] + 1;
				predecessors[w] = u;
				queue.enqueue(w);
			}
		}
		color[u];
	}
	return { distances, predecessors };
};

class Queue {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	enqueue(element) {
		this.items[this.count] = element;
		++this.count;
	}

	dequeue() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}

		const result = this.items[this.lowestCount];
		++this.lowestCount;
		return result;
	}

	isEmpty() {
		return this.count === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}

		return this.items[this.lowestCount];
	}

	size() {
		return this.count - this.lowestCount;
	}

	clear() {
		this.items = {};
		this.count = 0;
		this.lowestCount = 0;
	}

	toString() {
		if (this.isEmpty()) {
			return 'Queue is Empty';
		}
		let objString = `${this.items[this.lowestCount]}`;
		for (let i = this.lowestCount + 1; i < this.count; ++i) {
			objString = `${objString}, ${this.items[i]}`;
		}
		return objString;
	}
}
