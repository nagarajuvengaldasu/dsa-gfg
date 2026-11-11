/**
 * LEVEL ORDER TRAVERSAL (Optimal - Queue)
 *
 * QUESTION: Print nodes level by level using BFS. O(n) time - each node
 * visited once. Uses queue: enqueue root, dequeue, print, enqueue children.
 */
// Step 1: Define the Node class to represent a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the value of the node
    this.left = null; // Pointer to left child (initially null)
    this.right = null; // Pointer to right child (initially null)
  }
}

// Step 2: Define the Queue class for efficient level-order traversal
// Queue follows FIFO (First In First Out) principle
//
// ⚠️ IMPORTANT PERFORMANCE ISSUE:
// The original implementation used shift() which has O(n) complexity!
// JavaScript's Array.shift() removes first element and shifts all remaining elements,
// making each dequeue O(n), resulting in overall O(n²) complexity.
//
// ✅ OPTIMAL SOLUTION: Use two pointers (front/rear) to avoid shifting
// This gives us true O(1) enqueue and dequeue operations
class Queue {
  constructor() {
    this.arr = []; // Array to store queue elements
    this.front = 0; // Front pointer (points to first element)
    this.rear = 0; // Rear pointer (points to next available position)
  }

  // Add element at the rear (end) of queue
  // Time Complexity: O(1) - just stores at rear position
  enqueue(x) {
    this.arr[this.rear] = x; // Store element at rear position
    this.rear++; // Move rear pointer forward
  }

  // Remove and return element from the front (beginning) of queue
  // Time Complexity: O(1) - just increments front pointer, NO shifting!
  dequeue() {
    if (this.isEmpty()) return null; // If empty, return null
    let element = this.arr[this.front]; // Get front element
    this.front++; // Move front pointer forward
    return element;
  }

  // Check if queue is empty
  // Time Complexity: O(1)
  isEmpty() {
    return this.front === this.rear; // Empty when front catches up to rear
  }
}

// ⚠️ ALTERNATIVE: Simple Array-based Queue (Less optimal but simpler)
// If you use push() and shift(), complexity becomes O(n²):
// class Queue {
//   constructor() {
//     this.arr = [];
//   }
//   enqueue(x) {
//     this.arr.push(x);        // O(1)
//   }
//   dequeue() {
//     return this.arr.shift(); // O(n) - SHIFTS ALL ELEMENTS!
//   }
//   isEmpty() {
//     return this.arr.length === 0;
//   }
// }
// This makes overall traversal O(n²) instead of O(n)

// Step 3: Optimal Level Order Traversal using Queue
//
// ⏱️ TIME COMPLEXITY ANALYSIS:
// - We visit each node exactly once: O(n) where n = number of nodes
// - Each enqueue operation: O(1)
// - Each dequeue operation: O(1) (with proper queue implementation)
// - Printing: O(1) per node
// - Overall: O(n) time complexity ✅
//
// 📊 SPACE COMPLEXITY:
// - Queue can hold at most all nodes at the widest level
// - In worst case (complete binary tree), maximum nodes at last level = n/2
// - Overall: O(w) where w = width of tree, or O(n) in worst case
//
// 🔄 COMPARISON WITH NAIVE APPROACH:
// - Naive: O(h × n) where h = height, n = nodes
//   - Calculates height first: O(n)
//   - For each level (h levels), prints all nodes: O(n) per level
//   - Total: O(n) + h × O(n) = O(h × n)
// - Queue-based (optimal): O(n)
//   - Each node visited exactly once
//   - No redundant traversals
//
// ✅ This is the CORRECT and OPTIMAL approach for level-order traversal
// Key idea: Use a queue to process nodes level by level
function levelOrderTraversal(root) {
  // Base case: If tree is empty, return immediately
  if (root === null) {
    return;
  }

  // Step 3a: Create an empty queue to store nodes
  // Queue will help us process nodes level by level
  let q = new Queue(); // Fixed: Changed from 'queue' (lowercase) to 'Queue'

  // Step 3b: Enqueue the root node
  // This starts our traversal from the root (level 0)
  q.enqueue(root);

  // Step 3c: Process all nodes until queue is empty
  // While loop continues until all nodes are processed
  while (!q.isEmpty()) {
    // Step 3d: Dequeue the front node from queue
    // This gets the next node to process (FIFO - First In First Out)
    let curr = q.dequeue();

    // Step 3e: Print the current node's data
    // This prints nodes in level order (left to right, top to bottom)
    console.log(curr.data);

    // Step 3f: Enqueue left child if it exists
    // Adding left child ensures we process it in the next iteration
    // Left child is added first to maintain left-to-right order
    if (curr.left !== null) {
      q.enqueue(curr.left);
    }

    // Step 3g: Enqueue right child if it exists
    // Adding right child after left maintains proper level order
    // Right child will be processed after all nodes at current level
    if (curr.right !== null) {
      q.enqueue(curr.right);
    }
  }
  // When queue is empty, all nodes have been processed and printed
}

