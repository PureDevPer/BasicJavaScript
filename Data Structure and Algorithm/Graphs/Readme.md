# Graph

- A `graph` is a set of **nodes** (or **vertices**) connected by **edges**.
- Vertices connected by an edge are called **adjacent vertices**.
- A **degree** of a vertex consists of the number of adjacent vertices.
- A **path** is a sequence of consecutive vertices
- Graphs can be **undirected** (where edges do not have a direction) or **directed (digraph)**, where edges have a direction
- Graphs can be **unweighted** or **weighted**

## The adjacency matrix

- Each node is associated with an integer, which is the array index
- We will represent the connectivity between vertices using a two-dimensional array, as `array[i][j] === 1` if there is an edge from the node with index `i` to the node with index `j` or as `array[i][j]===0`

## The adjacency list

- We can use a dynamic data structure to represent graphs called an **adjacency list**. This consists of a list of adjacent vertices for every vertex of the graph
- There are a few different ways we can represent this data structure. To represent the list of adjacent vertices, we can use a list (array), a linked list, or even a hash map or dictionary.

## The incidence matrix

- In an incidence matrix, each row of the matrix represents a vertex, and each column represents an edge
- We will represent the connectivity between two objects using a two-dimensional array, as `array[v][e] === 1` if the vertex `v` is an incident upon edge `e` or as `array[v][e]===0`

## Graph traversals

### Breadth-First Search (BFS)

By storing the vertices in a queue, the oldest unexplored vertices are explored first

1. Create a queue Q
2. Mark v as discovered and `enqueue` v into Q
3. While Q is not empty, peform the following steps:
   1. `dequeue` u from Q
   2. Mark u as discovered
   3. `enqueue` all the unvisited neighbors `w` of `u`
   4. Mark `u` as explored

### Depth-First Search (DFS)

By storing the vertices in a stack, the vertices are explored along a path, visiting a new adjacent vertex if there is one available

1. Mark v as discoveered
2. For all unvisited neighbors w of v, visit vertex w
3. Mark v as explored
