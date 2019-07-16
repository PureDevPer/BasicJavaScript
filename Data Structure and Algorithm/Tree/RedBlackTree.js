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

class RedBlackNode extends Node {
	constructor(key) {
		super(key);
		this.key = key;
		this.color = Colors.RED;
		this.parent = null;
	}

	isRed() {
		return this.color === Colors.RED;
	}
}

class RedBlackTree {
	constructor() {
		this.compareFn = compareFn;
		this.root = null;
	}

	insert(key) {
		if (this.root == null) {
			this.root = new RedBlackNode(key);
			this.root.color = Colors.BLACK;
		} else {
			const newNode = this.insertNode(this.root, key);
			this.fixTreeProperties(newNode);
		}
	}

	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new RedBlackNode(key);
				node.left.parent = node;
				return node.left;
			} else {
				this.insertNode(node.left, key);
			}
		} else {
			if (node.right == null) {
				node.right = new RedBlackNode(key);
				node.right.parent = node;
				return node.right;
			} else {
				this.insertNode(node.right, key);
			}
		}
	}

	fixTreeProperties(node) {
		while (
			node &&
			node.parent &&
			node.parent.color.isRed() &&
			node.color !== Colors.BLACK
		) {
			let parent = node.parent;
			const grandParent = parent.parent;

			// case A: parent is left child
			if (grandParent && grandParent.left === parent) {
				const uncle = grandParent.right;

				// case 1A: uncle of node is also red - only recoloring
				if (uncle && uncle.color === Colors.RED) {
					grandParent.color = Colors.RED;
					parent.color = Colors.BLACK;
					uncle.color = Colors.BLACK;
					// Change the color of the grandparent, parent, and uncle,
					// and Change the reference of the current node to the gradParent
					node = grandParent;
				} else {
					// case 2A: node is right child - left rotate
					if (node === parent.right) {
						// A right-right rotation
						this.rotationRR(parent);
						// Update the references for the node
						node = parent;
						parent = node.parent;
					}

					// case 3A: node is left child - right rotate

					// After the first rotation,
					// we will rotate it again using the gradparent as the source node
					this.rotationLL(grandParent);
					// Update the colors of the parent and grandparent during the rotation
					parent.color = Colors.BLACK;
					grandParent.color = Colors.RED;
					// Update the reference to the current node
					node = parent;
				}
			} else {
				// case B: parent is right child
				const uncle = grandParent.left;

				// case 1B: uncle is red - only recoloring
				if (uncle && uncle.color === Colors.RED) {
					grandParent.color = Colors.RED;
					parent.color = Colors.BLACK;
					uncle.color = Colors.BLACK;
					node = grandParent;
				} else {
					// case 2B: node is left child - right rotate
					if (node === parent.left) {
						this.rotationLL(parent);
						node = parent;
						parent = node.parent;
					}

					// case 3B: node is right child - left rotate
					this.rotationRR(grandParent);
					parent.color = Colors.BLACK;
					grandParent.color = Colors.RED;
					node = parent;
				}
			}
		}
		// To make sure the root color is always black,
		// we assign the color to the root at the end of the code
		this.root.color = Colors.BLACK;
	}

	rotationLL(node) {
		const tmp = node.left;
		node.left = tmp.right;
		if (tmp.right && temp.right.key) {
			tmp.right.parent = node;
		}
		tmp.parent = node.parent;
		if (!node.parent) {
			this.root = tp;
		} else {
			if (node === node.parent.left) {
				node.parent.left = tmp;
			} else {
				node.parent.right = tmp;
			}
		}
		tmp.right = node;
		node.parent = tmp;
	}

	rotationRR(node) {
		const tmp = node.right;
		node.right = tmp.left;
		if (tmp.left && tmp.left.key) {
			tmp.left.parent = node;
		}
		tmp.parent = node.parent;
		if (!node.parent) {
			this.root = tmp;
		} else {
			if (node === node.parent.left) {
				node.parent.left = tmp;
			} else {
				node.parent.right = tmp;
			}
		}
		tmp.left = node;
		node.parent = tmp;
	}
}
