/**
 * INORDER TREE TRAVERSAL
 *
 * QUESTION: Print nodes of a binary tree in Inorder (Left, Root, Right).
 * Order: Visit left subtree first, then root, then right subtree.
 *
 * WHY: For BST, inorder gives sorted order. Used in expression trees.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  if (root === null) return;
  inorderTraversal(root.left);      // STEP 1: Traverse left first
  console.log(root.data);           // STEP 2: Process root
  inorderTraversal(root.right);     // STEP 3: Traverse right
}

/**
 * EXECUTION for tree 9(12(42,95), 3(46,79)):
 * inorder(9): inorder(12), print 9, inorder(3)
 *   inorder(12): inorder(42), print 12, inorder(95)
 *     inorder(42): null, print 42, null
 *     inorder(95): null, print 95, null
 *   inorder(3): inorder(46), print 3, inorder(79)
 * Output: 42, 12, 95, 9, 46, 3, 79
 */
let root = new Node(9);
root.left = new Node(12);
root.right = new Node(3);
root.left.left = new Node(42);
root.left.right = new Node(95);
root.right.left = new Node(46);
root.right.right = new Node(79);
console.log("Inorder Traversal of Binary Tree is: " + inorderTraversal(root));
