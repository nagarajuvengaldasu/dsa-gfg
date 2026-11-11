/**
 * PREORDER TREE TRAVERSAL
 *
 * QUESTION: Print nodes of a binary tree in Preorder (Root, Left, Right).
 * Order: Visit root first, then left subtree, then right subtree.
 *
 * WHY: Preorder is used for copying trees, prefix expressions, etc.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root) {
  if (root === null) return;
  console.log(root.data);           // STEP 1: Process root first
  preorderTraversal(root.left);     // STEP 2: Traverse left
  preorderTraversal(root.right);    // STEP 3: Traverse right
}

/**
 * EXECUTION for tree 9(12(42,95), 3(46,79)):
 * preorder(9): print 9, preorder(12), preorder(3)
 *   preorder(12): print 12, preorder(42), preorder(95)
 *     preorder(42): print 42, null, null
 *     preorder(95): print 95, null, null
 *   preorder(3): print 3, preorder(46), preorder(79)
 * Output: 9, 12, 42, 95, 3, 46, 79
 */
let root = new Node(9);
root.left = new Node(12);
root.right = new Node(3);
root.left.left = new Node(42);
root.left.right = new Node(95);
root.right.left = new Node(46);
root.right.right = new Node(79);
console.log("Preorder Traversal of Binary Tree is: " + preorderTraversal(root));
