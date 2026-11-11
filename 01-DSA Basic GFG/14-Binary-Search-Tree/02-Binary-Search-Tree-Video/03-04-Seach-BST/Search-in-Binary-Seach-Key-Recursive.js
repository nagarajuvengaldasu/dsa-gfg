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
   * Search for a key in BST (Recursive Approach)
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
    // Step 1: Base case - if root is null
    // This means we've reached the end of a path without finding the key
    // Return false (key not found)
    if (root === null) {
      return false;
    }

    // Step 2: Check if current node's data matches the key
    // If found, return true (key found)
    if (root.data === key) {
      return true;
    }

    // Step 3: If key is less than current node's data
    // According to BST property: left subtree contains smaller values
    // Recursively search in the left subtree
    if (root.data > key) {
      // Step 4: Recursive call to search in left subtree
      // This will continue searching down the left path
      // The result will be propagated back up through the recursion
      return this.Search(root.left, key);
    }

    // Step 5: If key is greater than current node's data
    // According to BST property: right subtree contains larger values
    // Recursively search in the right subtree
    // Step 6: Recursive call to search in right subtree
    // This will continue searching down the right path
    // The result will be propagated back up through the recursion
    return this.Search(root.right, key);
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
// - Step 1: root is not null, continue
// - Step 2: root.data (10) === key (10) → return true
// Result: true (found at root)

// Additional execution traces for different keys:

// Execution trace for Search(root=10, key=7):
// - Search(10, 7): 10 > 7, go left → Search(5, 7)
//   - Search(5, 7): 5 < 7, go right → Search(7, 7)
//     - Search(7, 7): 7 === 7 → return true
//   - Return true
// - Return true
// Result: true (found at node 7)

// Execution trace for Search(root=10, key=12):
// - Search(10, 12): 10 < 12, go right → Search(15, 12)
//   - Search(15, 12): 15 > 12, go left → Search(12, 12)
//     - Search(12, 12): 12 === 12 → return true
//   - Return true
// - Return true
// Result: true (found at node 12)

// Execution trace for Search(root=10, key=20):
// - Search(10, 20): 10 < 20, go right → Search(15, 20)
//   - Search(15, 20): 15 < 20, go right → Search(17, 20)
//     - Search(17, 20): 17 < 20, go right → Search(null, 20)
//       - Search(null, 20): root is null → return false
//     - Return false
//   - Return false
// - Return false
// Result: false (key not found)

console.log(bst.Search(bst.root, 10));
