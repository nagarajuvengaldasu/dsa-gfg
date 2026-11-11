/*
 * PROBLEM: Count number of subtrees having sum equal to X
 * -------------------------------------------------------
 * Given a binary tree and an integer x, count how many subtrees have the sum
 * of all node values equal to x. A subtree is any node together with all its
 * descendants (the whole tree under that node).
 *
 * Approach: DFS. For each node, compute the sum of its subtree (left sum +
 * right sum + node.data). If that sum equals x, increment the count. Return
 * the subtree sum to the parent so it can compute its own sum.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function countSubtrees(root, x) {
  // Empty tree has no subtrees to count
  if (root === null) {
    return 0;
  }
  // Number of subtrees whose sum equals x
  let count = 0;

  // Returns: sum of the subtree rooted at node.
  // Side effect: if that sum equals x, increments count.
  function dfs(node) {
    // Empty subtree contributes 0 to sum
    if (node === null) {
      return 0;
    }
    // Sum of left subtree
    let leftsum = dfs(node.left);
    // Sum of right subtree
    let rightsum = dfs(node.right);

    // Total sum of subtree rooted at this node
    let totalsum = leftsum + rightsum + node.data;

    // If this subtree's sum equals x, count it
    if (totalsum === x) {
      count++;
    }
    // Return sum so parent can compute its subtree sum
    return totalsum;
  }

  dfs(root);
  return count;
}

// Test tree: each subtree sum checked against x = 7
let root = new Node(5);
root.left = new Node(-10);
root.right = new Node(3);
root.left.left = new Node(9);
root.left.right = new Node(8);
root.right.left = new Node(-4);
root.right.right = new Node(7);
console.log(countSubtrees(root, 7));
