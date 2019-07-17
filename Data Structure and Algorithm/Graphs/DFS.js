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

const depthFirstSearch = (graph, callback) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);

	for (let i = 0; i < vertices.length; ++i) {
		if (color[vertices[i]] === Colors.WHITE) {
			depthFirstSearchVisit(vertices[i], color, adjList, callback);
		}
	}
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
	color[u] = Colors.GREY;
	if (callback) {
		callback(u);
	}
	const neighbors = adjList.get(u);

	for (let i = 0; i < neighbors.length; ++i) {
		const w = neighbors[i];
		if (color[w] === Colors.WHITE) {
			depthFirstSearchVisit(w, color, adjList, callback);
		}
	}
	color[u] = Colors.BLACK;
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
	// console.log('discovered ' + u);
	color[u] = Colors.GREY;
	d[u] = ++time.count;
	const neighbors = adjList.get(u);
	for (let i = 0; i < neighbors.length; i++) {
		const w = neighbors[i];
		if (color[w] === Colors.WHITE) {
			p[w] = u;
			DFSVisit(w, color, d, f, p, time, adjList);
		}
	}
	color[u] = Colors.BLACK;
	f[u] = ++time.count;
	// console.log('explored ' + u);
};

export const DFS = graph => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initializeColor(vertices);
	// Discovery time d[u] of u
	const d = {};
	// Finish time f[u] when u is marked black
	const f = {};
	// predecessors p[u] of u
	const p = {};
	const time = { count: 0 };
	for (let i = 0; i < vertices.length; i++) {
		f[vertices[i]] = 0;
		d[vertices[i]] = 0;
		p[vertices[i]] = null;
	}
	for (let i = 0; i < vertices.length; i++) {
		if (color[vertices[i]] === Colors.WHITE) {
			DFSVisit(vertices[i], color, d, f, p, time, adjList);
		}
	}
	return {
		discovery: d,
		finished: f,
		predecessors: p
	};
};
