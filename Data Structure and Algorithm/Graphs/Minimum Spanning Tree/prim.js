// Prim's Algorithm
const INF = Number.MAX_SAFE_INTEGER;

const minKey = (graph, key, visited) => {
	// Initialize min value
	let min = INF;
	let minIndex = 0;
	for (let v = 0; v < graph.length; v++) {
		if (visited[v] === false && key[v] < min) {
			min = key[v];
			minIndex = v;
		}
	}
	return minIndex;
};

const prim = graph => {
	const parent = [];
	const key = [];
	const visited = [];
	const { length } = graph;
	for (let i = 0; i < length; ++i) {
		key[i] = INF;
		visited[i] = false;
	}
	key[0] = 0;
	parent[0] = -1;
	for (let i = 0; i < length - 1; ++i) {
		// Select the minimum key vertex from the set of vertices that haven't been processed yet
		const u = minKey(graph, key, visited);
		visited[u] = true;
		for (let v = 0; v < length; ++v) {
			if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
				// Minimum weight is found.
				// Then, we will store the MST path value
				parent[v] = u;
				// Set the new cost for the MST value
				key[v] = graph[u][v];
			}
		}
	}
	return parent;
};

const graph = [
	[0, 2, 4, 0, 0, 0],
	[2, 0, 2, 4, 2, 0],
	[4, 2, 0, 0, 3, 0],
	[0, 4, 0, 0, 0, 2],
	[0, 2, 3, 3, 0, 2],
	[0, 0, 0, 2, 2, 0]
];
