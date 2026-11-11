/**
 * SIZE OF BINARY TREE (Recursive)
 *
 * QUESTION: Find the number of nodes in a binary tree.
 * Size = 1 + size(left) + size(right). Base: null returns 0.
 */
// Node class: Represents a node in a binary tree
class Node {
  constructor(data) {
    this.data = data; // Store the node's value
    this.left = null; // Pointer to left child
    this.right = null; // Pointer to right child
  }
}

// Recursive function to calculate the size (number of nodes) of a binary tree
// Size = number of nodes in left subtree + number of nodes in right subtree + 1 (current node)
function sizeOfBinaryTree(root) {
  // Step 1: Base Case - If root is null, return 0
  // This handles empty trees and leaf nodes (nodes with no children)
  // When we reach a null node, it means we've gone past a leaf, so we return 0
  if (root === null) {
    return 0;
  }
  // Step 2: Recursive Case - If root is not null
  else {
    // Step 2.1: Recursively calculate size of left subtree
    // This will traverse all nodes in the left subtree and count them
    // The function calls itself with root.left, going deeper into the tree
    let lh = sizeOfBinaryTree(root.left);

    // Step 2.2: Recursively calculate size of right subtree
    // This will traverse all nodes in the right subtree and count them
    // The function calls itself with root.right, going deeper into the tree
    let rh = sizeOfBinaryTree(root.right);

    // Step 2.3: Return total size
    // Size = left subtree size + right subtree size + 1 (for current node)
    // The +1 accounts for the current node we're processing
    return lh + rh + 1;
  }
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
// Expected output: Size of Binary Tree is: 7

// Detailed execution trace for the tree above:
//
// Call 1: sizeOfBinaryTree(9)
//   ├─ Step 1: root is not null, proceed to recursive case
//   ├─ Step 2.1: lh = sizeOfBinaryTree(12)  [Call 2]
//   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   ├─ Step 2.1: lh = sizeOfBinaryTree(42)  [Call 3]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: lh = sizeOfBinaryTree(null)  [Call 4]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   ├─ Step 2.2: rh = sizeOfBinaryTree(null)  [Call 5]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   └─ Step 2.3: return 0 + 0 + 1 = 1  [Call 3 returns 1]
//   │   ├─ Step 2.2: rh = sizeOfBinaryTree(95)  [Call 6]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: lh = sizeOfBinaryTree(null)  [Call 7]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   ├─ Step 2.2: rh = sizeOfBinaryTree(null)  [Call 8]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   └─ Step 2.3: return 0 + 0 + 1 = 1  [Call 6 returns 1]
//   │   └─ Step 2.3: return 1 + 1 + 1 = 3  [Call 2 returns 3]
//   ├─ Step 2.2: rh = sizeOfBinaryTree(3)  [Call 9]
//   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   ├─ Step 2.1: lh = sizeOfBinaryTree(46)  [Call 10]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: lh = sizeOfBinaryTree(null)  [Call 11]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   ├─ Step 2.2: rh = sizeOfBinaryTree(null)  [Call 12]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   └─ Step 2.3: return 0 + 0 + 1 = 1  [Call 10 returns 1]
//   │   ├─ Step 2.2: rh = sizeOfBinaryTree(79)  [Call 13]
//   │   │   ├─ Step 1: root is not null, proceed to recursive case
//   │   │   ├─ Step 2.1: lh = sizeOfBinaryTree(null)  [Call 14]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   ├─ Step 2.2: rh = sizeOfBinaryTree(null)  [Call 15]
//   │   │   │   └─ Step 1: root is null, return 0
//   │   │   └─ Step 2.3: return 0 + 0 + 1 = 1  [Call 13 returns 1]
//   │   └─ Step 2.3: return 1 + 1 + 1 = 3  [Call 9 returns 3]
//   └─ Step 2.3: return 3 + 3 + 1 = 7  [Call 1 returns 7]
//
// Final result: 7 nodes in the tree

console.log("Size of Binary Tree is: " + sizeOfBinaryTree(root));
