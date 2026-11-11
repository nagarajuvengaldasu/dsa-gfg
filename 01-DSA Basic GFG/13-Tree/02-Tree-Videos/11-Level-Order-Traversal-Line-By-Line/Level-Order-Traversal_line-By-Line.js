/**
 * LEVEL ORDER TRAVERSAL LINE BY LINE (Null Marker)
 *
 * QUESTION: Print nodes level by level, each level on a new line.
 * Approach: Use null as marker - enqueue null after each level's nodes.
 */
// Step 1: Define the Node class to represent a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the value of the node
    this.left = null; // Pointer to left child (initially null)
    this.right = null; // Pointer to right child (initially null)
  }
}

// Step 2: Define the Queue class for level-order traversal
class Queue {
  constructor() {
    this.arr = []; // Array to store queue elements
    this.front = 0; // Front pointer for O(1) dequeue
    this.rear = 0; // Rear pointer for O(1) enqueue
  }

  enqueue(x) {
    this.arr[this.rear] = x; // Store element at rear position
    this.rear++; // Move rear pointer forward
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let element = this.arr[this.front]; // Get front element
    this.front++; // Move front pointer forward
    return element;
  }

  isEmpty() {
    return this.front === this.rear; // Empty when front equals rear
  }

  size() {
    return this.rear - this.front; // Size = rear - front
  }
}

// Step 3: Level Order Traversal Line by Line
// This function prints nodes level by level, with each level on a new line
function levelOrderTraversal(root) {
  let ans = "";

  // Base case: If tree is empty, return empty string
  if (root === null) {
    return ans;
  }

  // ============================================================
  // 🎯 KEY CONCEPT: NULL AS A LEVEL MARKER
  // ============================================================
  //
  // Null is used as a "marker" or "delimiter" to separate different levels!
  // Think of null as a "level separator" that tells us: "Hey, we've finished
  // processing all nodes at this level, now let's move to the next line!"
  //
  // How it works:
  // 1. We add null after each level's nodes
  // 2. When we dequeue null, we know we've finished that level
  // 3. We add a newline ("\n") to start a new line
  // 4. We enqueue another null to mark the end of the NEXT level
  //
  // Pattern: [node1, node2, ..., null, node3, node4, ..., null, ...]
  //          └─── Level 0 ───┘     └─── Level 1 ───┘

  let q = new Queue();
  q.enqueue(root); // Add root node (level 0, first node)
  q.enqueue(null); // Add null to mark: "Level 0 ends here!"
  // Queue state: [10, null]
  //              └─ Level 0 ─┘

  // Continue until only null remains (when queue size > 1)
  // Why > 1? Because when we finish, queue will have: [null] (size = 1)
  // We stop before processing that last null
  while (q.size() > 1) {
    let curr = q.dequeue();

    // ============================================================
    // 🔍 EXPLANATION: if (curr === null)
    // ============================================================
    // When curr is null, it means we've just dequeued our "level marker"
    // This tells us: "We've finished processing ALL nodes at the current level"
    //
    // What we do:
    // 1. Add "\n" → Start a new line for the next level
    // 2. q.enqueue(null) → Add a new marker for the NEXT level
    //    Why? Because all children of the previous level are now in queue,
    //    so we need to mark where THIS level will end
    // 3. continue → Skip processing (null is not a node, it's just a marker)
    //
    // Example:
    // Queue: [20, 30, null]  ← We just processed level 0 (10)
    //        └── Level 1 ──┘
    // Dequeue null → We finished level 1 processing
    // Add "\n" → Move to next line
    // Add null → Mark end of level 2
    // Queue: [40, 50, 60, 70, null]  ← Ready for level 2
    //        └──── Level 2 ──────┘

    if (curr === null) {
      ans += "\n"; // Move to next line (level separator)
      q.enqueue(null); // Mark the end of the NEXT level that's coming
      continue; // Don't process null as a node, skip to next iteration
    }

    // ✅ FIX 1: Changed curr.key to curr.data (Node uses 'data', not 'key')
    ans += curr.data + " ";

    // ✅ FIX 2: Changed === to !== (should enqueue when child EXISTS, not when it's null)
    // Only enqueue children if they are not null
    if (curr.left !== null) {
      q.enqueue(curr.left);
    }
    if (curr.right !== null) {
      q.enqueue(curr.right);
    }

    // ✅ FIX 3: Removed return statement from inside loop
    // Return should be AFTER the loop, not inside it
  }

  // ✅ FIX 4: Return the result after processing all nodes
  return ans;
}

// Step 4: Build a sample binary tree
// Tree structure:
//           10 (level 0)
//          /  \
//    (1) 20    30 (1)
//       / \    / \
//  (2) 40 50  60 70 (2)

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

// Step 5: Execute Level Order Traversal Line by Line
// Expected Output:
// 10
// 20 30
// 40 50 60 70

console.log(levelOrderTraversal(root));

