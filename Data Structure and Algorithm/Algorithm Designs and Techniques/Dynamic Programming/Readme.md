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

## Solution

<details><summary><p>The minimum coin change problem</p></summary>
<p>

### The minimum coin change problem

- https://stackoverflow.com/questions/57135424/javascript-recursion-why-is-value-increasing-without-increment-code

The **minimum coin change problem** is a variation of the **coin change problem**. The coin change problem consists of finding out in how many ways we can make change for a particular amount of cents using a given amount of set denominations (d<sub>1</sub> ... d<sub>n</sub>). The minimum coin change problem consists of finding the minimum number of coins needed to make a particular amount of cents using a given amount of set denominations (d<sub>1</sub> ... d<sub>n</sub>).

The min-coin change solution consists of finding the minimum number of coins for _n_. But to do this, first we need to find the solution for every _x<n_. Then, we can build up the solution out of the solutions for smaller values.

Let's suppose that there are 3 coins: `1` cent, `5` cents, `10` cents

```javascript
const coins = [1, 5, 10];
```

| **Change** | **# of 1 cents** | **# of 5 cents** | **# of 10 cents** |
| :--------: | :--------------: | :--------------: | :---------------: |
|     1      |        1         |        1         |         1         |
|     2      |        2         |        2         |         2         |
|     3      |        3         |        3         |         3         |
|     4      |        4         |        4         |         4         |
|     5      |        5         |        1         |         1         |
|     6      |        6         |        2         |         2         |
|     7      |        7         |        3         |         3         |
|     8      |        8         |        4         |         4         |
|     9      |        9         |        5         |         5         |
|     10     |        10        |        2         |         1         |
|     11     |        11        |        3         |         2         |
|     12     |        12        |        4         |         3         |

Above table, we can find an equation like below

```javascript
dp[j] = Math.min(dp[j], dp[j - coin[i]]) + 1;
```

`dp[j]` means change we need to get. Therefore, `dp[j-coin[i]]` indicates `change - coin`.

</p>
</details>

<details><summary><p>The knapsack problem</p></summary>
<p>

### The Knapsack Problem

The knapsack problem is a combinatorial optimization problem. It can be described as follows: given a fixed-size knapsack with a capacity to carry W amount of weight and a set of items that have a value and weight, find the best solution in a way to fill the knapsack with the most valuable items so that the total weight is less than or equal to W

| **Item #** | **Weight** | **Value** |
| :--------: | :--------: | :-------: |
|     1      |     2      |     3     |
|     2      |     3      |     4     |
|     3      |     4      |     5     |

Consider that the knapsack can only carry `a weight of 5`. For above example, we can say that `the best solution would be filling the knapsack with items 1 and 2`, which together have `a weight of 5` and a `total value of 7`.

We have 2 loops like below

```javascript
for (let i = 0; i <= n; ++i)
	for (let w = 0; w <= capacity; ++w)
```

An outer loop means the number of items. So, i = 0 ~ 3

```javascript
for (let i = 0; i <= n; ++i)
```

An inner loop indicates weight we want to calculate. So, w = 0 ~ 5

```javascript
for (let w = 0; w <= capacity; ++w)
```

Here's our core code

```javascript
for (let i = 0; i <= n; ++i) {
	for (let w = 0; w <= capacity; ++w) {
		if (i === 0 || w === 0) {
			kS[i][w] = 0;
		} else if (weights[i - 1] <= w) {
			kS[i][w] = Math.max(
				values[i - 1] + kS[i - 1][w - weights[i - 1]],
				kS[i - 1][w]
			);
		} else {
			kS[i][w] = kS[i - 1][w];
		}
	}
}
```

When i = 0 or w = 0, value is 0. So we can make the table.

```javascript
// Base Case
if (i === 0 || w === 0) {
	kS[i][w] = 0;
}
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   -   |   -   |   -   |   -   |   -   |
|  **2**  |   0   |   -   |   -   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

<details><summary><h4>i=1</h4></summary>
<p>

#### i=1, w=1

```javascript
weights[i - 1] <= w
weights[1-1] <= 1
weights[0] <= 1
2 <= 1
else {
    kS[i][w] = kS[i - 1][w];
}

kS[1][1] = kS[1 - 1][1] = kS[0][1] = 0
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   -   |   -   |   -   |   -   |
|  **2**  |   0   |   -   |   -   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=1, w=2

