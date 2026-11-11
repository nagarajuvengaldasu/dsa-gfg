/**
 * MAXIMUM IN BINARY TREE
 *
 * QUESTION: Find the maximum value in a binary tree.
 * Approach: Max = max(root.data, max(left subtree), max(right subtree))
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maximumInBinaryTree(root) {
  if (root === null) return Number.NEGATIVE_INFINITY;
  let leftMax = maximumInBinaryTree(root.left);
  let rightMax = maximumInBinaryTree(root.right);
  return Math.max(root.data, leftMax, rightMax);
}

/**
 * EXECUTION for tree 9(12(42,95), 3(46,79)):
 * max(9): max(12)=95, max(3)=79, return max(9,95,79)=95
 *   max(12): max(42)=42, max(95)=95, return max(12,42,95)=95
 *   max(3): max(46)=46, max(79)=79, return max(3,46,79)=79
 * Output: 95
 */
let root = new Node(9);
root.left = new Node(12);
root.right = new Node(3);
root.left.left = new Node(42);
root.left.right = new Node(95);
root.right.left = new Node(46);
root.right.right = new Node(79);
console.log("Maximum in Binary Tree is: " + maximumInBinaryTree(root));
