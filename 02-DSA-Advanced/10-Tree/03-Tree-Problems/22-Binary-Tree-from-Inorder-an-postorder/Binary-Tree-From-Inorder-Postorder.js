/*
 * PROBLEM: Construct Binary Tree from Inorder and Postorder
 * ----------------------------------------------------------
 * Given the inorder and postorder traversal sequences of a binary tree (no
 * duplicates), construct the tree and return its root.
 *
 * Inorder:  left → root → right
 * Postorder: left → right → root  (root is last)
 *
 * Idea: The last element in postorder is the root. Find its position in
 * inorder; everything left of it is the left subtree, everything right is the
 * right subtree. Recurse: build right subtree first (so we consume from the
 * end of postorder in the correct order), then left. Use a map for O(1)
 * lookup of root position in inorder.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(inorder, postorder) {
  // Map: node value → index in inorder (for O(1) split)
  let indexmap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    indexmap.set(inorder[i], i);
  }
  // Current position in postorder (we consume from right to left, so start at end)
  let postindex = postorder.length - 1;

  // Build subtree for inorder[instart..inend]; returns root of that subtree.
  function build(instart, inend) {
    if (instart > inend) {
      return null;
    }
    // Root of this subtree is the next unused value from the end of postorder
    let rootval = postorder[postindex];
    postindex--;  // consume this value so next call uses the previous one
    let root = new Node(rootval);
    // Where this root sits in inorder: left half = left subtree, right half = right subtree
    let mid = indexmap.get(rootval);
    // Build right subtree first (right part of postorder comes just before root)
    root.right = build(mid + 1, inend);
    root.left = build(instart, mid - 1);
    return root;
  }

  return build(0, inorder.length - 1);
}

// Test: build tree from inorder and postorder of the tree below
// Tree:       1
//            / \
//           2   3
//          / \ / \
//         4  5 6  7
let inorder = [4, 2, 5, 1, 6, 3, 7];
let postorder = [4, 5, 2, 6, 7, 3, 1];
let root = buildTree(inorder, postorder);
console.log(root);