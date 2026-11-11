/*
 * PROBLEM: Find two nodes swapped in a BST
 * ------------------------------------------
 * In a BST, exactly two nodes have been swapped. Find those two nodes (the
 * tree is given by root; we don't have an array). Inorder of a valid BST is
 * sorted; we do inorder and detect "dips" where current key < previous key.
 *
 * - First violation: the larger misplaced node is prev → store as "first".
 * - Every violation: the smaller misplaced node is root → store/update "second".
 * After traversal, swap first.key and second.key (or the node references) to fix the BST.
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// Inorder predecessor (last node we visited)
let prev = null;
// First (larger) misplaced node; set on first violation
let first = null;
// Second (smaller) misplaced node; updated on every violation
let second = null;

function findtwo(root) {
  if (root === null) {
    return;
  }
  findtwo(root.left);

  // Inorder: we're at root; prev is the previous node in inorder order
  if (prev !== null && root.key < prev.key) {
    if (first === null) {
      // First violation: the larger of the two swapped nodes is prev
      first = prev;
    }
    // The smaller of the two swapped nodes is root (update on each violation)
    second = root;
  }
  prev = root;

  findtwo(root.right);
}

// BST with two nodes swapped (e.g. 20 and 60 swapped): inorder would show violations

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
findtwo(root);
console.log(first);
console.log(second);
