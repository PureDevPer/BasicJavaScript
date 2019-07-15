const BalanceFactor = {
	UNBALANCED_RIGHT: 1,
	SLIGHTLY_UNBALANCED_RIGHT: 2,
	BALANCED: 3,
	SLIGHTLY_UNBALANCED_LEFT: 4,
	UNBALANCED_LEFT: 5
};

const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
	EQUALS: 0
};

const defaultCompare = (a, b) => {
	if (a === b) {
		return Compare.EQUALS;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class AVLTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn;
		this.root = null;
	}

	getNodeHeight(Node) {
		if (node == null) {
			return -1;
		}
		return (
			Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
			1
		);
	}

	getBalanceFactor(node) {
		const heightDifference =
			this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
		switch (heightDifference) {
			case -2:
				return BalanceFactor.UNBALANCED_RIGHT;
			case -1:
				return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
			case 1:
				return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
			case 2:
				return BalanceFactor.UNBALANCED_LEFT;
			default:
				return BalanceFactor.BALANCED;
		}
	}

	/**
	 * Left left case: rotate right
	 *
	 *       b                           a
	 *      / \                         / \
	 *     a   e -> rotationLL(b) ->   c   b
	 *    / \                             / \
	 *   c   d                           d   e
	 *
	 * @param node Node<T>
	 */
	rotationLL(node) {
		const tmp = node.left;
		node.left = tmp.right;
		tmp.right = node;
		return tmp;
	}

	/**
	 * Right right case: rotate left
	 *
	 *     a                              b
	 *    / \                            / \
	 *   c   b   -> rotationRR(a) ->    a   e
	 *      / \                        / \
	 *     d   e                      c   d
	 *
	 * @param node Node<T>
	 */
	rotationRR(node) {
		const tmp = node.right;
		node.right = tmp.left;
		tmp.left = node;
		return tmp;
	}

	/**
	 * Left right case: rotate left then right
	 * @param node Node<T>
	 */
	rotationLR(node) {
		node.left = this.rotationRR(node.left);
		return this.rotationLL(node);
	}

	/**
	 * Right left case: rotate right then left
	 * @param node Node<T>
	 */
	rotationRL(node) {
		node.right = this.rotationLL(node.right);
		return this.rotationRR(node);
	}

	insert(key) {
		this.root = this.insertNode(this.root, key);
	}

	insertNode(node, key) {
		// insert node as in BST tree
		if (node == null) {
			return new Node(key);
		} else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			node.left = this.insertNode(node.left, key);
		} else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
			node.right = this.insertNode(node.right, key);
		} else {
			return node; // duplicated key
		}

		// balance the tree if needed
		const balanceFactor = this.getBalanceFactor(node);
		if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
			if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
				node = this.rotationLL(node);
			} else {
				return this.rotationLR(node);
			}
		}
		if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
			if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
				node = this.rotationRR(node);
			} else {
				return this.rotationRL(node);
			}
		}
		return node;
	}

	remove(key) {
		this.root = this.removeNode(this.root, key);
	}

	removeNodeFromBST(node, key) {
		if (node == null) {
			return null;
		}

		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			// case 1 - A leaf node that doesn't have a left or right child
			if (node.left == null && node.right == null) {
				node = null;
				return node;
			}

			// case 2
			if (node.left == null) {
				node = node.right;
				return node;
			} else if (node.right == null) {
				node = node.left;
				return node;
			}

			// case 3 - Removing a node with two children

			// Once we find the node we want to remove,
			// we need to find the min node from its right-hand side edge subtree
			const aux = this.minNode(node.right);
			// Update the value of the node with the key of the minimum node from its right-hand side subtree
			// With this action, we are replacing the key of the node, which means it was removed
			node.key = aux.key;
			// Remove the minimum node from the right subtree since we moved it to the place of the removed node
			node.right = this.removeNode(node.right, aux.key);
			// Return the updated node reference to its parent
			return node;
		}
	}
	removeNode(node, key) {
		node = this.removeNodeFromBST(node, key);
		if (node == null) {
			return node; // null, no need to balance
		}

		// verify if tree is balanced
		const balanceFactor = this.getBalanceFactor(node);
		if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
			const balanceFactorLeft = this.getBalanceFactor(node.left);
			if (
				balanceFactorLeft === BalanceFactor.BALANCED ||
				balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
			) {
				return this.rotationLL(node);
			}
			if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
				return this.rotationLR(node.left);
			}
		}
		if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
			const balanceFactorRight = this.getBalanceFactor(node.right);
			if (
				balanceFactorRight === BalanceFactor.BALANCED ||
				balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
			) {
				return this.rotationRR(node);
			}
			if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
				return this.rotationRL(node.right);
			}
		}
		return node;
	}
}