```javascript
weights[i - 1] <= w
weights[1-1] <= 2
weights[0] <= 2
2 <= 2

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[1 - 1] + kS[1 - 1][2 - weights[1 - 1]]
    = values[0] + kS[0][2 - weights[0]]
    = values[0] + kS[0][2 - 2]
    = values[0] + kS[0][0]
    = 3 + 0
    = 3

kS[i - 1][w]
    = kS[1 - 1][2]
    = kS[0][2]
    = 0

kS[1][2] = Math.Max(3, 0) = 3
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   -   |   -   |   -   |
|  **2**  |   0   |   -   |   -   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=1, w=3

```javascript
weights[i - 1] <= w
weights[1-1] <= 3
weights[0] <= 3
2 <= 3

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[1 - 1] + kS[1 - 1][3 - weights[1 - 1]]
    = values[0] + kS[0][3 - weights[0]]
    = values[0] + kS[0][3 - 2]
    = values[0] + kS[0][1]
    = 3 + 0
    = 3

kS[i - 1][w]
    = kS[1 - 1][3]
    = kS[0][3]
    = 0

kS[1][3] = Math.Max(3, 0) = 3
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   -   |   -   |
|  **2**  |   0   |   -   |   -   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=1, w=4

```javascript
weights[i - 1] <= w
weights[1-1] <= 4
weights[0] <= 4
2 <= 4

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[1 - 1] + kS[1 - 1][4 - weights[1 - 1]]
    = values[0] + kS[0][4 - weights[0]]
    = values[0] + kS[0][4 - 2]
    = values[0] + kS[0][2]
    = 3 + 0
    = 3

kS[i - 1][w]
    = kS[1 - 1][4]
    = kS[0][4]
    = 0

kS[1][4] = Math.Max(3, 0) = 3
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   -   |
|  **2**  |   0   |   -   |   -   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=1, w=5

```javascript
weights[i - 1] <= w
weights[1-1] <= 5
weights[0] <= 5
2 <= 5

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[1 - 1] + kS[1 - 1][5 - weights[1 - 1]]
    = values[0] + kS[0][5 - weights[0]]
    = values[0] + kS[0][5 - 2]
    = values[0] + kS[0][3]
    = 3 + 0
    = 3

kS[i - 1][w]
    = kS[1 - 1][5]
    = kS[0][5]
    = 0

kS[1][5] = Math.Max(3, 0) = 3
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   -   |   -   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

</p>
</details>

<details><summary><h4>i=2</h4></summary>
<p>

#### i=2, w=1

```javascript
weights[i - 1] <= w
weights[2-1] <= 1
weights[1] <= 1
3 <= 1

else {
	kS[i][w] = kS[i - 1][w];
}

kS[2][1] = kS[2 - 1][1] = kS[1][1] = 0
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   -   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=2, w=2

```javascript
weights[i - 1] <= w
weights[2-1] <= 2
weights[1] <= 2
3 <= 2

else {
	kS[i][w] = kS[i - 1][w];
}

kS[2][2] = kS[2 - 1][2] = kS[1][2] = 3
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   -   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=2, w=3

```javascript
weights[i - 1] <= w
weights[2-1] <= 3
weights[1] <= 3
3 <= 3

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[2 - 1] + kS[2 - 1][3 - weights[2 - 1]]
    = values[1] + kS[1][3 - weights[1]]
    = values[1] + kS[1][3 - 3]
    = values[1] + kS[1][0]
    = 4 + 0
    = 4

kS[i - 1][w]
    = kS[2 - 1][3]
    = kS[1][3]
    = 3

kS[2][3] = Math.Max(4, 3) = 4
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   -   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=2, w=4

```javascript
weights[i - 1] <= w
weights[2-1] <= 4
weights[1] <= 4
3 <= 4

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[2 - 1] + kS[2 - 1][4 - weights[2 - 1]]
    = values[1] + kS[1][4 - weights[1]]
    = values[1] + kS[1][4 - 3]
    = values[1] + kS[1][1]
    = 4 + 0
    = 4

kS[i - 1][w]
    = kS[2 - 1][4]
    = kS[1][4]
    = 3

kS[2][4] = Math.Max(4, 3) = 4
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   4   |   -   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

#### i=2, w=5

