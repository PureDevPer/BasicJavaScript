class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class DepthFirstSearch {
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

	// **************************************
	// Preorder (Recursion, Iteration)
	// **************************************

	// Preorder - Recursion
	preorder(rootNode) {
		if (rootNode === null) return null;
		const result = [];

		// function - preorderTraverse
		const preorderTraverse = node => {
			if (node === null) return null;

			result.push(node.key);
			preorderTraverse(node.left);
			preorderTraverse(node.right);
		};

		preorderTraverse(rootNode.root, result);
		return result;
	}

	// Preorder - Iteration
	preorderIterative(rootNode) {
		if (rootNode === null) return null;

		const result = [];
		const stack = [];
		let curr = rootNode.root;
		while (curr !== null || stack.length > 0) {
			while (curr !== null) {
				// root
				result.push(curr.key);
				stack.push(curr);
				curr = curr.left;
			}

			// left
			curr = stack.pop();

			// right
			curr = curr.right;
		}
		return result;
	}

	// **************************************
	// Inorder (Recursion, Iteration)
	// **************************************

	// Inorder - Recursion
	inorder(rootNode) {
		if (rootNode === null) return null;
		const result = [];

		// function - inorderTraverse
		const inorderTraverse = node => {
			if (node === null) return null;

			inorderTraverse(node.left);
			result.push(node.key);
			inorderTraverse(node.right);
		};

		inorderTraverse(rootNode.root, result);
		return result;
	}

	// Inorder - Iteeration
	inorderIterative(rootNode) {
		if (rootNode === null) return null;

		const result = [];
		let stack = [];
		let curr = rootNode.root;
		while (curr !== null || stack.length > 0) {
			// Left Node
			while (curr !== null) {
				stack.push(curr);
				curr = curr.left;
			}

			// Root
			curr = stack.pop();
			result.push(curr.key);

			// Right
			curr = curr.right;
		}

		return result;
	}

	// **************************************
	// Postorder (Recursion, Iteration)
	// **************************************

	// Postorder - Recursion
	postorder(rootNode) {
		if (rootNode === null) return null;
		const result = [];

		// function - postorderTraverse
		const postorderTraverse = node => {
			if (node === null) return null;

			postorderTraverse(node.left);
			postorderTraverse(node.right);
			result.push(node.key);
		};

		postorderTraverse(rootNode.root, result);
		return result;
	}

	// Postorder - Iteration
	// Reverse of Preorder
	postorderIterative(rootNode) {
		if (rootNode === null) return null;

		const result = [];
		const stack = [];
		let curr = rootNode.root;

		while (curr !== null || stack.length > 0) {
			while (curr !== null) {
				// root
				result.unshift(curr.key); // Add curr.key to result[0]
				stack.push(curr);
				curr = curr.right;
			}

			// right
			curr = stack.pop();

			// left
			curr = curr.left;
		}
		return result;
	}
}

const tree = new DepthFirstSearch();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);

//        11
//       /  \
//      7    15
//     / \     \
//    5   9
//   /
//  3

const tree1 = new DepthFirstSearch();

console.log(tree1.preorder(tree)); // [11, 7, 5, 3, 9, 15]
console.log(tree1.preorderIterative(tree)); // [11, 7, 5, 3, 9, 15]
console.log(tree1.inorder(tree)); // [3, 5, 7, 9, 11, 15]
console.log(tree1.inorderIterative(tree)); // [3, 5, 7, 9, 11, 15]
console.log(tree1.postorder(tree)); // [3, 5, 9, 7, 15, 11]
console.log(tree1.postorderIterative(tree)); // [3, 5, 9, 7, 15, 11]
