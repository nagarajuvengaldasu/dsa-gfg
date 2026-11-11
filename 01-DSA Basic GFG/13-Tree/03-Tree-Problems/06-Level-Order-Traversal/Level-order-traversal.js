// Node class: Represents a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the node's value
    this.left = null; // Pointer to left child
    this.right = null; // Pointer to right child
  }
}

// Queue class: Custom implementation of a queue data structure
// Used for level-order traversal (BFS) to process nodes level by level
class Queue {
  constructor() {
    this.arr = []; // Array to store queue elements
    this.front = 0; // Index of the front element (where we dequeue from)
    this.rear = 0; // Index of the rear element (where we enqueue to)
  }

  // Step: Add an element to the rear of the queue
  enqueue(item) {
    this.arr[this.rear] = item; // Place element at rear position
    this.rear++; // Move rear pointer forward
  }

  // Step: Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) return null; // Return null if queue is empty
    let ele = this.arr[this.front]; // Get front element
    this.front++; // Move front pointer forward
    return ele; // Return the dequeued element
  }

  // Step: Check if queue is empty
  isEmpty() {
    return this.front === this.rear; // Queue is empty when front equals rear
  }

  // Step: Get the current size of the queue
  size() {
    return this.rear - this.front; // Size is the difference between rear and front
  }
}

// Level Order Traversal (BFS) - Returns array of arrays, each sub-array represents a level
// This function traverses the tree level by level and groups nodes by level
function levelOrderTraversal(root) {
  // Step 1: Initialize result array to store levels
  // Each element in result will be an array containing nodes at that level
  let result = [];

  // Step 2: Initialize a queue for level-order traversal
  // Queue will help us process nodes level by level (breadth-first)
  let q = new Queue();

  // Step 3: Add root node to the queue to start traversal
  q.enqueue(root); // Queue: [root(9)]

  // Step 4: Process each level of the tree
  // Continue until queue is empty (all nodes processed)
  while (!q.isEmpty()) {
    // Step 4.1: Initialize array to store nodes at current level
    // This array will hold all node values at the current level
    let level = [];

    // Step 4.2: Get the number of nodes at current level
    // This count helps us process exactly one level at a time
    // By getting size before processing, we know how many nodes belong to current level
    let count = q.size(); // Example: First iteration, count = 1 (only root)

    // Step 4.3: Process all nodes at the current level
    // Loop through all nodes that are at the current level
    for (let i = 0; i < count; i++) {
      // Step 4.3.1: Remove a node from the front of queue
      // This is the next node to process at current level
      let curr = q.dequeue(); // Get the next node to process

      // Step 4.3.2: Add current node's data to the level array
      // This collects all node values at the current level
      level.push(curr.data); // Add node value to current level array

      // Step 4.3.3: Add left child to queue if it exists
      // This prepares nodes for the next level
      // Note: These children will be processed in the next iteration
      if (curr.left !== null) {
        q.enqueue(curr.left); // Add left child to queue for next level
      }

      // Step 4.3.4: Add right child to queue if it exists
      // This prepares nodes for the next level
      // Note: These children will be processed in the next iteration
      if (curr.right !== null) {
        q.enqueue(curr.right); // Add right child to queue for next level
      }
    }

    // Step 4.4: After processing all nodes in current level, add level array to result
    // This groups all nodes at the same level together
    result.push(level); // Add current level array to result
  }

  // Step 5: Return the result array containing all levels
  // Result format: [[level0], [level1], [level2], ...]
  return result;
}

// Step 6: Create a sample binary tree
// Tree structure:
//           9
//         /   \
//       12     3
//      / \    / \
//    42  95 46  79
let root = new Node(9);
root.left = new Node(12);
root.right = new Node(3);
root.left.left = new Node(42);
root.left.right = new Node(95);
root.right.left = new Node(46);
root.right.right = new Node(79);

// Step 7: Execute level order traversal and print result
// Expected output: [[9], [12, 3], [42, 95, 46, 79]]

// Detailed execution trace for the tree above:
//
// Initial state: Queue = [9], result = []
//
// Iteration 1 (Level 0):
//   - level = [], count = 1 (only root in queue)
//   - Loop iteration 1:
//     * Dequeue: curr = 9, Queue = []
//     * level.push(9): level = [9]
//     * Enqueue left child 12: Queue = [12]
//     * Enqueue right child 3: Queue = [12, 3]
//   - result.push([9]): result = [[9]]
//
// Iteration 2 (Level 1):
//   - level = [], count = 2 (two nodes in queue: 12, 3)
//   - Loop iteration 1:
//     * Dequeue: curr = 12, Queue = [3]
//     * level.push(12): level = [12]
//     * Enqueue left child 42: Queue = [3, 42]
//     * Enqueue right child 95: Queue = [3, 42, 95]
//   - Loop iteration 2:
//     * Dequeue: curr = 3, Queue = [42, 95]
//     * level.push(3): level = [12, 3]
//     * Enqueue left child 46: Queue = [42, 95, 46]
//     * Enqueue right child 79: Queue = [42, 95, 46, 79]
//   - result.push([12, 3]): result = [[9], [12, 3]]
//
// Iteration 3 (Level 2):
//   - level = [], count = 4 (four nodes in queue: 42, 95, 46, 79)
//   - Loop iteration 1:
//     * Dequeue: curr = 42, Queue = [95, 46, 79]
//     * level.push(42): level = [42]
//     * No children, skip
//   - Loop iteration 2:
//     * Dequeue: curr = 95, Queue = [46, 79]
//     * level.push(95): level = [42, 95]
//     * No children, skip
//   - Loop iteration 3:
//     * Dequeue: curr = 46, Queue = [79]
//     * level.push(46): level = [42, 95, 46]
//     * No children, skip
//   - Loop iteration 4:
//     * Dequeue: curr = 79, Queue = []
//     * level.push(79): level = [42, 95, 46, 79]
//     * No children, skip
//   - result.push([42, 95, 46, 79]): result = [[9], [12, 3], [42, 95, 46, 79]]
//
// Queue is now empty, loop exits
// Final result: [[9], [12, 3], [42, 95, 46, 79]]

console.log(levelOrderTraversal(root));
