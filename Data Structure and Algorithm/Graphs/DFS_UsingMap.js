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
}

// create a graph class
class Graph {
	// defining vertex array and
	// adjacent list
	constructor(noOfVertices) {
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}

	addVertex(v) {
		// initialize the adjacent list with a
		// null array
		this.AdjList.set(v, []);
	}

	addEdge(v, w) {
		// get the list for vertex v and put the
		// vertex w denoting edge between v and w
		this.AdjList.get(v).push(w);

		// Since graph is undirected,
		// add an edge from w to v also
		this.AdjList.get(w).push(v);
	}

	// Prints the vertex and adjacency list
	printGraph() {
		// get all the vertices
		let get_keys = this.AdjList.keys();

		// iterate over the vertices
		for (let i of get_keys) {
			// great the corresponding adjacency list
			// for the vertex
			let get_values = this.AdjList.get(i);
			let conc = '';

			// iterate over the adjacency list
			// concatenate the values into a string
			for (let j of get_values) conc += j + ' ';

			// print the vertex and its adjacency list
			console.log(i + ' -> ' + conc);
		}
	}

	dfs(startingNode) {
		let visited = [];
		for (let i = 0; i < this.noOfVertices; ++i) {
			visited[i] = true;
		}

		this.DFSUtil(startingNode, visited);
	}

	// Recursive function which process and explore all the adjacent vertex of the vertex
	DFSUtil(vertex, visited) {
		visited[vertex] = true;
		console.log(vertex);

		let getNeighbors = this.AdjList.get(vertex);

		for (let i in getNeighbors) {
			let getElement = getNeighbors[i];
			if (!visited[getElement]) {
				this.DFSUtil(getElement, visited);
			}
		}
	}
}

let g = new Graph(6);
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

g.dfs('A');
// A B C E D F
