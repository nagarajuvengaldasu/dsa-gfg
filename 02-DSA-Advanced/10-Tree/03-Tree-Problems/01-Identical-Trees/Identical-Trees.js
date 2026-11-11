/*
  QUESTION / PROBLEM:
  -------------------
  Given two binary trees, check if they are identical or not.
  Two trees are identical when they have the same structure AND the same node values
  at corresponding positions (root with root, left with left, right with right).

  Use Case: Compare tree structures (e.g., clone verification, subtree matching).
*/

class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer (initially none)
    this.right = null;       // Right child pointer (initially none)
  }
}

function identical(root1, root2) {
  // Base: both trees empty → same structure
  if (root1 === null && root2 === null) {
    return true;
  }
  // Base: one empty, one not → different structure
  if (root1 === null || root2 === null) {
    return false;
  }
  // Base: values differ at current position → not identical
  if (root1.data !== root2.data) {
    return false;
  }
  // Recurse: compare left subtree with left, right with right; both must match
  return (
    identical(root1.left, root2.left) &&
    identical(root1.right, root2.right)
  );
}

// Build tree 1
let root1 = new Node(1);           // Root
root1.left = new Node(2);          // Left child
root1.right = new Node(3);         // Right child
root1.left.left = new Node(4);     // Left-left
root1.left.right = new Node(5);    // Left-right
root1.right.left = new Node(6);    // Right-left
root1.right.right = new Node(7);   // Right-right

// Build tree 2 (same structure as tree 1)
let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);
root2.right.left = new Node(6);
root2.right.right = new Node(7);

let newHead = identical(root1, root2);  // Call checker
console.log(newHead);                    // Log result (true)

/*
  STEP-BY-STEP EXECUTION:
  ----------------------
  Call 1: identical(1, 1)
    -> root1 & root2 not null, data match (1===1)
    -> recurse: identical(2, 2) && identical(3, 3)
  
  Call 2: identical(2, 2) [left subtree]
    -> data match (2===2)
    -> recurse: identical(4, 4) && identical(5, 5)
  
  Call 3: identical(4, 4)
    -> leaf node, data match (4===4)
    -> recurse: identical(null, null) && identical(null, null)
    -> both return true (both null) -> Call 3 returns true
  
  Call 4: identical(5, 5)
    -> leaf node, same as above -> returns true
    -> Call 2 returns true
  
  Call 5: identical(3, 3) [right subtree]
    -> data match (3===3)
    -> recurse: identical(6, 6) && identical(7, 7)
    -> both return true -> Call 5 returns true
  
  Call 1: true && true -> returns true
*/
