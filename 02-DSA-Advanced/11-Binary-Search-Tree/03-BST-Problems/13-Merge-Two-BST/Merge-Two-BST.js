/*
 * PROBLEM STATEMENT:
 * Given two Binary Search Trees, merge them into a single sorted list (inorder)
 * containing all nodes from both trees. Duplicates are allowed if the same value
 * appears in both BSTs.
 *
 * Approach: Inorder on each BST gives two sorted arrays; merge them using the
 * two-pointer technique (like merge step of merge sort).
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function mergeTwoBST(root1, root2) {
  let a = [];  // sorted list from first BST (inorder)
  let b = [];  // sorted list from second BST (inorder)

  // Inorder: left → node → right → produces sorted array for a BST
  function inorder(root, arr) {
    if (root === null) {
      return;
    }
    inorder(root.left, arr);
    arr.push(root.data);
    inorder(root.right, arr);
  }
  inorder(root1, a);
  inorder(root2, b);

  let i = 0;           // pointer in a
  let j = 0;           // pointer in b
  let result = [];      // merged sorted list

  // Merge: take smaller of a[i] and b[j], advance that pointer
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  // Append remaining from a (if any)
  while (i < a.length) {
    result.push(a[i]);
    i++;
  }
  // Append remaining from b (if any)
  while (j < b.length) {
    result.push(b[j]);
    j++;
  }
  return result;
}

/*
 * BST1 (inorder): [2, 5, 7, 10, 12, 17]
 * BST2 (inorder): [10, 12, 14]
 * Merge: 2, 5, 7, 10, 10, 12, 12, 14, 17
 */
let root1 = new Node(10);
root1.left = new Node(5);
root1.right = new Node(15);
root1.left.left = new Node(2);
root1.left.right = new Node(7);
root1.right.left = new Node(12);
root1.right.right = new Node(17);
let root2 = new Node(12);
root2.left = new Node(10);
root2.right = new Node(14);
console.log(mergeTwoBST(root1, root2));  // [2, 5, 7, 10, 10, 12, 12, 14, 17]
