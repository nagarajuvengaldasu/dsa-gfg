// Node class to represent a BST node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null; // FIXED: Should be null, not 0
    this.right = null; // FIXED: Should be null, not 0
  }
}

// Binary Search Tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Delete a key from BST (Recursive Approach)
   *
   * ========================================================================
   * THREE CASES OF DELETION IN BINARY SEARCH TREE
   * ========================================================================
   *
   * CASE 1: DELETING A LEAF NODE (Node with no children)
   * -----------------------------------------------------
   * Situation: The node has no left child AND no right child
   * Solution: Simply return null (remove the node)
   *
   * Example Tree:
   *           50
   *          /  \
   *        30    70
   *       /  \   /  \
   *     20   40 60  80
   *
   * Delete node 20 (leaf node):
   * - Search: 50 → 30 → 20 (found)
   * - Check: 20.left === null AND 20.right === null ✓
   * - Action: return null
   * - Result: 30.left becomes null
   *
   * After deletion:
   *           50
   *          /  \
   *        30    70
   *         \   /  \
   *         40 60  80
   *
   *
   * CASE 2: DELETING A NODE WITH ONE CHILD
   * --------------------------------------
   * Situation: Node has either left child OR right child (but not both)
   * Solution: Return the child node (replace node with its child)
   *
   * Example 2a: Delete node 40 (has only right child 45)
   * Tree:
   *           50
   *          /  \
   *        30    70
   *       /  \   /  \
   *     20   40 60  80
   *           \
   *           45
   *
   * - Search: 50 → 30 → 40 (found)
   * - Check: 40.left === null BUT 40.right !== null (has 45)
   * - Action: return 40.right (node 45)
   * - Result: 30.right now points to 45
   *
   * After deletion:
   *           50
   *          /  \
   *        30    70
   *       /  \   /  \
   *     20   45 60  80
   *
   * Example 2b: Delete node 30 (has only left child 20)
   * Tree:
   *           50
   *          /  \
   *        30    70
   *       /     /  \
   *     20    60  80
   *
   * - Search: 50 → 30 (found)
   * - Check: 30.left !== null (has 20) BUT 30.right === null
   * - Action: return 30.left (node 20)
   * - Result: 50.left now points to 20
   *
   * After deletion:
   *           50
   *          /  \
   *        20    70
   *             /  \
   *           60  80
   *
   *
   * CASE 3: DELETING A NODE WITH TWO CHILDREN
   * ------------------------------------------
   * Situation: Node has BOTH left child AND right child
   * Solution:
   *   1. Find inorder successor (minimum value in right subtree)
   *   2. Replace node's value with successor's value
   *   3. Delete the successor node (which will be Case 1 or Case 2)
   *
   * Example: Delete node 50 (root with two children)
   * Initial Tree:
   *           50
   *          /  \
   *        30    70
   *       /  \   /  \
   *     20   40 60  80
   *
   * Step-by-step:
   * 1. Find node 50: Has left child (30) and right child (70) ✓
   * 2. Find inorder successor:
   *    - Go to right child: 70
   *    - Find minimum in right subtree: Go left from 70 → 60
   *    - Inorder successor: 60
   * 3. Replace: 50's value becomes 60
   * 4. Delete original 60: It's a leaf node (Case 1)
   *
   * After deletion:
   *           60
   *          /  \
   *        30    70
   *       /  \     \
   *     20   40    80
   *
   * Why this works:
   * - 60 > all values in left subtree (20, 30, 40)
   * - 60 < all other values in right subtree (70, 80)
   * - BST property is maintained ✓
   *
   *
   * Example: Deleting key 100 from tree
   * Initial tree structure:
   *           40
   *          /  \
   *        20   100
   *         \   /  \
   *         30 70  200
   *            /
   *          60
   *
   * Step-by-step execution:
   */
  deleteBST(root, key) {
    // Step 1: Base case - if root is null
    // This means we've reached the end of a path without finding the key
    // Return null (key not found)
    if (root === null) return null;

    // Step 2: If key is less than current node's data
    // According to BST property: left subtree contains smaller values
    // Recursively search and delete in left subtree
    if (root.data > key) {
      // Step 3: Recursive call to delete in left subtree
      // The result (updated left subtree) is assigned back to root.left
      root.left = this.deleteBST(root.left, key);
    }
    // Step 4: If key is greater than current node's data
    // According to BST property: right subtree contains larger values
    // Recursively search and delete in right subtree
    else if (root.data < key) {
      // Step 5: Recursive call to delete in right subtree
      // The result (updated right subtree) is assigned back to root.right
      root.right = this.deleteBST(root.right, key);
    }
    // Step 6: Key found - current node is the one to delete
    else {
      // ====================================================================
      // CASE 1: Node with no left child
      // This covers:
      //   - Leaf node (both left and right are null)
      //   - Node with only right child
      // ====================================================================
      if (root.left === null) {
        // Step 7: Return right child (or null if it's a leaf node)
        //
        // Example: Delete leaf node 20
        //   - 20.left === null AND 20.right === null
        //   - return null → node is removed
        //
        // Example: Delete node 40 with only right child 45
        //   - 40.left === null BUT 40.right === 45
        //   - return 45 → node 40 is replaced with 45
        //
        // This effectively removes the current node and replaces it with its right child
        // If right child is also null, the node is simply removed
        return root.right;
      }
      // ====================================================================
      // CASE 2: Node with no right child (but has left child)
      // This covers:
      //   - Node with only left child
      // ====================================================================
      else if (root.right === null) {
        // Step 8: Return left child
        //
        // Example: Delete node 30 with only left child 20
        //   - 30.left === 20 BUT 30.right === null
        //   - return 20 → node 30 is replaced with 20
        //
        // This effectively removes the current node and replaces it with its left child
        return root.left;
      }
      // ====================================================================
      // CASE 3: Node with two children (most complex case)
      // This covers:
      //   - Node with both left child AND right child
      // ====================================================================
      else {
        // Step 9: Find inorder successor (minimum value in right subtree)
        //
        // Example: Delete node 50 (has children 30 and 70)
        //   - Go to right child: 70
        //   - Find minimum: Go left from 70 → 60
        //   - Inorder successor: 60
        //
        // The inorder successor is the smallest value greater than current node
        // It will have at most one child (right child), making it easy to delete
        let temp = this.getSucc(root.right);

        // Step 10: Replace current node's data with successor's data
        //
        // Example: Replace 50 with 60
        //   - root.data (50) = temp (60)
        //   - Now node 50 becomes node 60
        //
        // This preserves the BST property because:
        // - Successor (60) is greater than all values in left subtree (20, 30, 40)
        // - Successor (60) is less than all other values in right subtree (70, 80)
        root.data = temp;

        // Step 11: Delete the successor node from right subtree
        //
        // Example: Delete original node 60 from right subtree
        //   - Node 60 is a leaf (no children)
        //   - This falls into Case 1 → easy deletion
        //
        // Since successor is the minimum in right subtree, it will have no left child
        // So deleting it will fall into Case 1 or Case 2 (easy deletion)
        root.right = this.deleteBST(root.right, temp);
      }
    }

    // Step 12: Return the current node (with updated subtrees)
    // This maintains the tree structure as we backtrack from recursion
    return root;
  }

  /**
   * Helper function to find inorder successor
   * Returns the minimum value in the right subtree
   *
   * Example: Finding successor for node 100
   * Right subtree of 100:
   *         70
   *        /
   *      60
   *
   * Step-by-step execution:
   */
  getSucc(curr) {
    // Step 1: Start iterative loop
    // Continue moving left until we reach the leftmost node
    // The leftmost node in right subtree is the inorder successor
    while (curr.left !== null) {
      // Step 2: Move to left child
      // Keep going left to find the minimum value
      curr = curr.left;
    }

    // Step 3: Return the data of leftmost node
    // This is the minimum value in the right subtree
    // This node will have no left child (by definition of being minimum)
    return curr.data;
  }
}

