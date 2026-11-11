/*
 * QUESTION: Maximum Path Sum
 * --------------------------
 * Find the maximum sum of any path in a binary tree. A path is a sequence of
 * connected nodes (each node at most once); the path can start and end at any
 * nodes (does not have to start at root or end at a leaf). We sum the node
 * values along that path.
 *
 * Idea: For each node, the best path "through" that node is:
 *   (best sum from left subtree) + node.data + (best sum from right subtree).
 * We use DFS and track the global maximum; from each node we return the best
 * single-branch sum (node + one child) so the parent can extend the path.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxPathSum(root) {
  // Global max path sum seen so far (start very low to handle negative values)
  let maxsum = Number.NEGATIVE_INFINITY;

  // Returns: max sum of any path that goes from this node downward along one branch (for parent to extend).
  // Side effect: updates maxsum with the best path that "bends" at this node (left + node + right).
  function dfs(node) {
    // Empty subtree contributes 0 (we can choose not to take that branch)
    if (node === null) {
      return 0;
    }
    // Best sum from left branch only (ignore if negative — we can skip that branch)
    let left = Math.max(0, dfs(node.left));
    // Best sum from right branch only
    let right = Math.max(0, dfs(node.right));

    // Path that goes through this node: left branch + this node + right branch
    maxsum = Math.max(maxsum, left + right + node.data);

    // Return best single branch so parent can extend: this node + better of left/right
    return node.data + Math.max(left, right);
  }

  dfs(root);
  return maxsum;
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
console.log(maxPathSum(root));
