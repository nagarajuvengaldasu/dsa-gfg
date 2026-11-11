/*
 * PROBLEM STATEMENT:
 * Given a binary tree, check if it is a Binary Search Tree (BST).
 * BST property: for every node, left subtree has values < node, right subtree has values > node.
 * We enforce strict inequality (no duplicates): left < node < right.
 *
 * Approach: Recursively pass [min, max] allowed range. Node must satisfy min < node.data < max.
 * Left subtree gets (min, node.data); right subtree gets (node.data, max).
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function checkForBST(root) {
  // Returns true if subtree at node is a BST with all values in (min, max) open interval
  function validate(node, min, max) {
    if (node === null) {
      return true;  // empty subtree is a valid BST
    }
    // node must be strictly between min and max
    if (node.data <= min || node.data >= max) {
      return false;
    }
    // left: must be in (min, node.data); right: must be in (node.data, max)
    return (
      validate(node.left, min, node.data) &&
      validate(node.right, node.data, max)
    );
  }
  // root can be any number; use -infinity and +infinity as initial bounds
  return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

/*
 * EXAMPLE TREE (valid BST):    10
 *                            /   \
 *                           5    15
 *                          / \   / \
 *                         2  7  12 17
 *
 * EXECUTION TRACE (validate calls):
 * validate(10, -∞, +∞)  → 10 in (-∞,+∞) ✓
 *   → validate(5, -∞, 10)   → 5 in (-∞,10) ✓
 *     → validate(2, -∞, 5)  → 2 in (-∞,5) ✓ → true
 *     → validate(7, 5, 10)  → 7 in (5,10) ✓ → true
 *   → validate(15, 10, +∞)  → 15 in (10,+∞) ✓
 *     → validate(12, 10, 15) ✓
 *     → validate(17, 15, +∞) ✓
 * Result: true
 */
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(17);
console.log(checkForBST(root));  // true
