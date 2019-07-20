# Greedy Algorithm

A **greedy algorithm** follows the problem-solving heuristic of making the locally optimal choice (the best solution at the time) at each stage with the hope of finding a global optimum (global best solution). It doesn't evaluate the bigger picture like a dynamic programming algorithm does.

- Dijkstra's algorithm
- Prim's algorithm
- Kruskal's algorithm

## The min-coin change problem

Most of time, the result is optimal, but for some denominations, the rsult will not be optimal.

We start with the `coin` with the greatest value and give the change that is possible with this `coin`. When we can't give more `coins` for the current coin value, we start giving change with the `coin` that has the second greatest value and so on.

- Greedy algorithms are simpler and also faster than dynamic programming algorithms. However, it doesn't give the optimal answer all the time
- However, on average, it would output an acceptable solution for the time it takes to execute

For example,

- coins = [1, 3, 4], Change is 6
  - Greedy algorithm: [4,1,1]
  - Dynamic programming: [3,3]
