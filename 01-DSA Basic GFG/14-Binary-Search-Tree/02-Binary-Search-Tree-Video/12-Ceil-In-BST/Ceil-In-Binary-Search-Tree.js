// Node class to represent a BST node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree class
// FIXED: Changed BinarySearchtree to BinarySearchTree (capital T)
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Ceil function: Find the smallest value in BST that is >= key
   *
   * DEFINITION:
   * Ceil of a key is the smallest value in the BST that is greater than or equal to the key.
   * If key exists in tree, ceil = key
   * If key doesn't exist, ceil = smallest value larger than key
   *
   * Step-by-step execution:
   */
  Ceil(root, key) {
    // Step 1: Initialize result variable to null
    // This will store the current best candidate for ceil value
    let res = null;

    // Step 2: Start iterative traversal
    while (root !== null) {
      // Step 3: Check if current node's data equals the key
      if (root.data === key) {
        // Exact match found, return immediately
        return root.data;
      }
      // Step 4: If current node's data is less than key
      // We need a larger value, so go to right subtree
      else if (root.data < key) {
        root = root.right;
      }
      // Step 5: If current node's data is greater than key
      // This node is a candidate for ceil (it's >= key)
      // But there might be a smaller value in left subtree that's still >= key
      else {
        // Step 6: Update result with current node's data
        // This is a potential ceil value (smallest found so far that's >= key)
        res = root.data;

        // Step 7: Move to left child
        // Try to find a smaller value that's still >= key
        root = root.left;
      }
    }

    // Step 8: Return the result
    return res;
  }
}

// Test case
// FIXED: Corrected BST structure to maintain BST property
// Previous issues:
// - Line 31: bst.root.left.right = 4 (WRONG: 4 < 5, violates BST - right child must be > parent)
// - Line 32: bst.root.right.right = 7 (WRONG: 7 < 11, violates BST - right child must be > parent)
// - Line 33: Overwrites line 32 (redundant)

// Correct BST structure:
//           10
//          /  \
//         5    11
//        / \    \
//       4   7   12
let bst = new BinarySearchTree();
bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(11);
bst.root.left.left = new Node(4); // FIXED: Changed to left.left (4 < 5, correct)
bst.root.left.right = new Node(7); // FIXED: 7 > 5, correct position
bst.root.right.right = new Node(12); // FIXED: 12 > 11, correct position

// Test Ceil function
// Ceil(6) should return 7 (smallest value >= 6)
console.log("Ceil of 6:", bst.Ceil(bst.root, 6));
