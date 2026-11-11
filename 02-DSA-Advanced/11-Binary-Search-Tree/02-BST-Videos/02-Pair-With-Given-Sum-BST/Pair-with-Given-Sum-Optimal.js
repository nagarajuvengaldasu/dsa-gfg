/*
 * PROBLEM: Pair with given sum in BST (optimal one-pass)
 * ------------------------------------------------------
 * Check if the BST contains any two nodes whose data values add up to the
 * given sum. No extra array; use a Set and one inorder-like traversal.
 *
 * Idea: As we traverse (e.g. inorder), for each node we check whether
 * (sum - root.data) is already in the Set (i.e. we've seen a value that
 * pairs with current node). If yes, return true. Otherwise add root.data
 * to the Set and continue. Time O(n), Space O(n) for Set + stack.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Values we've seen so far during traversal (inorder order)
let set = new Set();

function isPair(root, sum) {
  if (root === null) {
    return false;
  }
  // Process left subtree first (inorder); if pair found there, done
  if (isPair(root.left, sum)) {
    return true;
  }
  // Check if we've already seen a value that pairs with current node to form sum
  if (set.has(sum - root.data)) {
    return true;
  }
  // Add current node's value before going right, so right subtree can pair with it
  set.add(root.data);
  return isPair(root.right, sum);
}

// Test tree (BST): 10(20(40,50), 30(60,70)); check if any pair sums to 23
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(isPair(root, 23));
