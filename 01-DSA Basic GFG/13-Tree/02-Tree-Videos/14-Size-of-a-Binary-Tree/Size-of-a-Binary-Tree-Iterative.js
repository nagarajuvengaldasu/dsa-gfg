/**
 * SIZE OF BINARY TREE (Iterative - BFS)
 *
 * QUESTION: Find the number of nodes using level-order traversal.
 * Use queue: count each node as we dequeue it.
 */
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
    this.items = []; // Array to store queue elements
    this.front = 0; // Index of the front element (where we dequeue from)
    this.rear = 0; // Index of the rear element (where we enqueue to)
  }

  // Step: Add an element to the rear of the queue
  enqueue(item) {
    this.items[this.rear] = item; // Place element at rear position
    this.rear++; // Move rear pointer forward
  }

  // Step: Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null; // Return null if queue is empty
    }
    let element = this.items[this.front]; // Get front element
    this.front++; // Move front pointer forward
    return element; // Return the dequeued element
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

// Iterative function to calculate the size (number of nodes) of a binary tree
// Uses Level-Order Traversal (BFS) approach
// Algorithm: Visit each node once, increment counter, and add its children to queue
function sizeOfBinaryTree(root) {
  // Step 1: Initialize a queue for level-order traversal
  // Queue will help us process nodes level by level (breadth-first)
  let q = new Queue();

  // Step 2: Add root node to the queue to start traversal
  // If root is null, we'll handle it in the while loop
  q.enqueue(root); // Queue: [root(9)]

  // Step 3: Initialize size counter to 0
  // This will count each node as we process it
  let size = 0;

  // Step 4: Process all nodes in the tree using BFS
  // Continue until queue is empty (all nodes processed)
  while (!q.isEmpty()) {
    // Step 4.1: Remove a node from the front of the queue
    // This is the next node to process
    let curr = q.dequeue(); // Get the next node from queue

    // Step 4.2: Increment size counter
    // Each node we process counts as 1
    size++; // Count this node

    // Step 4.3: Add left child to queue if it exists
    // This ensures we'll process it later (breadth-first approach)
    if (curr.left !== null) {
      q.enqueue(curr.left); // Add left child to queue for later processing
    }

    // Step 4.4: Add right child to queue if it exists
    // This ensures we'll process it later (breadth-first approach)
    if (curr.right !== null) {
      q.enqueue(curr.right); // Add right child to queue for later processing
    }
  }

  // Step 5: Return the total size (number of nodes)
  // After processing all nodes, size contains the total count
  return size;
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

// Step 7: Execute the function and print the result
// Expected output: Size of Binary Tree is: 7

// Detailed execution trace for the tree above:
//
// Initial state: Queue = [9], size = 0
//
// Iteration 1:
//   - Dequeue: curr = 9, Queue = []
//   - size++: size = 1
//   - Enqueue left child 12: Queue = [12]
//   - Enqueue right child 3: Queue = [12, 3]
//
// Iteration 2:
//   - Dequeue: curr = 12, Queue = [3]
//   - size++: size = 2
//   - Enqueue left child 42: Queue = [3, 42]
//   - Enqueue right child 95: Queue = [3, 42, 95]
//
// Iteration 3:
//   - Dequeue: curr = 3, Queue = [42, 95]
//   - size++: size = 3
//   - Enqueue left child 46: Queue = [42, 95, 46]
//   - Enqueue right child 79: Queue = [42, 95, 46, 79]
//
// Iteration 4:
//   - Dequeue: curr = 42, Queue = [95, 46, 79]
//   - size++: size = 4
//   - No left child (null), skip
//   - No right child (null), skip
//
// Iteration 5:
//   - Dequeue: curr = 95, Queue = [46, 79]
//   - size++: size = 5
//   - No left child (null), skip
//   - No right child (null), skip
//
// Iteration 6:
//   - Dequeue: curr = 46, Queue = [79]
//   - size++: size = 6
//   - No left child (null), skip
//   - No right child (null), skip
//
// Iteration 7:
//   - Dequeue: curr = 79, Queue = []
//   - size++: size = 7
//   - No left child (null), skip
//   - No right child (null), skip
//
// Queue is now empty, loop exits
// Final result: size = 7

console.log("Size of Binary Tree is: " + sizeOfBinaryTree(root));
