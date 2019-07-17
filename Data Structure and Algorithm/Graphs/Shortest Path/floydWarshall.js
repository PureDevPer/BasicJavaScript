const floydWarshall = graph => {
	const dist = [];
	const { length } = graph;
	for (let i = 0; i < length; i++) {
		dist[i] = [];
		for (let j = 0; j < length; j++) {
			if (i === j) {
				dist[i][j] = 0;
			} else if (!isFinite(graph[i][j])) {
				dist[i][j] = Infinity;
			} else {
				dist[i][j] = graph[i][j];
			}
		}
	}
	for (let k = 0; k < length; k++) {
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length; j++) {
				if (dist[i][k] + dist[k][j] < dist[i][j]) {
					dist[i][j] = dist[i][k] + dist[k][j];
				}
			}
		}
	}
	return dist;
};

const graph = [
	[0, 2, 4, 0, 0, 0],
	[2, 0, 2, 4, 2, 0],
	[4, 2, 0, 0, 3, 0],
	[0, 4, 0, 0, 0, 2],
	[0, 2, 3, 3, 0, 2],
	[0, 0, 0, 2, 2, 0]
];
