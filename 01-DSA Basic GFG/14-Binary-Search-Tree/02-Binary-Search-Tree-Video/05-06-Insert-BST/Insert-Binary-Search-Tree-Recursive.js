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
   * Insert a key into BST (Recursive Approach)
   *
   * Example: Inserting key 7 into tree with root 10
   * Initial tree structure:
   *         10
   *        /  \
   *       5    20
   *
   * After insertion:
   *         10
   *        /  \
   *       5    20
   *        \
   *         7
   *
   * Step-by-step execution:
   */
  insert(root, key) {
    // Step 1: Base case - if root is null
    // This means we've reached the correct position to insert
    // Create and return a new node with the key
    if (root === null) {
      return new Node(key);
    }
    // Step 2: If key already exists in the tree
    // BST doesn't allow duplicates, so return the existing node
    // No insertion needed
    else if (root.data === key) {
      return root;
    }
    // Step 3: If key is less than current node's data
    // According to BST property: left subtree contains smaller values
    // Recursively insert in the left subtree
    else if (root.data > key) {
      // Step 4: Recursive call to insert in left subtree
      // This will traverse down the left path until base case is reached
      // The result (new node or updated subtree) is assigned to root.left
      root.left = this.insert(root.left, key);
    }
    // Step 5: If key is greater than current node's data
    // According to BST property: right subtree contains larger values
    // Recursively insert in the right subtree
    else {
      // Step 6: Recursive call to insert in right subtree
      // This will traverse down the right path until base case is reached
      // The result (new node or updated subtree) is assigned to root.right
      root.right = this.insert(root.right, key);
    }

    // Step 7: Return the current node (with updated left/right subtrees)
    // This maintains the tree structure as we backtrack from recursion
    // The returned node is used to update the parent's left or right pointer
    return root;
  }
}

/**
 * Test case with step-by-step execution trace
 *
 * Initial tree structure:
 *         10
 *        /  \
 *       5    20
 */
let bst = new BinarySearchTree();

// Step 1: Create initial BST structure
bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(15);
bst.root.right.left = new Node(12);
bst.root.right.right = new Node(18);

// Step 2: Insert key 7
// IMPORTANT: Always assign the result back to bst.root
// This ensures the tree structure is properly maintained
// Execution trace for insert(root=10, key=7):
// - insert(10, 7): 10 > 7, go left → root.left = insert(5, 7)
//   - insert(5, 7): 5 < 7, go right → root.right = insert(null, 7)
//     - insert(null, 7): root is null → return new Node(7)
//   - root.right = Node(7), return Node(5)
// - root.left = Node(5), return Node(10)
// Result: Node(10) with updated left subtree

// After insertion, tree structure:
//         10
//        /  \
//       5    20
//        \
//         7

// Additional execution traces for different keys:

// Execution trace for insert(root=10, key=15):
// - insert(10, 15): 10 < 15, go right → root.right = insert(20, 15)
//   - insert(20, 15): 20 > 15, go left → root.left = insert(null, 15)
//     - insert(null, 15): root is null → return new Node(15)
//   - root.left = Node(15), return Node(20)
// - root.right = Node(20), return Node(10)
// Result: Node(10) with updated right subtree

// Execution trace for insert(root=10, key=10):
// - insert(10, 10): 10 === 10 → return Node(10) (no change, duplicate)
// Result: Node(10) (unchanged, duplicate not inserted)

// FIXED: Assign result back to bst.root to maintain tree structure
bst.root = bst.insert(bst.root, 20);
console.log(bst.root);
