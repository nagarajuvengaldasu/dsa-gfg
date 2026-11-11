/**
 * LEVEL ORDER TRAVERSAL (Naive)
 *
 * QUESTION: Print nodes level by level (BFS). Naive: O(h*n) - for each level
 * call printLevel which traverses entire tree. Optimal uses queue O(n).
 */
// Step 1: Define the Node class to represent a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the value of the node
    this.left = null; // Pointer to left child (initially null)
    this.right = null; // Pointer to right child (initially null)
  }
}

// Step 2: Main function for Level Order Traversal (Breadth-First approach)
// Level Order: Print nodes level by level from top to bottom
// This is a "naive" approach because it uses O(h * n) time complexity
// Better approach would use a queue (O(n) time)
function levelOrderTraversal(root) {
  // Step 2a: Calculate the height of the tree
  // We need to know how many levels exist to iterate through them
  let h = heightofnode(root);

  // Step 2b: Iterate through each level from 0 to h-1
  // Level 0: root node
  // Level 1: children of root
  // Level 2: grandchildren of root, etc.
  for (let i = 0; i < h; i++) {
    // Step 2c: Print all nodes at the current level (i)
    printLevel(root, i);
  }
}

// Step 3: Function to calculate the height of a binary tree
// Height: Number of nodes in the longest path from root to any leaf
function heightofnode(root) {
  // Base case: If root is null, height is 0
  if (root === null) return 0;
  else {
    // Recursive case: Calculate heights of left and right subtrees
    let lh = heightofnode(root.left); // Height of left subtree
    let rh = heightofnode(root.right); // Height of right subtree

    // Return 1 (current node) + maximum height of subtrees
    return 1 + Math.max(lh, rh);
  }
}

// Step 4: Function to print all nodes at a specific level
// This function traverses the entire tree but only prints when level === 0
function printLevel(root, level) {
  // Base case 1: If root is null, return (no node to process)
  if (root === null) return;

  // Base case 2: If level is 0, we've reached the desired level
  // Print the current node's data
  if (level === 0) {
    console.log(root.data);
  } else {
    // Recursive case: We haven't reached the target level yet
    // Decrement level and recursively traverse left and right subtrees
    printLevel(root.left, level - 1); // Move to left child, decrease level by 1
    printLevel(root.right, level - 1); // Move to right child, decrease level by 1
  }
}

// Step 5: Build a sample binary tree
// Tree structure:
//           10 (level 0)
//          /  \
//    (1) 20    30 (1)
//       / \    /
//  (2) 8   7  6 (2)
//         / \
//    (3) 9  15 (3)

let root = new Node(10); // Create root node (level 0)
root.left = new Node(20); // Left child of root (level 1)
root.right = new Node(30); // Right child of root (level 1)
root.left.left = new Node(8); // Left child of node(20) (level 2)
root.left.right = new Node(7); // Right child of node(20) (level 2)
root.right.left = new Node(6); // Left child of node(30) (level 2)
root.left.right.left = new Node(9); // Left child of node(7) (level 3)
root.left.right.right = new Node(15); // Right child of node(7) (level 3)

// Step 6: Execute Level Order Traversal
// Execution trace:
//
// Phase 1: Calculate Height
//   heightofnode(10) → calculates height = 4
//   (This traverses the tree recursively to find max depth)
//
// Phase 2: Print Level by Level
//
// Iteration 1: i = 0 (Print level 0)
//   printLevel(10, 0)
//     - level === 0, print 10 ✓
//   Output: 10
//
// Iteration 2: i = 1 (Print level 1)
//   printLevel(10, 1)
//     - level !== 0, continue
//     - printLevel(20, 0) → level === 0, print 20 ✓
//     - printLevel(30, 0) → level === 0, print 30 ✓
//   Output: 20, 30
//
// Iteration 3: i = 2 (Print level 2)
//   printLevel(10, 2)
//     - level !== 0, continue
//     - printLevel(20, 1)
//       - level !== 0, continue
//       - printLevel(8, 0) → level === 0, print 8 ✓
//       - printLevel(7, 0) → level === 0, print 7 ✓
//     - printLevel(30, 1)
//       - level !== 0, continue
//       - printLevel(6, 0) → level === 0, print 6 ✓
//       - printLevel(null, 0) → return (null)
//   Output: 8, 7, 6
//
// Iteration 4: i = 3 (Print level 3)
//   printLevel(10, 3)
//     - level !== 0, continue
//     - printLevel(20, 2)
//       - level !== 0, continue
//       - printLevel(8, 1)
//         - level !== 0, continue
//         - printLevel(null, 0) → return
//         - printLevel(null, 0) → return
//       - printLevel(7, 1)
//         - level !== 0, continue
//         - printLevel(9, 0) → level === 0, print 9 ✓
//         - printLevel(15, 0) → level === 0, print 15 ✓
//     - printLevel(30, 2)
//       - level !== 0, continue
//       - printLevel(6, 1)
//         - level !== 0, continue
//         - printLevel(null, 0) → return
//         - printLevel(null, 0) → return
//       - printLevel(null, 1) → return
//   Output: 9, 15
//
// Final Output: 10, 20, 30, 8, 7, 6, 9, 15
// (Nodes printed level by level from top to bottom)

levelOrderTraversal(root);
