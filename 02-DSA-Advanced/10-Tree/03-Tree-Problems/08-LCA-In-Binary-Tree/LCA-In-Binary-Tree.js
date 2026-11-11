/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree and two node values n1, n2, find the Lowest Common Ancestor (LCA).
  LCA is the lowest node that has both n1 and n2 as descendants.

  Use Case: Path finding, distance between nodes, genealogy, version control.
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function lca(root, n1, n2) {
  if (root === null) {
    return null;             // Base: nothing found in this subtree
  }
  if (root.data === n1 || root.data === n2) {
    return root;             // Base: current node is one of n1 or n2
  }
  let leftlca = lca(root.left, n1, n2);   // Search left subtree
  let rightlca = lca(root.right, n1, n2); // Search right subtree

  if (leftlca !== null && rightlca !== null) {
    return root;             // Both sides found a target → root is LCA
  }

  return leftlca !== null ? leftlca : rightlca;  // Return whichever side found
}

// Build tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(lca(root, 4, 5));  // LCA of 4 and 5 → node 2

/*
  STEP-BY-STEP EXECUTION (lca(root, 4, 5)):
  ----------------------------------------
  Tree: 1(2,3), 2(4,5), 3(6,7), n1=4, n2=5
  
  Call 1: lca(1, 4, 5)
    -> root not null, root≠4 or 5
    -> leftlca = lca(2, 4, 5)
    -> rightlca = lca(3, 4, 5)
  
  Call 2: lca(2, 4, 5)
    -> root not null, root≠4 or 5
    -> leftlca = lca(4, 4, 5) → returns 4 (root.data===n1)
    -> rightlca = lca(5, 4, 5) → returns 5 (root.data===n2)
    -> both non-null → return root 2 (LCA)
  
  Call 3: lca(3, 4, 5)
    -> leftlca = lca(6,4,5) → null; rightlca = lca(7,4,5) → null
    -> return null
  
  Call 1: leftlca=2, rightlca=null → return 2
  
  Final: node 2 (data: 2)
*/
