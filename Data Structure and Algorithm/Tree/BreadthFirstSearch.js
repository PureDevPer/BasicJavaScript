class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class BreadthFirstSearch {
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

	BFS(rootNode) {
		if (rootNode === null) return null;

		const queue = [];
		queue.push(rootNode.root);
		const result = [];

		while (queue.length > 0) {
			const size = queue.length;
			//const temp = [];

			for (let i = 0; i < size; i++) {
				const node = queue.shift();

				//temp.push(node.key);
				result.push(node.key);
				if (node.left !== null) queue.push(node.left);
				if (node.right !== null) queue.push(node.right);
			}
			//result.push(temp);
		}
		return result;
	}
}

const tree = new BreadthFirstSearch();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);

const tree1 = new BreadthFirstSearch();

console.log(tree1.BFS(tree)); // [11, 7, 15, 5, 9, 3]

//        11
//       /  \
//      7    15
//     / \     \
//    5   9
//   /
//  3
