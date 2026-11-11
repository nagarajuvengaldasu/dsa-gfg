/**
 * HEIGHT OF BINARY TREE
 *
 * QUESTION: Find the height of a binary tree.
 * Height = number of nodes in the longest path from root to leaf.
 * Empty tree height = 0.
 */
// Step 1: Define the Node class to represent a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the value of the node
    this.left = null; // Pointer to left child (initially null)
    this.right = null; // Pointer to right child (initially null)
  }
}

// Step 2: Function to calculate the height of a binary tree
// Height: Number of edges in the longest path from root to any leaf node
// For empty tree, height is 0. For single node, height is 1 (counting nodes) or 0 (counting edges)
function height(root) {
  // Base case: If root is null, we've reached beyond a leaf node
  // Return 0 as there's no node at this position
  if (root === null) return 0;
  // Note: Alternative convention returns -1 for null (edge-based height)
  // second conversion logic
  // return -1
  // Recursive case: Root is not null
  else {
    // Step 3a: Recursively calculate height of left subtree
    // This will traverse all the way down the left path until hitting null
    let lh = height(root.left);

    // Step 3b: Recursively calculate height of right subtree
    // This will traverse all the way down the right path until hitting null
    let rh = height(root.right);

    // Step 4: Return 1 (current node) + maximum height of left or right subtree
    // We take max because height is the longest path
    return 1 + Math.max(lh, rh);
  }
}

// Step 5: Build a sample binary tree
// Tree structure:
//           10
//          /  \
//        20    30
//       /  \
//     40    50
//    /
//   60

let root = new Node(10); // Create root node with value 10
root.left = new Node(20); // Left child of root
root.right = new Node(30); // Right child of root
root.left.left = new Node(40); // Left child of node(20)
root.left.right = new Node(50); // Right child of node(20)
root.left.left.left = new Node(60); // Left child of node(40)

// Step 6: Calculate and print the height of the tree
// Execution trace for height(root):
//
// height(10):
//   - root is not null, go to else
//   - lh = height(20):
//       - root is not null
//       - lh = height(40):
//           - root is not null
//           - lh = height(60):
//               - root is not null
//               - lh = height(null) = 0  (60's left child)
//               - rh = height(null) = 0  (60's right child)
//               - return 1 + max(0, 0) = 1
//           - rh = height(null) = 0  (40's right child)
//           - return 1 + max(1, 0) = 2
//       - rh = height(50):
//           - root is not null
//           - lh = height(null) = 0
//           - rh = height(null) = 0
//           - return 1 + max(0, 0) = 1
//       - return 1 + max(2, 1) = 3
//   - rh = height(30):
//       - root is not null
//       - lh = height(null) = 0
//       - rh = height(null) = 0
//       - return 1 + max(0, 0) = 1
//   - return 1 + max(3, 1) = 4
//
// Final result: 4 (height of the tree)

console.log(height(root)); // Output: 4
