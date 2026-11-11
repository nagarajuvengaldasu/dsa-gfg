// Node class to represent a BST node
class Node {
  constructor(data) {
    // FIXED: Changed contructor to constructor (typo)
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Insert a key into BST (Iterative Approach)
 *
 * FIXED ISSUES:
 * 1. Typo: contructor → constructor
 * 2. Logic error: while loop condition conflicts with null check inside
 * 3. Function doesn't actually insert - just traverses and returns unconnected node
 * 4. Need to track parent to properly link new node
 * 5. Returning root.data for duplicates instead of root
 */
function insert(root, key) {
  // Step 1: Handle empty tree case
  if (root === null) {
    return new Node(key);
  }

  // Step 2: Initialize parent pointer to track where to insert
  let parent = null;
  let current = root;

  // Step 3: Traverse to find insertion point
  while (current !== null) {
    // Step 4: Update parent before moving
    parent = current;

    // Step 5: Check for duplicate
    if (current.data === key) {
      return root; // FIXED: Return root, not root.data (duplicate not inserted)
    }
    // Step 6: If key is less, go to left subtree
    else if (current.data > key) {
      current = current.left;
    }
    // Step 7: If key is greater, go to right subtree
    else {
      current = current.right;
    }
  }

  // Step 8: Create new node
  let newNode = new Node(key);

  // Step 9: Link new node to parent
  if (parent.data > key) {
    parent.left = newNode; // FIXED: Actually insert the node
  } else {
    parent.right = newNode; // FIXED: Actually insert the node
  }

  // Step 10: Return root
  return root; // FIXED: Return root, not new node
}

// Test case
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

// FIXED: Assign result back to root to maintain tree structure
const updatedRoot = insert(root, 8);
console.log("After inserting 8:", updatedRoot);
