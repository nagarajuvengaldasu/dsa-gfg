/**
 * POSTORDER TREE TRAVERSAL
 *
 * QUESTION: Print nodes of a binary tree in Postorder (Left, Right, Root).
 * Order: Visit left subtree, then right subtree, then root last.
 *
 * WHY: Used to delete tree (children before parent), postfix expressions.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function postorderTraversal(root) {
  if (root === null) return;
  postorderTraversal(root.left);    // STEP 1: Traverse left first
  postorderTraversal(root.right);   // STEP 2: Traverse right
  console.log(root.data);           // STEP 3: Process root last
}

/**
 * EXECUTION for tree 9(12(42,95), 3(46,79)):
 * postorder(9): postorder(12), postorder(3), print 9
 *   postorder(12): postorder(42), postorder(95), print 12
 *     postorder(42): null, null, print 42
 *     postorder(95): null, null, print 95
 *   postorder(3): postorder(46), postorder(79), print 3
 * Output: 42, 95, 12, 46, 79, 3, 9
 */
let root = new Node(9);
root.left = new Node(12);
root.right = new Node(3);
root.left.left = new Node(42);
root.left.right = new Node(95);
root.right.left = new Node(46);
root.right.right = new Node(79);
console.log("Postorder Traversal of Binary Tree is: " + postorderTraversal(root));