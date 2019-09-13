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

	DFS(rootNode) {
		if (rootNode === null) return null;

		let stack = [];
		let result = [];
		stack.push(rootNode.root);

		while (stack.length > 0) {
			let node = stack.pop();
			result.push(node.key);
			if (node.left !== null) stack.push(node.left);
			if (node.right !== null) stack.push(node.right);
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

console.log(tree1.DFS(tree)); // [11, 15, 7, 9, 5, 3]

//        11
//       /  \
//      7    15
//     / \     \
//    5   9
//   /
//  3
