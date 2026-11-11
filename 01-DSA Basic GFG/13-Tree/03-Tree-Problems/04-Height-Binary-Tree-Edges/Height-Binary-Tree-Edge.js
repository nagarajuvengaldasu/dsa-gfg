// Node class: Represents a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the node's value
    this.left = null; // Pointer to left child
    this.right = null; // Pointer to right child
  }
}

// Recursive function to calculate the height of a binary tree
// Height is measured in terms of EDGES (not nodes)
// Important: Empty tree (null) has height -1, single node has height 0
function height(root) {
  // Step 1: Base Case - If root is null, return -1
  // This handles empty trees and leaf nodes (nodes with no children)
  // When we reach a null node, it means we've gone past a leaf
  // We return -1 because:
  //   - An empty tree has height -1 (no edges)
  //   - A single node has height 0 (0 edges)
  //   - This allows us to correctly count edges when we add 1 in the recursive case
  if (root === null) {
    return -1;
  }

  // Step 2: Recursive Case - If root is not null
  // Step 2.1: Recursively calculate height of left subtree
  // This will traverse all nodes in the left subtree and find the longest path
  // The function calls itself with root.left, going deeper into the tree
  let leftHeight = height(root.left);

  // Step 2.2: Recursively calculate height of right subtree
  // This will traverse all nodes in the right subtree and find the longest path
  // The function calls itself with root.right, going deeper into the tree
  let rightHeight = height(root.right);

  // Step 2.3: Return the height of current subtree
  // Height = 1 (for the edge from current node to its child) + maximum of left and right heights
  // We use Math.max because height is the longest path (maximum depth)
  // The +1 accounts for the edge connecting current node to its deeper child
  return 1 + Math.max(leftHeight, rightHeight);
}

// Step 3: Create a sample binary tree
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

// Step 4: Execute the function and print the result
// Expected output: Height of Binary Tree is: 2
// Explanation: The longest path from root to leaf has 2 edges:
//   Path: 9 -> 12 -> 42 (2 edges)
//   Path: 9 -> 12 -> 95 (2 edges)
//   Path: 9 -> 3 -> 46 (2 edges)
//   Path: 9 -> 3 -> 79 (2 edges)
// All paths have 2 edges, so height = 2

// Detailed execution trace for the tree above:
//
// Call 1: height(9)
//   ├─ Step 1: root is not null, proceed to recursive case
//   ├─ Step 2.1: leftHeight = height(12)  [Call 2]
//   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   ├─ Step 2.1: leftHeight = height(42)  [Call 3]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: leftHeight = height(null)  [Call 4]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   ├─ Step 2.2: rightHeight = height(null)  [Call 5]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   └─ Step 2.3: return 1 + Math.max(-1, -1) = 1 + (-1) = 0  [Call 3 returns 0]
//   │   ├─ Step 2.2: rightHeight = height(95)  [Call 6]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: leftHeight = height(null)  [Call 7]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   ├─ Step 2.2: rightHeight = height(null)  [Call 8]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   └─ Step 2.3: return 1 + Math.max(-1, -1) = 1 + (-1) = 0  [Call 6 returns 0]
//   │   └─ Step 2.3: return 1 + Math.max(0, 0) = 1 + 0 = 1  [Call 2 returns 1]
//   ├─ Step 2.2: rightHeight = height(3)  [Call 9]
//   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   ├─ Step 2.1: leftHeight = height(46)  [Call 10]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: leftHeight = height(null)  [Call 11]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   ├─ Step 2.2: rightHeight = height(null)  [Call 12]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   └─ Step 2.3: return 1 + Math.max(-1, -1) = 1 + (-1) = 0  [Call 10 returns 0]
//   │   ├─ Step 2.2: rightHeight = height(79)  [Call 13]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: leftHeight = height(null)  [Call 14]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   ├─ Step 2.2: rightHeight = height(null)  [Call 15]
//   │   │   │   └─ Step 1: root is null, return -1
//   │   │   └─ Step 2.3: return 1 + Math.max(-1, -1) = 1 + (-1) = 0  [Call 13 returns 0]
//   │   └─ Step 2.3: return 1 + Math.max(0, 0) = 1 + 0 = 1  [Call 9 returns 1]
//   └─ Step 2.3: return 1 + Math.max(1, 1) = 1 + 1 = 2  [Call 1 returns 2]
//
// Final result: Height = 2 (measured in edges)
//
// Visual representation of height calculation:
// Level 0:        9          (root)
//                / \
// Level 1:      12   3        (1 edge from root)
//              / \  / \
// Level 2:    42 95 46 79     (2 edges from root)
//
// Height = 2 (maximum number of edges from root to any leaf)

console.log("Height of Binary Tree is: " + height(root));
