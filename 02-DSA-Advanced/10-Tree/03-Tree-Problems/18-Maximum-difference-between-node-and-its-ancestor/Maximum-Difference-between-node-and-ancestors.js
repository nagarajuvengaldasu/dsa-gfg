/*
 * PROBLEM: Maximum difference between a node and its ancestor
 * -----------------------------------------------------------------
 * Given a binary tree, find the maximum value of (ancestor - descendant) for
 * any ancestor–descendant pair. An ancestor is a node on the path from root
 * to another node; that other node is its descendant.
 *
 * Approach: For each node (as ancestor), the best difference is (node - min
 * value in its subtree). So we do DFS and return the minimum value in each
 * subtree; at each node we update a global max with (node.data - min), and
 * return min(node.data, min_from_children) for the parent.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxDifference(root) {
  // Global maximum difference (node - ancestor) seen so far
  let ans = Number.NEGATIVE_INFINITY;

  // Returns: minimum value in the subtree rooted at node (so ancestors can use it for difference).
  // Side effect: updates ans with the best (node - min_in_subtree) for this node.
  function dfs(node) {
    // Empty subtree: return Infinity so Math.min with real values keeps the real min
    if (node === null) {
      return Infinity;
    }
    // Leaf: no descendants, so min in this "subtree" is the node itself
    if (node.left === null && node.right === null) {
      return node.data;
    }

    // Min value in left and right subtrees (from descendants)
    let leftmin = dfs(node.left);
    let rightmin = dfs(node.right);

    // Smallest value in this node's subtree (descendants only)
    let min = Math.min(leftmin, rightmin);
    // This node as ancestor, min as descendant: difference = node - min; update global max
    ans = Math.max(ans, node.data - min);
    // Pass up the minimum in subtree including this node (so parent can use it)
    return Math.min(node.data, min);
  }

  dfs(root);
  return ans;
}

// Test tree:       1
//                 / \
//                2   3
//               / \ / \
//              4  5 6  7
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(maxDifference(root));
