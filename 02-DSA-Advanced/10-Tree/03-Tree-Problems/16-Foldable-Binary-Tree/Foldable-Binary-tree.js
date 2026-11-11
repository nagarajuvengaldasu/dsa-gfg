/*
 * QUESTION: Foldable Binary Tree
 * ---------------------------------
 * A binary tree is FOLDABLE if the left subtree and the right subtree are
 * mirror images of each other in terms of STRUCTURE (positions of nodes),
 * not necessarily in values.
 *
 * In other words: when you "fold" the tree along the root, the left half
 * would fold over the right half and the structure would align — for every
 * node on the left there is a corresponding node at the mirror position
 * on the right (and vice versa). Values can be different.
 *
 * Examples:
 *   Foldable:    1        Not foldable:  1
 *               / \                     / \
 *              2   3                   2   3
 *             / \   \                 /     \
 *            4   5   6               4       5
 *   (left & right have same structure)  (left has 2 nodes, right has 1)
 *
 * Empty tree is considered foldable.
 */

// Tree node: data + left and right child pointers
class Node {
  constructor(data) {
    this.data = data;   // value at this node
    this.left = null;   // left child (null if absent)
    this.right = null;  // right child (null if absent)
  }
}

// Returns true if the tree is foldable (left and right subtrees are mirror in structure)
function isFoldable(root) {
  // Empty tree has no left/right to compare → foldable
  if (root === null) {
    return true;
  }
  // Tree is foldable iff left subtree is mirror of right subtree
  return isMirror(root.left, root.right);
}

// Returns true if the two subtrees are mirror images of each other (structure only)
function isMirror(root1, root2) {
  // Both empty → they "match" as mirrors
  if (root1 === null && root2 === null) {
    return true;
  }
  // One empty, one not → structure differs → not mirror
  if (root1 === null || root2 === null) {
    return false;
  }
  // Both exist: check mirror recursively —
  // root1's left must mirror root2's right, and root1's right must mirror root2's left
  return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
}

// Test tree:       1
//                 / \
//                2   3
//               / \ / \
//              4  5 6  7
// Left subtree (2,4,5) and right subtree (3,6,7) have same structure → foldable → true
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(isFoldable(root));  // true
