# Heap

- The **heap** data structure is also known as the **binary heap**
- The binary heap is a very famous data structure in computer science, commonly applied in **priority queues** due to its efficiency of quickly extracting the maximum or minimum values
- It is also used by the famous **heap sort** algorithm

## The binary heap

The binary heap is a special binary tree with the following two properties:

- It is a complete binary tree, meaning all levels of the tree have both left and right children (with the execption of the last-level leaves), and the last level has all children as left as possible. This is called as **shape property**
- A binary heap is either a min heap or a max heap. The min heap allows you to quickly extract the minimum value of the tree, and the max heap allows you to quickly extract the maximum value of the tree. All nodes are either greater than or equal to max heap, or less than or equal to min heap, each of its child nodes. This is called **heap property**

## The Heap Sort Algorithm

1. Create a max heap using the array to be sorted as the source
2. After creating the max heap, the largest value will be stored in the first index of the heap. We will replace the first value with the last value of the heap, decreasing the size of the heap by `1`
3. Finally, we `heapify` (sift down) the root of the heap and repeat step 2 until the size of the heap is equal to `1`
