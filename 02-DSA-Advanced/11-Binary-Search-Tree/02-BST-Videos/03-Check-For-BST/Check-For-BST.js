/*
 * PROBLEM: Check if a binary tree is a BST
 * ------------------------------------------
 * A BST: for every node, all keys in left subtree are < node, all keys in
 * right subtree are > node. We pass allowed range (min, max) and check that
 * root lies in (mn, mx); left subtree must be in (mn, root.data), right in
 * (root.data, mx). Time O(n).
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Returns true iff tree rooted at root is a BST with all values in range (mn, mx)
function isBst(root, mn, mx) {
  if (root === null) {
    return true;
  }
  return (
    root.data > mn &&                    // current node must be > lower bound
    root.data < mx &&                    // current node must be < upper bound
    isBst(root.left, mn, root.data) &&  // left subtree: values in (mn, root.data)
    isBst(root.right, root.data, mx)    // right subtree: values in (root.data, mx)
  );
}

// Test tree (this one is not a BST: 20 > 10 so left child violates)
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(isBst(root, -Infinity, Infinity));
