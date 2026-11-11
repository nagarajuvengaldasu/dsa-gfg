/*
  QUESTION / PROBLEM:
  -------------------
  Given a binary tree, check if for every node the value equals the sum of its
  left child + right child. (Treat missing child as 0.)
  Leaf nodes always satisfy the property.

  Use Case: Validate tree invariants, e.g. heap-like structures where parent = sum of children.
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function childrensum(root) {
  // Base: empty tree satisfies the property
  if (root === null) {
    return true;
  }
  // Base: leaf has no children, so property holds
  if (root.left === null && root.right === null) {
    return true;
  }
  // Get left child value (or 0 if missing)
  let leftval = root.left ? root.left.data : 0;
  // Get right child value (or 0 if missing)
  let rightval = root.right ? root.right.data : 0;
  // Check: parent === left + right, and recurse into both subtrees
  return (
    root.data === leftval + rightval &&
    childrensum(root.left) &&
    childrensum(root.right)
  );
}

// Build tree: 20 = 8+12, 8 = 3+5
let root = new Node(20);           // Root
root.left = new Node(8);           // Left child
root.right = new Node(12);         // Right child
root.left.left = new Node(3);      // Left-left (leaf)
root.left.right = new Node(5);     // Left-right (leaf)

console.log(childrensum(root));    // Log result (true)

/*
  STEP-BY-STEP EXECUTION:
  ----------------------
  Tree: 20(8,12), 8(3,5), 12(null,null), 3(null,null), 5(null,null)
  
  Call 1: childrensum(20)
    -> not null, not leaf
    -> leftval=8, rightval=12, 8+12=20 === 20 ✓
    -> recurse: childrensum(8) && childrensum(12)
  
  Call 2: childrensum(8)
    -> not null, not leaf
    -> leftval=3, rightval=5, 3+5=8 === 8 ✓
    -> recurse: childrensum(3) && childrensum(5)
  
  Call 3: childrensum(3) -> leaf node -> returns true
  Call 4: childrensum(5) -> leaf node -> returns true
    -> Call 2: true && true -> returns true
  
  Call 5: childrensum(12) -> leaf node -> returns true
  
  Call 1: true && true -> returns true
*/