```javascript
weights[i - 1] <= w
weights[2-1] <= 5
weights[1] <= 5
3 <= 4

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[2 - 1] + kS[2 - 1][5 - weights[2 - 1]]
    = values[1] + kS[1][5 - weights[1]]
    = values[1] + kS[1][5 - 3]
    = values[1] + kS[1][2]
    = 4 + 3
    = 7

kS[i - 1][w]
    = kS[2 - 1][5]
    = kS[1][5]
    = 3

kS[2][5] = Math.Max(7, 3) = 7
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   4   |   7   |
|  **3**  |   0   |   -   |   -   |   -   |   -   |   -   |

</p>
</details>

<details><summary><h4>i=3</h4></summary>
<p>

#### i=3, w=1

```javascript
weights[i - 1] <= w
weights[3-1] <= 1
weights[2] <= 1
4 <= 1

else {
	kS[i][w] = kS[i - 1][w];
}

kS[3][1] = kS[3 - 1][1] = kS[2][1] = 0
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   4   |   7   |
|  **3**  |   0   |   0   |   -   |   -   |   -   |   -   |

#### i=3, w=2

```javascript
weights[i - 1] <= w
weights[3-1] <= 2
weights[2] <= 2
4 <= 2

else {
	kS[i][w] = kS[i - 1][w];
}

kS[3][2] = kS[3 - 1][2] = kS[2][2] = 3
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   4   |   7   |
|  **3**  |   0   |   0   |   3   |   -   |   -   |   -   |

#### i=3, w=3

```javascript
weights[i - 1] <= w
weights[3-1] <= 3
weights[2] <= 3
4 <= 3

else {
	kS[i][w] = kS[i - 1][w];
}

kS[3][3] = kS[3 - 1][3] = kS[2][3] = 4
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   4   |   7   |
|  **3**  |   0   |   0   |   3   |   4   |   -   |   -   |

#### i=3, w=4

```javascript
weights[i - 1] <= w
weights[3-1] <= 4
weights[2] <= 4
4 <= 4

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[3 - 1] + kS[3 - 1][4 - weights[3 - 1]]
    = values[2] + kS[2][4 - weights[2]]
    = values[2] + kS[2][4 - 4]
    = values[2] + kS[2][0]
    = 5 + 0
    = 5

kS[i - 1][w]
    = kS[3 - 1][4]
    = kS[2][4]
    = 4

kS[3][4] = Math.Max(5, 4) = 5
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   4   |   7   |
|  **3**  |   0   |   0   |   3   |   4   |   5   |   -   |

#### i=3, w=5

```javascript
weights[i - 1] <= w
weights[3-1] <= 5
weights[2] <= 5
4 <= 5

else if (weights[i - 1] <= w) {
	kS[i][w] = Math.max(
		values[i - 1] + kS[i - 1][w - weights[i - 1]],
		kS[i - 1][w]
	);
}

values[i - 1] + kS[i - 1][w - weights[i - 1]]
    = values[3 - 1] + kS[3 - 1][5 - weights[3 - 1]]
    = values[2] + kS[2][5 - weights[2]]
    = values[2] + kS[2][5 - 4]
    = values[2] + kS[2][1]
    = 5 + 0
    = 5

kS[i - 1][w]
    = kS[3 - 1][5]
    = kS[2][5]
    = 7

kS[3][7] = Math.Max(5, 7) = 7
```

| **i\w** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-----: | :---: | :---: | :---: | :---: | :---: | :---: |
|  **0**  |   0   |   0   |   0   |   0   |   0   |   0   |
|  **1**  |   0   |   0   |   3   |   3   |   3   |   3   |
|  **2**  |   0   |   0   |   3   |   4   |   4   |   7   |
|  **3**  |   0   |   0   |   3   |   4   |   5   |   7   |

</p>
</details>

</p>
</details>


<details><summary><p>The longest common subsequence</p></summary>
<p>

### The Longest Common Subsequence

The **longest common subsequence (LCS)** consists of finding the length of the longest subsequence in two string sequences. The longest subsequence is a sequence that appears in the same relative order but is not necessarily contiguous (not a substring) in both strings.

For example,

```javascript
let str1 = 'acbaed';
let str2 = 'abcadf';
```

LCS: `acad` with length 4

When `i = 0` or `j = 0`, `l[i][j] = 0`

```javascript
for (let i = 0; i <= m; ++i) {
	for (let j = 0; j <= n; ++j) {
		if (i === 0 || j === 0) {
			l[i][j] = 0;
		} else if (wordX[i - 1] === wordY[j - 1]) {
			l[i][j] = l[i - 1][j - 1] + 1;
		} else {
			const a = l[i - 1][j];
			const b = l[i][j - 1];
			l[i][j] = a > b ? a : b;
		}
	}
}
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **2**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |

