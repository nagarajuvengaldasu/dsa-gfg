/**
 * PRINT NODES AT DISTANCE K
 *
 * QUESTION: Print all nodes at distance K from the root.
 * Distance = number of edges from root. K=0 means root, K=1 means children.
 */
// Step 1: Define the Node class to represent a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the value of the node
    this.left = null; // Pointer to left child (initially null)
    this.right = null; // Pointer to right child (initially null)
  }
}

// Step 2: Function to print all nodes at distance K from the root
// Distance: Number of edges from root to the target node
// At distance 0: root node itself
// At distance 1: direct children of root
// At distance 2: grandchildren of root, and so on...
function printNodesAtDistanceK(root, k) {
  // Base case 1: If root is null, we've reached beyond a leaf node
  // No node exists at this position, so return without doing anything
  if (root === null) return;

  // Base case 2: If k === 0, we've reached the desired distance
  // This means we've traversed exactly K edges from the original root
  // Print the current node's data
  if (k === 0) {
    console.log(root.data);
  }

  // Recursive case: We haven't reached distance K yet
  // Step 3a: Recursively traverse left subtree with k-1
  // Decrement k because we're moving one edge down (from current node to left child)
  // This will continue until k becomes 0 or we hit null
  printNodesAtDistanceK(root.left, k - 1);

  // Step 3b: Recursively traverse right subtree with k-1
  // Decrement k because we're moving one edge down (from current node to right child)
  // This will continue until k becomes 0 or we hit null
  printNodesAtDistanceK(root.right, k - 1);
}

// Step 4: Build a sample binary tree
// Tree structure:
//           10 (distance 0)
//          /  \
//    (1) 20   30 (1)
//       / \   / \
//  (2) 40 50 60 70 (2)

let root = new Node(10); // Create root node with value 10 (distance 0)
root.left = new Node(20); // Left child of root (distance 1)
root.right = new Node(30); // Right child of root (distance 1)
root.left.left = new Node(40); // Left child of node(20) (distance 2)
root.left.right = new Node(50); // Right child of node(20) (distance 2)
root.right.left = new Node(60); // Left child of node(30) (distance 2)
root.right.right = new Node(70); // Right child of node(30) (distance 2)

// Step 5: Print all nodes at distance 2 from root
// Execution trace for printNodesAtDistanceK(root=10, k=2):
//
// Call 1: printNodesAtDistanceK(10, 2)
//   - root is not null, continue
//   - k=2, not 0, skip printing
//   - Call 2: printNodesAtDistanceK(20, 1)  [left subtree, k-1]
//   - Call 3: printNodesAtDistanceK(30, 1)  [right subtree, k-1]
//
// Call 2: printNodesAtDistanceK(20, 1)
//   - root is not null, continue
//   - k=1, not 0, skip printing
//   - Call 4: printNodesAtDistanceK(40, 0)  [left subtree, k-1]
//   - Call 5: printNodesAtDistanceK(50, 0)  [right subtree, k-1]
//
// Call 3: printNodesAtDistanceK(30, 1)
//   - root is not null, continue
//   - k=1, not 0, skip printing
//   - Call 6: printNodesAtDistanceK(60, 0)  [left subtree, k-1]
//   - Call 7: printNodesAtDistanceK(70, 0)  [right subtree, k-1]
//
// Call 4: printNodesAtDistanceK(40, 0)
//   - root is not null, continue
//   - k=0, print root.data → console.log(40) ✓
//   - Call 8: printNodesAtDistanceK(null, -1) → return (base case)
//   - Call 9: printNodesAtDistanceK(null, -1) → return (base case)
//
// Call 5: printNodesAtDistanceK(50, 0)
//   - root is not null, continue
//   - k=0, print root.data → console.log(50) ✓
//   - Call 10: printNodesAtDistanceK(null, -1) → return (base case)
//   - Call 11: printNodesAtDistanceK(null, -1) → return (base case)
//
// Call 6: printNodesAtDistanceK(60, 0)
//   - root is not null, continue
//   - k=0, print root.data → console.log(60) ✓
//   - Call 12: printNodesAtDistanceK(null, -1) → return (base case)
//   - Call 13: printNodesAtDistanceK(null, -1) → return (base case)
//
// Call 7: printNodesAtDistanceK(70, 0)
//   - root is not null, continue
//   - k=0, print root.data → console.log(70) ✓
//   - Call 14: printNodesAtDistanceK(null, -1) → return (base case)
//   - Call 15: printNodesAtDistanceK(null, -1) → return (base case)
//
// Final Output: 40, 50, 60, 70
// These are all nodes at distance 2 from the root (10)

printNodesAtDistanceK(root, 2);
