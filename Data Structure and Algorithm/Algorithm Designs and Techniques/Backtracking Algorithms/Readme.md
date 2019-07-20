# Backtracking algorithms

- `Backtracking` is a strategy used to find and build a solution incrementally.
- We start with a possible move and we try to solve the problem with the selected move. If it doesn't work, we backtract and then we select another move and so on until we have the problem solved
- Due to this behavior, backtraacking algorithms will try all possible moves (or a few moves if a solution is found sooner) to solve a problem

  - The Knight's tour problem
  - N Queen problem
  - Rat in a maze
  - Sudoku Solver

## Rat in a maze

Suppose we have a matrix with size N\*N and each position of the matrix is a block. The position (or block) can be free (value 1) or it can be blocked (value 0).
The matrix is the maze and the goal is for the `rat` to start at position [0][0] and go to position [n-1][n-1] (destination). The rat can move into two directions: vertically or horizontally in any position that is not blocked.

## Sudoku

- The objective is to fill a 9x9 matrix with the digits 1 to 9 in order that each row and each column is composed with all the nine digits.
- The matrix also contains smaller boxes (3x3 matrix) that also need to contain all the nine digits
- The puzzle provides an initial matrix partially filled
