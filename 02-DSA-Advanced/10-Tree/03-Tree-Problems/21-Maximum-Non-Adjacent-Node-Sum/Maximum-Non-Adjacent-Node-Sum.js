/*
 * PROBLEM: Maximum sum of non-adjacent nodes
 * ------------------------------------------
 * Choose a set of nodes such that no two chosen nodes are adjacent (parent and
 * child cannot both be chosen). Find the maximum possible sum of the chosen
 * node values.
 *
 * Approach: For each node, DFS returns two values for its subtree:
 *   include = max sum if we MUST take this node → we cannot take its children.
 *   exclude = max sum if we do NOT take this node → we may take or skip each child.
 * Then: include = node.data + left.exclude + right.exclude
 *       exclude = max(left.include, left.exclude) + max(right.include, right.exclude)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxNonAdjacentNodeSum(root) {
  if (root === null) {
    return 0;
  }

  // Returns { include, exclude } for the subtree rooted at node.
  function dfs(node) {
    // Empty subtree: both choices give sum 0
    if (node === null) {
      return { include: 0, exclude: 0 };
    }
    // Get best include/exclude for left and right subtrees
    let left = dfs(node.left);
    let right = dfs(node.right);

    // If we include this node, we must exclude both children (they'd be adjacent)
    let include = node.data + left.exclude + right.exclude;

    // If we exclude this node, we take the best option from each child (include or exclude)
    let exclude =
      Math.max(left.include, left.exclude) +
      Math.max(right.include, right.exclude);

    return { include, exclude };
  }

  let result = dfs(root);
  return Math.max(result.include, result.exclude);
}

// Test tree
let root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);
console.log(maxNonAdjacentNodeSum(root));