// ============================================================
// 📚 DETAILED WALKTHROUGH: How NULL Marker Works
// ============================================================
//
// Let's trace through the execution step by step:
//
// Tree:
//           10 (level 0)
//          /  \
//    (1) 20    30 (1)
//       / \    / \
//  (2) 40 50  60 70 (2)
//
// ┌─────────────────────────────────────────────────────────┐
// │ STEP 0: Initial Setup                                   │
// ├─────────────────────────────────────────────────────────┤
// │ Queue: [10, null]                                       │
// │        └─Level 0─┘                                      │
// │ ans = ""                                                 │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ ITERATION 1: Process node 10                            │
// ├─────────────────────────────────────────────────────────┤
// │ curr = dequeue() → curr = 10                            │
// │ Queue: [null]                                            │
// │                                                          │
// │ curr is NOT null, so:                                    │
// │   ans += "10 "  → ans = "10 "                           │
// │   Enqueue children: 20, 30                              │
// │   Queue: [null, 20, 30]                                 │
// │            └─Marker  └─Level 1──┘                       │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ ITERATION 2: Encounter null → Finish Level 0            │
// ├─────────────────────────────────────────────────────────┤
// │ curr = dequeue() → curr = null                          │
// │ Queue: [20, 30]                                          │
// │                                                          │
// │ curr === null, so:                                       │
// │   ans += "\n"  → ans = "10 \n"                          │
// │   q.enqueue(null)  → Queue: [20, 30, null]              │
// │                        └──Level 1──┘ └Marker            │
// │   continue → Skip to next iteration                      │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ ITERATION 3: Process node 20                            │
// ├─────────────────────────────────────────────────────────┤
// │ curr = dequeue() → curr = 20                            │
// │ Queue: [30, null]                                        │
// │                                                          │
// │ curr is NOT null, so:                                    │
// │   ans += "20 "  → ans = "10 \n20 "                      │
// │   Enqueue children: 40, 50                              │
// │   Queue: [30, null, 40, 50]                             │
// │            └Marker └Level 2──┘                          │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ ITERATION 4: Process node 30                            │
// ├─────────────────────────────────────────────────────────┤
// │ curr = dequeue() → curr = 30                            │
// │ Queue: [null, 40, 50]                                    │
// │                                                          │
// │ curr is NOT null, so:                                    │
// │   ans += "30 "  → ans = "10 \n20 30 "                   │
// │   Enqueue children: 60, 70                              │
// │   Queue: [null, 40, 50, 60, 70]                         │
// │            └Marker └────Level 2─────┘                   │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ ITERATION 5: Encounter null → Finish Level 1            │
// ├─────────────────────────────────────────────────────────┤
// │ curr = dequeue() → curr = null                          │
// │ Queue: [40, 50, 60, 70]                                  │
// │                                                          │
// │ curr === null, so:                                       │
// │   ans += "\n"  → ans = "10 \n20 30 \n"                  │
// │   q.enqueue(null)  → Queue: [40, 50, 60, 70, null]      │
// │                        └────Level 2────┘ └Marker        │
// │   continue → Skip to next iteration                      │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ ITERATIONS 6-9: Process nodes 40, 50, 60, 70            │
// ├─────────────────────────────────────────────────────────┤
// │ Similar pattern - process each node, enqueue children   │
// │ (but these nodes have no children, so nothing added)     │
// │ After all processed: ans = "10 \n20 30 \n40 50 60 70 "  │
// │ Queue: [null]  (only marker remains)                     │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ ITERATION 10: Final null check                          │
// ├─────────────────────────────────────────────────────────┤
// │ curr = dequeue() → curr = null                          │
// │ Queue: []                                                 │
// │                                                          │
// │ curr === null, so:                                       │
// │   ans += "\n"  → ans = "10 \n20 30 \n40 50 60 70 \n"    │
// │   q.enqueue(null)  → Queue: [null]                       │
// │   continue                                                                        │
// │                                                          │
// │ Now: q.size() = 1 (only null remains)                   │
// │ Condition: while (q.size() > 1) → FALSE                 │
// │ Loop exits!                                              │
// └─────────────────────────────────────────────────────────┘
//
// ============================================================
// 💡 KEY INSIGHT: Why do we enqueue null INSIDE the loop?
// ============================================================
//
// When we encounter null, it means:
// - We've finished processing ONE complete level
// - All children of that level are already in the queue
// - We need to mark where THIS level will end
//
// Example: After processing level 0 (node 10):
// - Queue has: [20, 30] (children of level 0)
// - We encounter null (marker for level 0 end)
// - We add "\n" (move to next line)
// - We add null AFTER 20 and 30, so queue becomes: [20, 30, null]
// - This null will tell us when level 1 is complete!
//
// Pattern repeats:
// Level 0: [10, null]           → Process 10, encounter null
// Level 1: [20, 30, null]       → Process 20, 30, encounter null
// Level 2: [40, 50, 60, 70, null] → Process all, encounter null
//
// ============================================================

// ============================================================
// 🐛 ISSUES FOUND AND FIXED:
// ============================================================
//
// ❌ ISSUE 1: Line 40 - Used curr.key instead of curr.data
//    Problem: Node class uses 'data' property, not 'key'
//    Result: curr.key was undefined, causing "undefined " in output
//    Fix: Changed to curr.data
//
// ❌ ISSUE 2: Lines 41-46 - Inverted condition logic
//    Problem: if (curr.left === null) enqueues null when child is null
//    Result: Queue gets filled with null values, breaking the logic
//    Fix: Changed to if (curr.left !== null)
//
// ❌ ISSUE 3: Line 47 - return statement inside while loop
//    Problem: Returns after processing only first node
//    Result: Function exits early, only prints root node
//    Fix: Moved return statement outside the loop
//
// ⚡ BONUS FIX: Optimized Queue to use two-pointer approach
//    Original: Used shift() which is O(n) per operation
//    Fixed: Uses front/rear pointers for O(1) operations
//
// ============================================================
