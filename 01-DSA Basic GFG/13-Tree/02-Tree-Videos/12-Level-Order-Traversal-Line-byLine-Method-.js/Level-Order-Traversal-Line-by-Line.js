/**
 * LEVEL ORDER TRAVERSAL LINE BY LINE (Count Method)
 *
 * QUESTION: Print nodes level by level, each level on a new line.
 * Approach: Use count = q.size() before processing to process one level at a time.
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
class Queue {
  constructor() {
    this.arr = []; // Array to store queue elements
    this.front = 0; // Index of the front element (where we dequeue from)
    this.rear = 0; // Index of the rear element (where we enqueue to)
  }

  // Step: Add an element to the rear of the queue
  enqueue(x) {
    this.arr[this.rear] = x; // Place element at rear position
    this.rear++; // Move rear pointer forward
  }

  // Step: Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null; // Return null if queue is empty
    }
    let element = this.arr[this.front]; // Get front element
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

// Level Order Traversal (BFS) - Line by Line
// This function traverses the tree level by level, printing each level on a new line
function levelOrderTraversal(root) {
  let ans = ""; // String to store the result

  // Step 1: Handle edge case - if tree is empty, return empty string
  if (root === null) {
    return ans;
  }

  // Step 2: Initialize a queue and add the root node
  // Queue will help us process nodes level by level
  let q = new Queue();
  q.enqueue(root); // Queue: [root(1)]

  // Step 3: Process each level of the tree
  // Continue until queue is empty (all nodes processed)
  while (!q.isEmpty()) {
    // Step 3.1: Get the number of nodes at current level
    // This count helps us process exactly one level at a time
    let count = q.size(); // Example: First iteration, count = 1 (only root)

    // Step 3.2: Process all nodes at the current level
    // Loop through all nodes in current level
    for (let i = 0; i < count; i++) {
      // Step 3.2.1: Remove a node from the front of queue
      let curr = q.dequeue(); // Get the next node to process

      // Step 3.2.2: Add current node's data to result string
      ans += curr.data + " "; // Append node value to result

      // Step 3.2.3: Add left child to queue if it exists
      // This prepares nodes for the next level
      if (curr.left !== null) {
        q.enqueue(curr.left); // Add left child to queue
      }

      // Step 3.2.4: Add right child to queue if it exists
      // This prepares nodes for the next level
      if (curr.right !== null) {
        q.enqueue(curr.right); // Add right child to queue
      }
    }

    // Step 3.3: After processing all nodes in current level, add newline
    // This separates each level in the output
    ans += "\n";

    // Example execution flow for tree:       1
    //                                       /   \
    //                                      2     3
    //                                     / \   / \
    //                                    4   5 6   7
    //
    // Iteration 1: count = 1
    //   - Process node 1: ans = "1 ", queue = [2, 3]
    //   - Add newline: ans = "1 \n"
    //
    // Iteration 2: count = 2
    //   - Process node 2: ans = "1 \n2 ", queue = [3, 4, 5]
    //   - Process node 3: ans = "1 \n2 3 ", queue = [4, 5, 6, 7]
    //   - Add newline: ans = "1 \n2 3 \n"
    //
    // Iteration 3: count = 4
    //   - Process node 4: ans = "1 \n2 3 \n4 ", queue = [5, 6, 7]
    //   - Process node 5: ans = "1 \n2 3 \n4 5 ", queue = [6, 7]
    //   - Process node 6: ans = "1 \n2 3 \n4 5 6 ", queue = [7]
    //   - Process node 7: ans = "1 \n2 3 \n4 5 6 7 ", queue = []
    //   - Add newline: ans = "1 \n2 3 \n4 5 6 7 \n"
    //
    // Queue is now empty, loop exits
  }

  // Step 4: Return the result string with all levels separated by newlines
  return ans;
}

// Step 5: Create a sample binary tree
// Tree structure:
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Step 6: Execute level order traversal and print result
// Expected output:
// 1
// 2 3
// 4 5 6 7
console.log(levelOrderTraversal(root));
