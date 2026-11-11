// Binary tree node class
class node {
  constructor(data) {
    this.data = data; // Value stored in the node
    this.left = null; // Pointer to left child
    this.right = null; // Pointer to right child
  }
}
// Queue class for BFS traversal
class Queue {
  constructor() {
    this.arr = []; // Array to store queue elements
    this.front = 0; // Index of front element (where we dequeue from)
    this.rear = 0; // Index where next element will be enqueued
  }

  // Add element to the rear of queue
  enqueue(x) {
    this.arr[this.rear] = x;
    this.rear++;
  }

  // Remove and return element from front of queue
  dequeue() {
    if (this.isEmpty()) return null;
    let ele = this.arr[this.front];
    this.front++;
    return ele;
  }

  // Check if queue is empty
  isEmpty() {
    return this.front === this.rear;
  }

  // Get number of elements in queue
  size() {
    return this.rear - this.front;
  }

  // Peek at front element without removing it
  peek() {
    if (this.isEmpty()) return null;
    return this.arr[this.front];
  }
}

function zigzagtraversal(root) {
  // Step 1: Initialize result array to store final zig-zag traversal
  let result = [];

  // Step 2: Create a queue for BFS (Breadth-First Search) traversal
  let q = new Queue();

  // Step 3: Enqueue the root node to start traversal from level 1
  q.enqueue(root);

  // Step 4: Track which level we're currently processing (0-indexed)
  // levelNumber 0 = Level 1 (left to right)
  // levelNumber 1 = Level 2 (right to left)
  // levelNumber 2 = Level 3 (left to right), and so on...
  let levelNumber = 0;

  // Step 5: Continue processing until queue is empty (all nodes visited)
  while (!q.isEmpty()) {
    // Step 6: Get the number of nodes at current level
    // This helps us process all nodes of one level before moving to next
    let size = q.size();

    // Step 7: Create temporary array to store nodes of current level
    let level = [];

    // Step 8: Process all nodes at the current level
    for (let i = 0; i < size; i++) {
      // Step 8a: Dequeue a node from the front of queue
      let node = q.dequeue();

      // Step 8b: Add node's data to current level array
      level.push(node.data);

      // Step 8c: Add left child to queue (if exists) for next level processing
      if (node.left !== null) {
        q.enqueue(node.left);
      }

      // Step 8d: Add right child to queue (if exists) for next level processing
      if (node.right !== null) {
        q.enqueue(node.right);
      }
    }
    // After this loop, 'level' contains all nodes of current level in left-to-right order
    // and queue contains all children of these nodes (for next level)

    // Step 9: Apply zig-zag pattern based on level number
    // For odd-indexed levels (1, 3, 5...): keep left-to-right order (no reverse)
    // For even-indexed levels (2, 4, 6...): reverse to get right-to-left order
    if (levelNumber % 2 === 1) {
      // Level 2, 4, 6... need to be reversed (right to left)
      level.reverse();
    }
    // Note: levelNumber 0 (Level 1) = left to right (no reverse)
    //       levelNumber 1 (Level 2) = right to left (reversed)
    //       levelNumber 2 (Level 3) = left to right (no reverse)

    // Step 10: Add all nodes from current level to final result array
    // Using spread operator to add individual elements, not the array itself
    result.push(...level);

    // Step 11: Move to next level by incrementing levelNumber
    levelNumber++;
  }

  // Step 12: Return the final zig-zag traversal result
  return result;
}
// Test case: Create a binary tree
// Tree structure:
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
let root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
root.right.left = new node(6);
root.right.right = new node(7);

// Expected output: [1, 3, 2, 4, 5, 6, 7]
// Level 1 (left→right): [1]
// Level 2 (right→left): [3, 2]
// Level 3 (left→right): [4, 5, 6, 7]
console.log(zigzagtraversal(root));
