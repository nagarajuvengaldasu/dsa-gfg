/*
 * PROBLEM: Check if binary tree is a BST (optimal – inorder)
 * ----------------------------------------------------------
 * A BST's inorder traversal is strictly increasing. We do inorder and check
 * that each node's data is greater than the previous. No range passed;
 * O(n) time, O(h) stack space.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Previous node's value in inorder (so we can check strictly increasing)
let prev = null;

function isBst(root) {
  if (root === null) {
    return true;
  }
  // Inorder: process left subtree first; if it's not a BST, fail
  if (!isBst(root.left)) {
    return false;
  }
  // Current node must be strictly greater than previous node in inorder
  if (prev !== null && root.data <= prev) {
    return false;
  }
  prev = root.data; // remember current for next node in inorder

  return isBst(root.right);
}

// Test tree (not a BST: 20 > 10)
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(isBst(root));