// Step 4: Build a sample binary tree
// Tree structure:
//           10 (level 0)
//          /  \
//    (1) 20    30 (1)
//           /  \
//      (2) 40   50 (2)

let root = new Node(10); // Create root node (level 0)
root.left = new Node(20); // Left child of root (level 1)
root.right = new Node(30); // Right child of root (level 1)
root.right.left = new Node(40); // Left child of node(30) (level 2)
root.right.right = new Node(50); // Right child of node(30) (level 2)

// Step 5: Execute Level Order Traversal
// Execution trace for levelOrderTraversal(root):
//
// Initial State:
//   Queue: []
//   Root: 10
//
// Step 1: q.enqueue(10)
//   Queue: [10]
//
// Iteration 1: while(!q.isEmpty()) → Queue has 10
//   curr = q.dequeue() → curr = 10, Queue: []
//   console.log(10) → Output: 10 ✓
//   Check: curr.left = 20, not null → q.enqueue(20)
//     Queue: [20]
//   Check: curr.right = 30, not null → q.enqueue(30)
//     Queue: [20, 30]
//
// Iteration 2: while(!q.isEmpty()) → Queue has [20, 30]
//   curr = q.dequeue() → curr = 20, Queue: [30]
//   console.log(20) → Output: 20 ✓
//   Check: curr.left = null → skip
//   Check: curr.right = null → skip
//     Queue: [30]
//
// Iteration 3: while(!q.isEmpty()) → Queue has [30]
//   curr = q.dequeue() → curr = 30, Queue: []
//   console.log(30) → Output: 30 ✓
//   Check: curr.left = 40, not null → q.enqueue(40)
//     Queue: [40]
//   Check: curr.right = 50, not null → q.enqueue(50)
//     Queue: [40, 50]
//
// Iteration 4: while(!q.isEmpty()) → Queue has [40, 50]
//   curr = q.dequeue() → curr = 40, Queue: [50]
//   console.log(40) → Output: 40 ✓
//   Check: curr.left = null → skip
//   Check: curr.right = null → skip
//     Queue: [50]
//
// Iteration 5: while(!q.isEmpty()) → Queue has [50]
//   curr = q.dequeue() → curr = 50, Queue: []
//   console.log(50) → Output: 50 ✓
//   Check: curr.left = null → skip
//   Check: curr.right = null → skip
//     Queue: []
//
// Iteration 6: while(!q.isEmpty()) → Queue is empty
//   Condition fails, exit loop
//
// Final Output: 10, 20, 30, 40, 50
// (Nodes printed level by level: Level 0 → Level 1 → Level 2)
//
// ============================================================
// 📝 SUMMARY: Time Complexity and Optimality Analysis
// ============================================================
//
// ✅ IS THIS THE CORRECT APPROACH?
// Yes! Queue-based level-order traversal is the standard and correct approach.
//
// ⏱️ TIME COMPLEXITY:
// - With proper queue (two-pointer implementation): O(n) ✅ OPTIMAL
// - With shift()-based queue: O(n²) ❌ NOT OPTIMAL
//
// 📈 WHY QUEUE-BASED IS OPTIMAL:
// 1. Each node visited exactly once: O(n)
// 2. Queue operations are O(1) each (with proper implementation)
// 3. No redundant tree traversals
// 4. Linear time complexity - cannot be better than this
//
// 🔍 COMPARISON:
// ┌─────────────────────────┬──────────────┬─────────────┐
// │ Approach                │ Time         │ Space       │
// ├─────────────────────────┼──────────────┼─────────────┤
// │ Naive (height + print)  │ O(h × n)     │ O(h)        │
// │ Queue (with shift)      │ O(n²)        │ O(n)        │
// │ Queue (two-pointer) ✅  │ O(n)         │ O(n)        │
// └─────────────────────────┴──────────────┴─────────────┘
//
// 💡 KEY TAKEAWAY:
// The algorithm logic is correct, but the queue implementation matters!
// Using shift() makes it O(n²), while two-pointer makes it truly O(n).
// This implementation now uses two-pointer approach for optimal performance.

levelOrderTraversal(root);
