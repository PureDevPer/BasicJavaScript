# Dynamic Programming

**Dynamic programming (DP)** is an optimization technique used to solve complex problems by breaking them into smaller subproblmes

- Divide and Conquer breaks the problem into independent subproblems and then combines the solutions
- Dynamic programming breaks the probem into dependent subproblmes

3 important steps when solving problems with Dynamic Programming

1. Define the subproblems
2. Implement the recurrence that solves the subproblems. We need to follow the steps for recursion
3. Recognize and solve the base cases

## Famous Problems that can be solved with dynamic programming

- **Coin Change**: This consists of finding how many different ways we can make change in a particular amount of cents using a given amount of set denominations (d1 ... dn)
- **The knapsack problem**: In this problem, given a set of items, each one with a value and volume, the goal is to determine the best collection of items out of the set in a way to maximize the total value. The constraint of the problem is that the total volume needs to be the volume supported by the _knapsack_ or less.
- **The longest common subsequence**: This consists of finding the longest subsequence (a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements) common to all sequences in a set of sequences
- **Matrix chain multiplication**: In this problem, given a sequence of matrics, the goal is to find the most efficient way to multiply these matrices (with as few operations as possible). The multiplication is not performed; the solution is finding the sequences in each of the matrices that need to be multiplied
- **All-pairs shortest paths in a graph**: This consists of finding the shortest path from vertex _u_ to vertex _v_ for all pairs of vertices(_u,v_). e.g. Floyed-Warshall algorithm

### The minimum coin change problem

The **minimum coin change problem** is a variation of the **coin change problem**. The coin change problem consists of finding out in how many ways we can make change for a particular amount of cents using a given amount of set denominations (d<sub>1</sub> ... d<sub>n</sub>). The minimum coin change problem consists of finding the minimum number of coins needed to make a particular amount of cents using a given amount of set denominations (d<sub>1</sub> ... d<sub>n</sub>).

The min-coin change solution consists of finding the minimum number of coins for _n_. But to do this, first we need to find the solution for every _x<n_. Then, we can build up the solution out of the solutions for smaller values.

Let's suppose that there are 3 coins: `1` cent, `5` cents, `10` cents

```javascript
const coins = [1, 5, 10];
```

| **Change** | **#of 1 cents** | **#of 5 cents** | **#of 10 cents** |
| :--------: | :-------------: | :-------------: | :--------------: |
|     1      |        1        |        1        |        1         |
|     2      |        2        |        2        |        2         |
|     3      |        3        |        3        |        3         |
|     4      |        4        |        4        |        4         |
|     5      |        5        |        1        |        1         |
|     6      |        6        |        2        |        2         |
|     7      |        7        |        3        |        3         |
|     8      |        8        |        4        |        4         |
|     9      |        9        |        5        |        5         |
|     10     |       10        |        2        |        1         |
|     11     |       11        |        3        |        2         |
|     12     |       12        |        4        |        3         |

Above table, we can find an equation like below

```javascript
dp[j] = Math.min(dp[j], dp[j - coin[i]]) + 1;
```

`dp[j]` means change we need to get. Therefore, `dp[j-coin[i]]` indicates `change - coin`.

### The knapsack problem

The knapsack problem is a combinatorial optimization problem. It can be described as follows: given a fixed-size knapsack with a capacity to carry W amount of weight and a set of items that have a value and weight, find the best solution in a way to fill the knapsack with the most valuable items so that the total weight is less than or equal to W