```javascript
wordX[] = "abcadf"
wordY[] = "acbaed"
```

<details><summary><p>i = 1</p></summary>
<p>

#### i = 1, j = 1

```javascript
wordX[i - 1] = wordX[0] = "a"
wordY[j - 1] = wordY[0] = "a"

else if(wordX[i - 1] === wordX[j - 1]){
    l[i][j] = l[i - 1][j - 1] + 1;
}

l[1][1]
    = l[i - 1][j - 1] + 1
    = l[0][0] + 1
    = 0 + 1
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   -   |   -   |   -   |   -   |
|   **2**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |

#### i = 1, j = 2

```javascript
wordX[i - 1] = wordX[0] = "a"
wordY[j - 1] = wordY[1] = "c"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[1 - 1][2]
    = l[0][2]
    = 0

b
    = l[i][j - 1]
    = l[1][2 - 1]
    = l[1][1]
    = 1

l[1][2]
    = Math.max(a, b)
    = Math.max(0, 1)
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   -   |   -   |   -   |
|   **2**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |

#### i = 1, j = 3

```javascript
wordX[i - 1] = wordX[0] = "a"
wordY[j - 1] = wordY[2] = "b"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[1 - 1][3]
    = l[0][3]
    = 0

b
    = l[i][j - 1]
    = l[1][3 - 1]
    = l[1][2]
    = 1

l[1][3]
    = Math.max(a, b)
    = Math.max(0, 1)
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   -   |   -   |
|   **2**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |

#### i = 1, j = 4

```javascript
wordX[i - 1] = wordX[0] = "a"
wordY[j - 1] = wordY[3] = "a"

else if(wordX[i - 1] === wordX[j - 1]){
    l[i][j] = l[i - 1][j - 1] + 1;
}

l[1][4]
    = l[i - 1][j - 1] + 1
    = l[1 - 1][4 - 1] + 1
    = l[0][3] + 1
    = 0 + 1
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   -   |   -   |
|   **2**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 1, j = 5

```javascript
wordX[i - 1] = wordX[0] = "a"
wordY[j - 1] = wordY[4] = "e"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[1 - 1][5]
    = l[0][5]
    = 0

b
    = l[i][j - 1]
    = l[1][5 - 1]
    = l[1][4]
    = 1

l[1][5]
    = Math.max(a, b)
    = Math.max(0, 1)
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   -   |
|   **2**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 1, j = 6

```javascript
wordX[i - 1] = wordX[0] = "a"
wordY[j - 1] = wordY[5] = "d"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[1 - 1][6]
    = l[0][6]
    = 0

b
    = l[i][j - 1]
    = l[1][6 - 1]
    = l[1][5]
    = 1

l[1][6]
    = Math.max(a, b)
    = Math.max(0, 1)
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

</p>
</details>

<details><summary><p>i = 2</p></summary>
<p>

#### i = 2, j = 1

```javascript
wordX[i - 1] = wordX[1] = "b"
wordY[j - 1] = wordY[0] = "a"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[2 - 1][1]
    = l[1][2]
    = 1

b
    = l[i][j - 1]
    = l[1][1 - 1]
    = l[1][0]
    = 0

l[2][1]
    = Math.max(a, b)
    = Math.max(1, 0)
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   -   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 2, j = 2

```javascript
wordX[i - 1] = wordX[1] = "b"
wordY[j - 1] = wordY[1] = "c"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[2 - 1][2]
    = l[1][2]
    = 1

b
    = l[i][j - 1]
    = l[1][2 - 1]
    = l[1][1]
    = 1

l[2][2]
    = Math.max(a, b)
    = Math.max(1, 1)
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   -   |   -   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 2, j = 3

```javascript
wordX[i - 1] = wordX[1] = "b"
wordY[j - 1] = wordY[2] = "b"

else if(wordX[i - 1] === wordX[j - 1]){
    l[i][j] = l[i - 1][j - 1] + 1;
}

l[2][3]
    = l[i - 1][j - 1] + 1
    = l[2 - 1][3 - 1] + 1
    = l[1][2] + 1
    = 1 + 1
    = 2
```

