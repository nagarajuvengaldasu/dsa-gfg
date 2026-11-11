/*
 * PROBLEM STATEMENT:
 * Given a Binary Search Tree (BST) and a target sum, determine if there exist
 * two distinct nodes in the BST such that the sum of their keys equals the target.
 * Return true if such a pair exists, otherwise return false.
 *
 * Approach: Inorder traversal gives sorted array; then use two-pointer technique
 * to find if any pair sums to target.
 */

// Node class: represents a single node in the BST
class Node {
  constructor(key) {
    this.left = null;   // left child pointer
    this.right = null;  // right child pointer
    this.key = key;     // value stored in the node
  }
}

// Returns true if any two nodes in the BST sum to target, else false
function pairSumInBST(root, target) {
  // Array to store inorder traversal (sorted order in BST)
  let arr = [];

  // Helper: inorder traversal — left, node, right → gives sorted array
  function inorder(node) {
    if (node === null) {
      return;  // base case: nothing to process
    }
    inorder(node.left);   // visit left subtree first
    arr.push(node.key);   // add current node's key to array
    inorder(node.right);  // then right subtree
  }
  inorder(root);  // fill arr with sorted keys from BST

  // Two-pointer: left at start, right at end of sorted array
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];  // current pair sum
    if (sum === target) {
      return true;   // pair found
    } else if (sum < target) {
      left++;        // need larger sum, move left pointer right
    } else {
      right--;       // sum too large, move right pointer left
    }
  }
  return false;  // no pair found
}

// Build sample BST:        10
//                        /   \
//                       5    15
//                      / \   / \
//                     3  7  12 17
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left  = new Node(12);
root.right.right = new Node(17);

// Check if any pair sums to 22 (e.g. 5+17 or 10+12)
console.log(pairSumInBST(root, 22));