/**
 * Test case with step-by-step execution trace
 *
 * Initial tree structure:
 *           40
 *          /  \
 *        20   100
 *         \   /  \
 *         30 70  200
 *            /
 *          60
 */
let bst = new BinarySearchTree();

// Step 1: Create initial BST structure
bst.root = new Node(40);
bst.root.left = new Node(20);
bst.root.right = new Node(100);
bst.root.left.right = new Node(30);
bst.root.right.right = new Node(200);
bst.root.right.left = new Node(70);
bst.root.right.left.left = new Node(60);

// Step 2: Delete key 100 (node with two children)
// Execution trace for deleteBST(root=40, key=100):
//
// - deleteBST(40, 100): 40 < 100, go right → root.right = deleteBST(100, 100)
//   - deleteBST(100, 100): 100 === 100 → key found!
//     - Node 100 has two children (70 and 200)
//     - Find inorder successor: getSucc(70)
//       - getSucc(70): curr = 70, 70.left (60) !== null → curr = 60
//       - getSucc(60): curr = 60, 60.left === null → return 60
//     - temp = 60
//     - root.data (100) = 60
//     - root.right = deleteBST(70, 60)
//       - deleteBST(70, 60): 70 > 60, go left → root.left = deleteBST(60, 60)
//         - deleteBST(60, 60): 60 === 60 → key found!
//           - Node 60 has no children (leaf node)
//           - root.left === null → return root.right (null)
//         - 70.left = null, return 70
//       - 100.right = 70, return 100
//     - 40.right = 100, return 40
//
// After deletion, tree structure:
//           40
//          /  \
//        20   60
//         \   /  \
//         30 70  200
//
// Result: Node 100 is replaced with 60, and original node 60 is deleted

// Additional execution traces for different cases:

// CASE 1: Delete leaf node (key=30)
// Execution trace for deleteBST(root=40, key=30):
// - deleteBST(40, 30): 40 > 30, go left → root.left = deleteBST(20, 30)
//   - deleteBST(20, 30): 20 < 30, go right → root.right = deleteBST(30, 30)
//     - deleteBST(30, 30): 30 === 30 → key found!
//       - Node 30 has no children (leaf node)
//       - root.left === null → return root.right (null)
//     - 20.right = null, return 20
//   - 40.left = 20, return 40
// Result: Node 30 is deleted (leaf node case)

// CASE 2: Delete node with one child (key=70)
// Execution trace for deleteBST(root=40, key=70):
// - deleteBST(40, 70): 40 < 70, go right → root.right = deleteBST(60, 70)
//   - deleteBST(60, 70): 60 < 70, go right → root.right = deleteBST(70, 70)
//     - deleteBST(70, 70): 70 === 70 → key found!
//       - Node 70 has only left child (60)
//       - root.right === null → return root.left (60)
//     - 60.right = 60, return 60
//   - 40.right = 60, return 40
// Result: Node 70 is replaced with its left child (60)

// FIXED: Assign result back to bst.root to maintain tree structure
bst.root = bst.deleteBST(bst.root, 100);
console.log("After deleting 100:", bst.root);