#### i = 2, j = 4

```javascript
wordX[i - 1] = wordX[1] = "b"
wordY[j - 1] = wordY[3] = "a"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[2 - 1][4]
    = l[1][4]
    = 1

b
    = l[i][j - 1]
    = l[2][4 - 1]
    = l[2][3]
    = 2

l[2][4]
    = Math.max(a, b)
    = Math.max(1, 2)
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   -   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 2, j = 5

```javascript
wordX[i - 1] = wordX[1] = "b"
wordY[j - 1] = wordY[4] = "e"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[2 - 1][5]
    = l[1][5]
    = 1

b
    = l[i][j - 1]
    = l[2][5 - 1]
    = l[2][4]
    = 2

l[2][5]
    = Math.max(a, b)
    = Math.max(1, 2)
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   -   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 2, j = 6

```javascript
wordX[i - 1] = wordX[1] = "b"
wordY[j - 1] = wordY[5] = "d"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[2 - 1][6]
    = l[1][6]
    = 1

b
    = l[i][j - 1]
    = l[2][6 - 1]
    = l[2][5]
    = 2

l[2][6]
    = Math.max(a, b)
    = Math.max(1, 2)
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

</p>
</details>

<details><summary><p>i = 3</p></summary>
<p>

#### i = 3, j = 1

```javascript
wordX[i - 1] = wordX[2] = "b"
wordY[j - 1] = wordY[0] = "a"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[3 - 1][1]
    = l[2][1]
    = 1

b
    = l[i][j - 1]
    = l[3][1 - 1]
    = l[3][0]
    = 0

l[3][1]
    = Math.max(a, b)
    = Math.max(1, 0)
    = 1
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   -   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 3, j = 2

```javascript
wordX[i - 1] = wordX[2] = "b"
wordY[j - 1] = wordY[1] = "c"

else if(wordX[i - 1] === wordX[j - 1]){
    l[i][j] = l[i - 1][j - 1] + 1;
}

l[3][2]
    = l[i - 1][j - 1] + 1
    = l[3 - 1][2 - 1] + 1
    = l[2][1] + 1
    = 1 + 1
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   -   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 3, j = 3

```javascript
wordX[i - 1] = wordX[2] = "b"
wordY[j - 1] = wordY[2] = "b"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[3 - 1][3]
    = l[2][3]
    = 2

b
    = l[i][j - 1]
    = l[3][3 - 1]
    = l[3][2]
    = 2

l[3][3]
    = Math.max(a, b)
    = Math.max(2, 2)
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   -   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 3, j = 4

```javascript
wordX[i - 1] = wordX[2] = "b"
wordY[j - 1] = wordY[3] = "a"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[3 - 1][4]
    = l[2][4]
    = 2

b
    = l[i][j - 1]
    = l[3][4 - 1]
    = l[3][3]
    = 2

l[3][4]
    = Math.max(a, b)
    = Math.max(2, 2)
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   -   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 3, j = 5

```javascript
wordX[i - 1] = wordX[2] = "b"
wordY[j - 1] = wordY[4] = "e"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[3 - 1][5]
    = l[2][5]
    = 2

b
    = l[i][j - 1]
    = l[3][5 - 1]
    = l[3][4]
    = 2

l[3][5]
    = Math.max(a, b)
    = Math.max(2, 2)
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   -   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 3, j = 6

```javascript
wordX[i - 1] = wordX[2] = "b"
wordY[j - 1] = wordY[5] = "d"

else {
	const a = l[i - 1][j];
	const b = l[i][j - 1];
	l[i][j] = a > b ? a : b;
}

a
    = l[i - 1][j]
    = l[3 - 1][6]
    = l[2][6]
    = 2

b
    = l[i][j - 1]
    = l[3][6 - 1]
    = l[3][5]
    = 2

l[3][6]
    = Math.max(a, b)
    = Math.max(2, 2)
    = 2
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

</p>
</details>

<details><summary><p>i = 4</p></summary>
<p>

#### i = 4, j = 1

```javascript
wordX[i - 1] = wordX[3] = 'a';
wordY[j - 1] = wordY[0] = 'a';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   -   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 4, j = 2

