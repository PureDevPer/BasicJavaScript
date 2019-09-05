# Greedy Algorithm

A **greedy algorithm** follows the problem-solving heuristic of making the locally optimal choice (the best solution at the time) at each stage with the hope of finding a global optimum (global best solution). It doesn't evaluate the bigger picture like a dynamic programming algorithm does.

- <a href="https://github.com/PureDevPer/BasicJavaScript/blob/master/Data%20Structure%20and%20Algorithm/Graphs/Shortest%20Path/Dijkstra.js" target=_blank>Dijkstra's algorithm</a>
- <a href="https://github.com/PureDevPer/BasicJavaScript/blob/master/Data%20Structure%20and%20Algorithm/Graphs/Minimum%20Spanning%20Tree/prim.js" target=_blank>Prim's algorithm</a>
- <a href="https://github.com/PureDevPer/BasicJavaScript/blob/master/Data%20Structure%20and%20Algorithm/Graphs/Minimum%20Spanning%20Tree/kruskal.js" target=_blank>Kruskal's algorithm</a>

## The min-coin change problem

Most of time, the result is optimal, but for some denominations, the result will not be optimal.

We start with the `coin` with the greatest value and give the change that is possible with this `coin`. When we can't give more `coins` for the current coin value, we start giving change with the `coin` that has the second greatest value and so on.

- Greedy algorithms are simpler and also faster than dynamic programming algorithms. However, it doesn't give the optimal answer all the time
- However, on average, it would output an acceptable solution for the time it takes to execute

For example,

- coins = [1, 3, 4], Change is 6
  - Greedy algorithm: [4,1,1]
  - Dynamic programming: [3,3]

## The fractional knapsack problem

The alogirthm to solve the gractional knapsack problem is a little different from the dynamic programming version. While, in the 0-1 knapsack problem, we can only use the whole item to fill the knapsack, in the fractional knapsack problem, we can use fractions of the items.

| **Item #** | **Weight** | **Value** |
| :--------: | :--------: | :-------: |
|     1      |     2      |     3     |
|     2      |     3      |     4     |
|     3      |     4      |     5     |

We consider that the knapsack could only carry a weight of 5. For this example, the best solution would be filling the knapsack with items 1 and 2, which have a `weight of 5` and a `total value of 7`.

If we consider the same capacity for the fractional knapsack problem, we will have the same output. However, what about the capacity as 6 instead of 5?

In this case, the solution would be to use items 1 and 2 and only 25% of item 3. This would give a `maximum value of 8.25 with a total weight of 6`.
