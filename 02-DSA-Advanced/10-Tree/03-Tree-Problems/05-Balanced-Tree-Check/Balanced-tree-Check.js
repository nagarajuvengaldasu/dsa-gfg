/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree, check if it is height-balanced.
  A tree is height-balanced if for every node, the absolute difference between
  the heights of its left and right subtrees is at most 1.

  Use Case: Validate tree structure for AVL trees, optimize search/insert performance.
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function isBalanced(root) {
  // Balanced if checkheight returns height; -1 means unbalanced
  return checkheight(root) !== -1;
}

function checkheight(node) {
  if (node === null) {
    return 0;                // Base: empty tree has height 0
  }
  let leftheight = checkheight(node.left);   // Height of left subtree
  if (leftheight === -1) {
    return -1;               // Propagate unbalanced status up
  }
  let rightheight = checkheight(node.right); // Height of right subtree
  if (rightheight === -1) {
    return -1;               // Propagate unbalanced status up
  }
  if (Math.abs(leftheight - rightheight) > 1) {
    return -1;               // Height diff > 1 → unbalanced
  }
  return 1 + Math.max(leftheight, rightheight);  // Return height of this subtree
}

// Build tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(isBalanced(root));   // Log true (tree is balanced)
