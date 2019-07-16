# Self-balancing trees

- BST has a problem: depending on how many nodes you add, one of the edges of the tree can be veery deep, meaning a brach of the tree can have a high level and another branch can have a low level. This can cause performance issues when adding, removing, and searching for a node on a particular edge of the tree.

## AVL tree (Adelson-Velskii and Landi's tree)

- The `AVL tree` is a self-balancing BST, meaning the tree tries to self-balance whenever a node is added to it or removed from it.
- The height of both the left and right subtrees of any node differ by 1 at most. This means the tree will try to become a complete tree whenever possible while adding or removing a node
- In an `AVL tree`, whenever we insert or remove a node from the tree, we will need to calculate the difference beteween the height of the right-hand side subree (`hr`) and the left-hand side subtree (`hl`). The result of `hr - hl` needs to be `0`, `1`, or `-1`.
- If the result is different from these values, it means the tree needs to be balanced. This concept is called the `balanced factor`.
- If the insertions and deletions are less frequent (we are interest in frequent search operations), then the `AVL tree` is preferred.

### Balancing opeartions - AVL rotations

- After inserting or removing nodes from the AVL tree, we will calculate the height of the nodes and will verify whether the tree needs to be balanced.
- There are two balancing processes that can be used: simple rotation or double rotation.
  - **Left-Left (LL)**: This is a single rotation to the right
  - **Right-Right (RR)**: This is a single rotation to the left
  - **Left-Right (LR)**: This is a double rotation to the right (rotate left then right)
  - **Right-Left (RL)**: This is a double rotation to the left (rotate right then left)

## Red-Black tree

- The Red-Black tree is a self-balancing binary search tree.
- If we need a self-balancing tree that involves many frequent insertions or deletions, then the `Red-Black tree` is preferred.

### Rules - Red-Black tree

1. As the name of the tree sugges, each node is either red or black.
2. The root of the tree is black.
3. All of the leaves are black (nodes represented with the `null` reference).
4. If a node is red, then both of its children are black.
5. There can't be two adjacent red nodes. A red node can't have a red parent or child.
6. Every path from a given node to any of its descendants (`null` leaves) contains the same number of black nodes.

- **Left-Left (LL)**: The parent is the left child of the grandparent, and the node is the left child of the parent (case 3A)
- **Right-Right (RR)**: The parent is the left child of the grandparent, and the node is the right child of the parent (case 2A)
- **Left-Right (LR)**: The parent is the right child of the grandparent, and the node is the right child of the parent (case 3B)
- **Right-Left (RL)**: The parent is the right child of the grandparent, and the node is the left child of the parent (case 2B)
