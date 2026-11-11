/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree, find the vertical width: the number of distinct vertical
  lines the tree spans. Root has horizontal distance (hd) 0; left child = hd-1,
  right child = hd+1. Each unique hd is one vertical line.

  Use Case: Vertical order traversal, tree layout/visualization.
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function verticalwidth(root) {
  if (root === null) {
    return 0;                // Empty tree has 0 vertical lines
  }
  let set = new Set();       // Collect unique horizontal distances (hd)
  function dfs(node, hd) {
    if (node === null) {
      return;                // Base: stop at null
    }
    set.add(hd);             // Record this vertical line

    dfs(node.left, hd - 1);  // Left → hd decreases
    dfs(node.right, hd + 1); // Right → hd increases
  }
  dfs(root, 0);              // Start at root with hd = 0
  return set.size;           // Count of distinct vertical lines
}

// Build tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(verticalwidth(root));  // Output: 5

/*
  STEP-BY-STEP EXECUTION:
  ----------------------
  Tree: 1(2,3), 2(4,5), 3(6,7)
  set = {}
  
  dfs(1, 0): set.add(0) → set={0}
    dfs(2, -1): set.add(-1) → set={0,-1}
      dfs(4, -2): set.add(-2) → set={0,-1,-2}
      dfs(5, 0): set.add(0) → set={0,-1,-2} (0 exists)
    dfs(3, 1): set.add(1) → set={0,-1,-2,1}
      dfs(6, 0): set.add(0) → set={0,-1,-2,1}
      dfs(7, 2): set.add(2) → set={0,-1,-2,1,2}
  
  set.size = 5 → return 5
  Vertical lines: -2, -1, 0, 1, 2
*/