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
   * Insert a key into BST (Iterative Approach)
   *
   * Example: Inserting key 20 into tree with root 10
   * Initial tree structure:
   *         10
   *        /  \
   *       5    15
   *           /  \
   *         12   18
   *
   * After insertion:
   *         10
   *        /  \
   *       5    15
   *           /  \
   *         12   18
   *                \
   *                20
   *
   * Step-by-step execution:
   */
  insert(root, key) {
    // Step 1: Initialize parent pointer to null
    // This will track the parent of the node where we'll insert
    let par = null;

    // Step 2: Initialize current pointer to root
    // This will traverse down the tree to find the insertion point
    let curr = root;

    // Step 3: Start iterative loop to find the correct position
    // Continue until we reach a null node (leaf position)
    while (curr !== null) {
      // Step 4: Update parent to current node
      // This saves the parent before moving to child
      par = curr;

      // Step 5: Check if key already exists
      // If duplicate found, return root without modification
      if (curr.data === key) {
        return root;
      }
      // Step 6: If key is greater than current node's data
      // According to BST property: right subtree contains larger values
      // Move to right child for next iteration
      else if (curr.data < key) {
        // Step 7: Update current to right child
        // This moves us down the right path
        curr = curr.right;
      }
      // Step 8: If key is less than current node's data
      // According to BST property: left subtree contains smaller values
      // Move to left child for next iteration
      else {
        // Step 9: Update current to left child
        // This moves us down the left path
        curr = curr.left;
      }
      // Step 10: Loop continues with new current value
      // If current becomes null, loop exits and we proceed to insertion
    }

    // Step 11: After loop exits, check if tree was empty
    // If parent is null, it means root was null (empty tree)
    if (par === null) {
      // Step 12: Create and return new node as root
      return new Node(key);
    }
    // Step 13: If key is less than parent's data
    // Insert new node as left child of parent
    else if (par.data > key) {
      // Step 14: Create new node and attach as left child
      par.left = new Node(key);
    }
    // Step 15: If key is greater than parent's data
    // Insert new node as right child of parent
    else {
      // Step 16: Create new node and attach as right child
      par.right = new Node(key);
    }

    // Step 17: Return the root node
    // The tree structure has been updated with the new node
    return root;
  }
}
/**
 * Test case with step-by-step execution trace
 *
 * Initial tree structure:
 *         10
 *        /  \
 *       5    15
 *           /  \
 *         12   18
 */
let bst = new BinarySearchTree();

// Step 1: Create initial BST structure
bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(15);
bst.root.right.left = new Node(12);
bst.root.right.right = new Node(18);

// Step 2: Insert key 20
// IMPORTANT: Always assign the result back to bst.root
// This ensures the tree structure is properly maintained
// Execution trace for insert(root=10, key=20):
// - Initialize: par = null, curr = 10
// - Iteration 1: curr = 10 (not null)
//   - par = 10
//   - 10 < 20, go right → curr = 15
// - Iteration 2: curr = 15 (not null)
//   - par = 15
//   - 15 < 20, go right → curr = 18
// - Iteration 3: curr = 18 (not null)
//   - par = 18
//   - 18 < 20, go right → curr = null
// - Loop exits: curr === null
// - par = 18, par.data (18) < key (20) → par.right = new Node(20)
// - Return root (10)
// Result: Node(10) with updated right subtree

// After insertion, tree structure:
//         10
//        /  \
//       5    15
//           /  \
//         12   18
//                \
//                20

// Additional execution traces for different keys:

// Execution trace for insert(root=10, key=7):
// - Initialize: par = null, curr = 10
// - Iteration 1: curr = 10 (not null)
//   - par = 10
//   - 10 > 7, go left → curr = 5
// - Iteration 2: curr = 5 (not null)
//   - par = 5
//   - 5 < 7, go right → curr = null
// - Loop exits: curr === null
// - par = 5, par.data (5) < key (7) → par.right = new Node(7)
// - Return root (10)
// Result: Node(10) with updated left subtree

// Execution trace for insert(root=10, key=10):
// - Initialize: par = null, curr = 10
// - Iteration 1: curr = 10 (not null)
//   - par = 10
//   - 10 === 10 → return root (10)
// Result: Node(10) (unchanged, duplicate not inserted)

// Execution trace for insert(root=null, key=10) - empty tree:
// - Initialize: par = null, curr = null
// - Loop condition: curr === null → loop doesn't execute
// - par === null → return new Node(10)
// Result: new Node(10) (new root for empty tree)

// FIXED: Assign result back to bst.root to maintain tree structure
bst.root = bst.insert(bst.root, 20);
console.log("Inserted 20. Root:", bst.root);
