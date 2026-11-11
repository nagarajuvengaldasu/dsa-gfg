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
   * Search for a key in BST (Iterative Approach)
   *
   * Example: Searching for key 7 in tree with root 10
   * Tree structure:
   *         10
   *        /  \
   *       5    15
   *      / \  /  \
   *     2  7 12  17
   *
   * Step-by-step execution:
   */
  Search(root, key) {
    // Step 1: Start iterative loop
    // Continue searching while current node is not null
    // This loop will traverse down the tree until we find the key or reach a null node
    while (root !== null) {
      // Step 2: Check if current node's data matches the key
      // If found, return true immediately (key found)
      if (root.data === key) {
        return true;
      }
      // Step 3: If key is less than current node's data
      // According to BST property: left subtree contains smaller values
      // Move to left child for next iteration
      else if (root.data > key) {
        // Step 4: Update root to point to left child
        // This moves us down the left path in the tree
        root = root.left;
      }
      // Step 5: If key is greater than current node's data
      // According to BST property: right subtree contains larger values
      // Move to right child for next iteration
      else {
        // Step 6: Update root to point to right child
        // This moves us down the right path in the tree
        root = root.right;
      }
      // Step 7: Loop continues with new root value
      // If root becomes null, loop exits and we proceed to Step 8
    }

    // Step 8: If we exit the loop, it means root became null
    // This indicates we've reached the end of a path without finding the key
    // Return false (key not found)
    return false;
  }
}

/**
 * Test case with step-by-step execution trace
 *
 * Tree structure:
 *         10
 *        /  \
 *       5    15
 *      / \  /  \
 *     2  7 12  17
 */
let bst = new BinarySearchTree();

// Step 1: Create BST structure
bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(15);
bst.root.left.left = new Node(2);
bst.root.left.right = new Node(7);
bst.root.right.left = new Node(12);
bst.root.right.right = new Node(17);

// Step 2: Search for key 10
// Execution trace for Search(root=10, key=10):
// - Iteration 1: root = 10, root !== null → continue
//   - root.data (10) === key (10) → return true
// Result: true (found at root)

// Additional execution traces for different keys:

// Execution trace for Search(root=10, key=7):
// - Iteration 1: root = 10, root !== null → continue
//   - root.data (10) !== key (7), 10 > 7 → root = root.left (5)
// - Iteration 2: root = 5, root !== null → continue
//   - root.data (5) !== key (7), 5 < 7 → root = root.right (7)
// - Iteration 3: root = 7, root !== null → continue
//   - root.data (7) === key (7) → return true
// Result: true (found at node 7)

// Execution trace for Search(root=10, key=12):
// - Iteration 1: root = 10, root !== null → continue
//   - root.data (10) !== key (12), 10 < 12 → root = root.right (15)
// - Iteration 2: root = 15, root !== null → continue
//   - root.data (15) !== key (12), 15 > 12 → root = root.left (12)
// - Iteration 3: root = 12, root !== null → continue
//   - root.data (12) === key (12) → return true
// Result: true (found at node 12)

// Execution trace for Search(root=10, key=20):
// - Iteration 1: root = 10, root !== null → continue
//   - root.data (10) !== key (20), 10 < 20 → root = root.right (15)
// - Iteration 2: root = 15, root !== null → continue
//   - root.data (15) !== key (20), 15 < 20 → root = root.right (17)
// - Iteration 3: root = 17, root !== null → continue
//   - root.data (17) !== key (20), 17 < 20 → root = root.right (null)
// - Loop exits: root === null
// - Return false
// Result: false (key not found)

console.log(bst.Search(bst.root, 10));
