class Graph {
	constructor() {
		this.vertices = [];
		this.edges = [];
		this.numberOfEdges = 0;
	}

	addVertex(vertex) {
		this.vertices.push(vertex);
		this.edges[vertex] = [];
	}

	removeVertex(vertex) {
		// Find the index of the vertex you want to remove in the vertices array
		const index = this.vertices.indexOf(vertex);
		if (index >= 0) {
			// Remove the vertex with the found index from the vercies array
			this.vertices.splice(index, 1);
		}

		// If the values of the vertex in the edge's array have data
		while (this.edges[vertex].length) {
			// Find the adjacent vertex to get the last value of the array
			const adjacentVertex = this.edges[vertex].pop();
			this.removeEdge(adjacentVertex, vertex);
		}
	}

	addEdge(vertex1, vertex2) {
		this.edges[vertex1].push(vertex2);
		this.edges[vertex2].push(vertex1);
		++this.numberOfEdges;
	}

	removeEdge(vertex1, vertex2) {
		// Find index of vertex
		const index1 = this.edges[vertex1]
			? this.edges[vertex1].indexOf(vertex2)
			: -1;
		const index2 = this.edges[vertex2]
			? this.edges[vertex2].indexOf(vertex1)
			: -1;

		if (index1 >= 0) {
			// Remove the vertex with the specific index
			this.edges[vertex1].splice(index1, 1);
			--this.numberOfEdges;
		}
		if (index2 >= 0) {
			this.edges[vertex2].splice(index2, 1);
		}
	}

	size() {
		return this.vertices.length;
	}

	DFS(vertex, fn) {
		if (this.vertices.indexOf(vertex) < 0) {
			return 'No vertex';
		}
		const visited = [];
		this.DFS(vertex, visited, fn);
	}

	DFS(vertex, visited, fn) {
		visited[vertex] = true;

		// Invoke function passed
		if (this.edges[vertex] !== null) {
			fn(vertex);
		}

		for (let i = 0; i < this.edges[vertex].length; ++i) {
			if (!visited[this.edges[vertex][i]]) {
				this.DFS(this.edges[vertex][i], visited, fn);
			}
		}
	}

	BFS(vertex, fn) {
		if (this.vertices.indexOf(vertex) < 0) {
			return 'No vertex';
		}

		const queue = [];
		queue.push(vertex);
		const visited = [];
		visited[vertex] = true;

		while (queue.length) {
			// set vertex equal to first item in queue array
			vertex = queue.shift();

			fn(vertex);

			for (let i = 0; i < this.edges[vertex].length; ++i) {
				if (!visited[this.edges[vertex][i]]) {
					visited[this.edges[vertex][i]] = true;
					queue.push(this.edges[vertex][i]);
				}
			}
		}
	}

	toString() {
		console.log(
			this.vertices
				.map(vertex => {
					return `${vertex} => ${this.edges[vertex].join(', ')}`.trim();
				}, this)
				.join(' | ')
		);
	}
}

const g = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
