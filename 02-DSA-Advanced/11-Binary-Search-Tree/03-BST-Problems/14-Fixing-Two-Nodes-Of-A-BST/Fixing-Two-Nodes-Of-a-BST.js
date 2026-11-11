/*
 * PROBLEM STATEMENT:
 * A Binary Search Tree has had exactly two nodes swapped (by value). The tree
 * is no longer a valid BST. Recover the BST by finding those two nodes and
 * swapping their data back so that the inorder sequence is sorted again.
 *
 * In inorder we expect prev.data < node.data. A "violation" is prev.data > node.data.
 * - First violation: first = prev (the node that should be smaller but isn’t).
 * - Second violation (or same pair): second = node (the node that should be larger).
 * Swapping first.data and second.data restores the BST.
 *
 * Approach: One inorder pass to find first and second, then swap their data.
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function fixBST(root) {
  let first = null;   // first node in the swapped pair (too large in its position)
  let second = null;  // second node in the swapped pair (too small in its position)
  let prev = null;    // previous node in inorder (the one we just visited)

  function inorder(node) {
    if (node === null) {
      return;
    }
    inorder(node.left);
    // In valid BST we always have prev.data < node.data. Check for violation.
    if (prev !== null && prev.data > node.data) {
      if (first === null) {
        first = prev;   // first time we see a drop: prev is the first wrong node
      }
      second = node;    // current node is the second wrong node (update on every violation)
    }
    prev = node;        // move "previous" to current before going right
    inorder(node.right);
  }
  inorder(root);

  // Swap the two misplaced nodes’ data to restore BST
  if (first !== null && second !== null) {
    let temp = first.data;
    first.data = second.data;
    second.data = temp;
  }
  return root;
}

/*
 * Example corrupted BST:  ... 3, 25, 7, ...  (25 and 7 swapped)
 * Inorder: first violation at (25, 7) → first=25-node, second=7-node; swap → 3, 7, 25, ...
 * (If swapped pair is adjacent, there is one violation; if not, two violations but
 *  second gets updated so we still have the correct pair to swap.)
 */
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(17);
console.log(fixBST(root));  // already valid BST; first/second stay null, no swap
