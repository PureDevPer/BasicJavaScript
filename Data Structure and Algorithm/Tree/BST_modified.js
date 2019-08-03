class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(key) {
		if (this.root === null) {
			this.root = new Node(key);
		} else {
			this.insertNode(this.root, key);
		}
	}

	insertNode(node, key) {
		if (key < node.key) {
			if (node.left === null) node.left = new Node(key);
			else this.insertNode(node.left, key);
		} else {
			if (node.right === null) node.right = new Node(key);
			else this.insertNode(node.right, key);
		}
	}

	// @param callback
	// Callback can be used to perform the action we want to execute when the node is visited
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback);
	}

	inOrderTraverseNode(node, callback) {
		if (node !== null) {
			this.inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.inOrderTraverseNode(node.right, callback);
		}
	}

	preOrderTraverse(callback) {
		this.preOrderTraverseNode(this.root, callback);
	}

	preOrderTraverseNode(node, callback) {
		if (node !== null) {
			callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
		}
	}

	postOrderTraverse(callback) {
		this.postOrderTraverseNode(this.root, callback);
	}

	postOrderTraverseNode(node, callback) {
		if (node !== null) {
			this.postOrderTraverseNode(node.left, callback);
			this.postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	min() {
		return this.minNode(this.root);
	}

	minNode(node) {
		let curr = node;
		while (curr !== null && curr.left !== null) curr = curr.left;

		return curr;
	}

	max() {
		return this.maxNode(this.root);
	}

	maxNode(node) {
		let curr = node;
		while (curr !== null && curr.right !== null) curr = curr.right;

		return curr;
	}

	search(key) {
		return this.searchNode(this.root, key);
	}

	searchNode(node, key) {
		if (node === null) return false;

		if (key < node.key) return this.searchNode(node.left, key);
		else if (key > node.key) return this.searchNode(node.right, key);
		else return true;
	}

	remove(key) {
		this.root = this.removeNode(this.root, key);
	}

	removeNode(node, key) {
		if (node === null) return null;

		if (key < node.key) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			// case 1 - A leaf node that doesn't have a left or right child
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}

			// case 2
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
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

	getRoot() {
		return this.root;
	}
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

//tree.inOrderTraverse(val => console.log(val));
//tree.preOrderTraverse(val=>console.log(val));
//tree.postOrderTraverse(val=>console.log(val));

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

console.log(tree.min());
console.log(tree.max());

tree.remove(3);
console.log(tree.min());
