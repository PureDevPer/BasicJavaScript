const INF = Number.MAX_SAFE_INTEGER;

const minDistance = (dist, visited) => {
	let min = INF;
	let minIndex = -1;
	for (let v = 0; v < dist.length; ++v) {
		if (visited[v] === false && dist[v] <= min) {
			min = dist[v];
			minIndex = v;
		}
	}
	return minIndex;
};

const dijkstra = (graph, src) => {
	const dist = [];
	const visited = [];
	const { length } = graph;

	//  Initialize all distance (dist) as infinite
	// visited[] = false
	for (let i = 0; i < length; ++i) {
		dist[i] = INF;
		visited[i] = false;
	}

	// Set the distance of the source from itself as 0
	dist[src] = 0;

	// Find the shortest path for all vertices
	for (let i = 0; i < length - 1; ++i) {
		// Select the min distance vertex from the set of vertices that haven't been processed yet
		const u = minDistance(dist, visited);
		// Mark the selected vertex as true
		visited[u] = true;
		for (let v = 0; v < length; ++v) {
			if (
				!visited[v] &&
				graph[u][v] !== 0 &&
				dist[u] !== INF &&
				dist[u] + graph[u][v] < dist[v]
			) {
				// If the shortest path is found, set the new value for the shortest path
				dist[v] = dist[u] + graph[u][v];
			}
		}
	}
	return dist;
};

const graph = [
	//A B  C  D  E  F
	[0, 2, 4, 0, 0, 0],
	[0, 0, 2, 4, 2, 0],
	[0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 2],
	[0, 0, 0, 3, 0, 2],
	[0, 0, 0, 0, 0, 0]
];

const result = dijkstra(graph, 0);
console.log(result); // [0, 2, 4, 6, 4, 6]

console.log('vertex\tDistance from A');
for (let i = 0; i < graph.length; i++) {
	const temp = i + 65;
	console.log(`${String.fromCharCode(temp)}\t${result[i]}`);
}

/*
vertex	Distance from A 
A	0 
B	2 
C	4 
D	6 
E	4 
F	6 
*/