```javascript
wordX[i - 1] = wordX[3] = 'a';
wordY[j - 1] = wordY[1] = 'c';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   -   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 4, j = 3

```javascript
wordX[i - 1] = wordX[3] = 'a';
wordY[j - 1] = wordY[2] = 'b';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   -   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 4, j = 4

```javascript
wordX[i - 1] = wordX[3] = 'a';
wordY[j - 1] = wordY[3] = 'a';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   -   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 4, j = 5

```javascript
wordX[i - 1] = wordX[3] = 'a';
wordY[j - 1] = wordY[4] = 'e';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   -   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 4, j = 6

```javascript
wordX[i - 1] = wordX[3] = 'a';
wordY[j - 1] = wordY[5] = 'd';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

</p>
</details>

<details><summary><p>i = 5</p></summary>
<p>

#### i = 5, j = 1

```javascript
wordX[i - 1] = wordX[3] = 'd';
wordY[j - 1] = wordY[0] = 'a';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   -   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 5, j = 2

```javascript
wordX[i - 1] = wordX[4] = 'd';
wordY[j - 1] = wordY[1] = 'c';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   -   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 5, j = 3

```javascript
wordX[i - 1] = wordX[4] = 'd';
wordY[j - 1] = wordY[2] = 'b';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   -   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 5, j = 4

```javascript
wordX[i - 1] = wordX[4] = 'd';
wordY[j - 1] = wordY[3] = 'a';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   -   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 5, j = 5

```javascript
wordX[i - 1] = wordX[4] = 'd';
wordY[j - 1] = wordY[4] = 'e';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   -   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

#### i = 5, j = 6

```javascript
wordX[i - 1] = wordX[4] = 'd';
wordY[j - 1] = wordY[5] = 'd';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |
|   **6**   |   0   |   -   |   -   |   -   |   -   |   -   |   -   |

</p>
</details>

<details><summary><p>i = 6</p></summary>
<p>

#### i = 6, j = 1

```javascript
wordX[i - 1] = wordX[5] = 'f';
wordY[j - 1] = wordY[0] = 'a';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |
|   **6**   |   0   |   1   |   -   |   -   |   -   |   -   |   -   |

#### i = 6, j = 2

```javascript
wordX[i - 1] = wordX[5] = 'f';
wordY[j - 1] = wordY[1] = 'c';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |
|   **6**   |   0   |   1   |   2   |   -   |   -   |   -   |   -   |

#### i = 6, j = 3

```javascript
wordX[i - 1] = wordX[5] = 'f';
wordY[j - 1] = wordY[1] = 'b';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |
|   **6**   |   0   |   1   |   2   |   2   |   -   |   -   |   -   |

#### i = 6, j = 4

```javascript
wordX[i - 1] = wordX[5] = 'f';
wordY[j - 1] = wordY[1] = 'a';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |
|   **6**   |   0   |   1   |   2   |   2   |   3   |   -   |   -   |

#### i = 6, j = 5

```javascript
wordX[i - 1] = wordX[5] = 'f';
wordY[j - 1] = wordY[1] = 'e';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |
|   **6**   |   0   |   1   |   2   |   2   |   3   |   3   |   -   |

#### i = 6, j = 6

```javascript
wordX[i - 1] = wordX[5] = 'f';
wordY[j - 1] = wordY[1] = 'e';
```

| **i \ j** | **0** | **1** | **2** | **3** | **4** | **5** | **6** |
| :-------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   **0**   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   **1**   |   0   |   1   |   1   |   1   |   1   |   1   |   1   |
|   **2**   |   0   |   1   |   1   |   2   |   2   |   2   |   2   |
|   **3**   |   0   |   1   |   2   |   2   |   2   |   2   |   2   |
|   **4**   |   0   |   1   |   2   |   2   |   3   |   3   |   3   |
|   **5**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |
|   **6**   |   0   |   1   |   2   |   2   |   3   |   3   |   4   |

</p>
</details>

</p>
</details>

<details><summary><p>Matrix Chain Multiplication</p></summary>
<p>

### Matrix Chain Multiplication

The problem consists of finding the best way (order) of multiplying a set of matrices.
To multily two matrices, A being a matrix m by n, and B a matrix n by p. The result is matrix C, n by p. As multiplication is associative, we can muliply matrices in any order (Consider A*B*C\*D).

- (A(B(CD)))
- ((AB)(CD))
- (((AB)C)D)
- ((A(BC))D)
- (A((BC))D)

</p>
</details>
