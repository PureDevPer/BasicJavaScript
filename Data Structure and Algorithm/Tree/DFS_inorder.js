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

	inorderTraverse(node, result) {
		if (node === null) return null;

		this.inorderTraverse(node.left, result);
		result.push(node.key);
		this.inorderTraverse(node.right, result);
	}

	inorder(rootNode) {
		if (rootNode === null) return null;

		const result = [];
		this.inorderTraverse(rootNode.root, result);
		return result;
	}

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
}

const tree = new DepthFirstSearch();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);

const tree1 = new DepthFirstSearch();

console.log(tree1.inorder(tree)); // [3, 5, 7, 9, 11, 15]
console.log(tree1.inorderIterative(tree)); // [3, 5, 7, 9, 11, 15]

//        11
//       /  \
//      7    15
//     / \     \
//    5   9
//   /
//  3
