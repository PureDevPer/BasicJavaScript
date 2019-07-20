# Divide and Conquer

- It breaks the problem into small subproblems that are similar to the original problem.
- It solves the subproblems recursively, and combines the solutions of the subproblems to solve the original problem
  - Merge sort algorithm
  - Quick sort algorithm

1. **Divide** the orignal problem into smaller subproblems (smaller instance of the original problem)
2. **Conquer** the smaller subproblems by solving them with recursive algorithms that return the solution for the subproblems. The base case of the recursive algorithm solves and returns the solution for the smallest subproblem
3. **Combine** the solutions of the subproblems into the solution for the original problem

## Binary Search

- **Divide**: Calculate `mid` and search lower or upper half of the array
- **Conquer**: Search value in the lower or upper half of the array
- **Combine**: Not applicable as we are returning the index directly
