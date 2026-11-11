// Node class to represent a BST node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Floor function: Find the largest value in BST that is <= key
   *
   * DEFINITION:
   * Floor of a key is the largest value in the BST that is less than or equal to the key.
   * If key exists in tree, floor = key
   * If key doesn't exist, floor = largest value smaller than key
   *
   * Example Tree:
   *           10
   *          /  \
   *         5    15
   *        / \  /  \
   *       2  7 12  18
   *
   * Examples:
   * - Floor(16) = 15 (largest value <= 16)
   * - Floor(12) = 12 (exact match)
   * - Floor(8) = 7 (largest value <= 8)
   * - Floor(1) = null (no value <= 1)
   *
   * Step-by-step execution:
   */
  Floor(root, key) {
    // Step 1: Initialize result variable to null
    // This will store the current best candidate for floor value
    // null means no floor value found yet
    let res = null;

    // Step 2: Start iterative traversal
    // Continue until we reach a null node (end of path)
    while (root !== null) {
      // Step 3: Check if current node's data equals the key
      // If exact match found, this is the floor (and also the ceiling)
      if (root.data === key) {
        // Step 4: Return the exact match immediately
        // No need to search further
        return root.data;
      }
      // Step 5: If current node's data is greater than key
      // According to BST property: all values in left subtree are smaller
      // So floor value must be in left subtree (or doesn't exist)
      else if (root.data > key) {
        // Step 6: Move to left child
        // We don't update res here because current node is too large
        // We need to find a smaller value
        root = root.left;
      }
      // Step 7: If current node's data is less than key
      // This node is a candidate for floor (it's <= key)
      // But there might be a larger value in right subtree that's still <= key
      else {
        // Step 8: Update result with current node's data
        // This is a potential floor value (largest found so far that's <= key)
        // We save it because it might be the answer
        res = root.data;

        // Step 9: Move to right child
        // Try to find a larger value that's still <= key
        // If we find one, it will update res (better candidate)
        // If we don't find one, current res is the answer
        root = root.right;
      }
    }

    // Step 10: Return the result
    // This will be:
    // - The floor value if found
    // - null if no value <= key exists in the tree
    return res;
  }
}
/**
 * Test case with step-by-step execution trace
 *
 * Tree structure:
 *           10
 *          /  \
 *         5    15
 *        / \  /  \
 *       2  7 12  18
 */
let bst = new BinarySearchTree();

// Step 1: Create BST structure
bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(15);
bst.root.left.left = new Node(2);
bst.root.left.right = new Node(7);
bst.root.right.left = new Node(12);
bst.root.right.right = new Node(18);

// Step 2: Find Floor of 16
// Execution trace for Floor(root=10, key=16):
//
// Initialize: res = null
//
// Iteration 1: root = 10 (not null)
//   - 10 < 16 → else branch
//   - res = 10 (potential floor value)
//   - root = root.right (15)
//
// Iteration 2: root = 15 (not null)
//   - 15 < 16 → else branch
//   - res = 15 (better candidate, update res)
//   - root = root.right (18)
//
// Iteration 3: root = 18 (not null)
//   - 18 > 16 → else if branch
//   - root = root.left (null)
//
// Iteration 4: root = null → loop exits
//
// Return: res = 15
// Result: Floor(16) = 15 ✓
//
// Explanation: 15 is the largest value in the tree that is <= 16

// Additional examples with execution traces:

// Example 1: Floor(12) - Exact match
// Execution trace:
// - Iteration 1: root = 10, 10 < 12 → res = 10, go right to 15
// - Iteration 2: root = 15, 15 > 12 → go left to 12
// - Iteration 3: root = 12, 12 === 12 → return 12
// Result: Floor(12) = 12 (exact match)

// Example 2: Floor(8) - Between 7 and 10
// Execution trace:
// - Iteration 1: root = 10, 10 > 8 → go left to 5
// - Iteration 2: root = 5, 5 < 8 → res = 5, go right to 7
// - Iteration 3: root = 7, 7 < 8 → res = 7, go right to null
// - Loop exits, return res = 7
// Result: Floor(8) = 7 (largest value <= 8)

// Example 3: Floor(1) - Smaller than all values
// Execution trace:
// - Iteration 1: root = 10, 10 > 1 → go left to 5
// - Iteration 2: root = 5, 5 > 1 → go left to 2
// - Iteration 3: root = 2, 2 > 1 → go left to null
// - Loop exits, return res = null
// Result: Floor(1) = null (no value <= 1 exists)

// Example 4: Floor(20) - Larger than all values
// Execution trace:
// - Iteration 1: root = 10, 10 < 20 → res = 10, go right to 15
// - Iteration 2: root = 15, 15 < 20 → res = 15, go right to 18
// - Iteration 3: root = 18, 18 < 20 → res = 18, go right to null
// - Loop exits, return res = 18
// Result: Floor(20) = 18 (largest value in tree, which is <= 20)

console.log("Floor of 16:", bst.Floor(bst.root, 16));
console.log("Floor of 12:", bst.Floor(bst.root, 12));
console.log("Floor of 8:", bst.Floor(bst.root, 8));
console.log("Floor of 1:", bst.Floor(bst.root, 1));
console.log("Floor of 20:", bst.Floor(bst.root, 20));
