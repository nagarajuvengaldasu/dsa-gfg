class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Delete a node from BST - GeeksforGeeks Problem Solution
 *
 * Problem: Given root of BST and value x, delete node with value x.
 * If no node with value x exists, return tree unchanged.
 * Return the root of the tree after deletion.
 *
 * Time Complexity: O(h) where h is height of tree
 * Space Complexity: O(h) for recursive, O(1) for iterative
 *
 * Approach: Recursive deletion handling three cases:
 * 1. Node with no children (leaf)
 * 2. Node with one child
 * 3. Node with two children (use inorder successor)
 *
 * WHY DO WE RETURN ROOT EVERY TIME?
 * ===================================
 * In recursive tree operations, we need to return the modified subtree
 * so that the parent node can update its pointer (left or right child).
 *
 * Example: Deleting node 5 from tree:
 *        10
 *       /  \
 *      5   15
 *
 * When we delete 5, we return null (or its child). The parent (10) needs
 * to update its left pointer: 10.left = deleteBST(5, key)
 *
 * If we don't return the modified root, the parent won't know what to
 * point to after deletion!
 */
function deleteBST(root, key) {
  // ====================================================================
  // STEP 1: Base case - if root is null
  // ====================================================================
  // This means we've reached the end of a path without finding the key
  // Return null to indicate key not found (tree unchanged at this path)
  if (root === null) {
    return null;
  }

  // ====================================================================
  // STEP 2: If key is less than current node's data
  // ====================================================================
  // According to BST property: left subtree contains smaller values
  // We need to search and delete in the left subtree
  if (root.data > key) {
    // Step 2a: Recursively delete from left subtree
    // The recursive call returns the modified left subtree (or null)
    root.left = deleteBST(root.left, key);

    // Step 2b: Return current root
    // WHY? Because the parent of this node needs to know what this subtree
    // looks like after deletion. By returning root, we maintain the tree
    // structure. The parent will update its pointer: parent.left = this root
    return root;
  }
  // ====================================================================
  // STEP 3: If key is greater than current node's data
  // ====================================================================
  // According to BST property: right subtree contains larger values
  // We need to search and delete in the right subtree
  else if (root.data < key) {
    // Step 3a: Recursively delete from right subtree
    // The recursive call returns the modified right subtree (or null)
    root.right = deleteBST(root.right, key);

    // Step 3b: Return current root
    // WHY? Same reason - parent needs to update its right pointer
    // parent.right = this root (with updated right subtree)
    return root;
  }
  // ====================================================================
  // STEP 4: Key found - this is the node to delete
  // ====================================================================
  else {
    // ====================================================================
    // CASE 1: Node with no left child (leaf node or node with only right child)
    // ====================================================================
    if (root.left === null) {
      // Step 4a: Return the right child (or null if it's a leaf)
      //
      // WHY return root.right instead of root?
      // - We're deleting the current node (root)
      // - The parent needs to point to root's right child instead
      // - Example: Deleting leaf node 3
      //   Before: parent -> 3 -> null
      //   After:  parent -> null (or parent -> 3's right child)
      //   By returning root.right, parent.left/right gets updated correctly
      return root.right;
    }
    // ====================================================================
    // CASE 2: Node with no right child (only left child exists)
    // ====================================================================
    else if (root.right === null) {
      // Step 4b: Return the left child
      //
      // WHY return root.left instead of root?
      // - Same reason as Case 1
      // - We're deleting current node, so parent should point to left child
      // - Example: Deleting node 5 which has only left child 3
      //   Before: parent -> 5 -> 3
      //   After:  parent -> 3
      //   By returning root.left, parent's pointer is updated correctly
      return root.left;
    }
    // ====================================================================
    // CASE 3: Node with two children (most complex)
    // ====================================================================
    else {
      // Step 4c: Find inorder successor (minimum value in right subtree)
      // The inorder successor is the smallest value greater than current node
      // It will have at most one child, making it easy to delete
      let successor = getSucc(root.right);

      // Step 4d: Replace current node's data with successor's data
      //
      // WHY replace data instead of replacing the whole node?
      // - We want to maintain the tree structure
      // - By replacing data, we keep the same node but with new value
      // - This preserves all parent-child relationships
      // - Example: Deleting node 10 (has children 5 and 15)
      //   We replace 10's data with 12 (successor), so node 10 becomes node 12
      root.data = successor;

      // Step 4e: Delete the successor node from right subtree
      //
      // WHY delete successor?
      // - We copied its value to current node, so we need to remove
      //   the original successor node to avoid duplicates
      // - The successor will be easy to delete (Case 1 or Case 2)
      root.right = deleteBST(root.right, successor);

      // Step 4f: Return current root (with updated data)
      //
      // WHY return root?
      // - We modified root.data but kept the same node
      // - Parent still points to this node, but now with new value
      // - The tree structure is maintained, only data changed
      return root;
    }
  }
}

/**
 * Helper function to find inorder successor (minimum value in right subtree)
 *
 * Step-by-step execution:
 *
 * Example: Finding successor for node 10
 * Right subtree of 10:
 *         15
 *        /  \
 *      12   18
 *     /
 *    11
 *
 * Execution:
 * - Step 1: Start with curr = 15
 * - Step 2: Check if curr.left (12) !== null → Yes, move left
 * - Step 3: curr = 12
 * - Step 4: Check if curr.left (11) !== null → Yes, move left
 * - Step 5: curr = 11
 * - Step 6: Check if curr.left === null → Yes, stop
 * - Step 7: Return curr.data = 11
 *
 * Result: 11 is the inorder successor (minimum in right subtree)
 */
function getSucc(curr) {
  // Step 1: Continue moving left until we reach the leftmost node
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

/**
 * Test case with step-by-step execution trace
 *
 * Tree structure:
 *           2
 *          / \
 *         1   3
 */
let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

// ====================================================================
// EXAMPLE 1: Delete key 12 (doesn't exist)
// ====================================================================
console.log("=== Example 1: Delete 12 (doesn't exist) ===");
console.log("Before deletion:", root);

// Execution trace for deleteBST(root=2, key=12):
//
// - deleteBST(2, 12):
//   - Step 1: root (2) !== null, continue
//   - Step 2: 2 < 12, go to right subtree
//   - Step 3: root.right = deleteBST(3, 12)
//     - deleteBST(3, 12):
//       - Step 1: root (3) !== null, continue
//       - Step 2: 3 < 12, go to right subtree
//       - Step 3: root.right = deleteBST(null, 12)
//         - deleteBST(null, 12):
//           - Step 1: root === null → return null
//       - Step 3b: 3.right = null, return 3
//     - Step 3b: 2.right = 3, return 2
//
// Result: Tree unchanged (12 not found)
// Root returned: 2 (same tree structure)

let result1 = deleteBST(root, 12);
console.log("After deleting 12:", result1);
console.log("Tree unchanged:", JSON.stringify(result1, null, 2));

// ====================================================================
// EXAMPLE 2: Delete key 3 (leaf node)
// ====================================================================
console.log("\n=== Example 2: Delete 3 (leaf node) ===");
let root2 = new Node(2);
root2.left = new Node(1);
root2.right = new Node(3);
console.log("Before deletion:", root2);

// Execution trace for deleteBST(root=2, key=3):
//
// - deleteBST(2, 3):
//   - Step 1: root (2) !== null, continue
//   - Step 2: 2 < 3, go to right subtree
//   - Step 3: root.right = deleteBST(3, 3)
//     - deleteBST(3, 3):
//       - Step 1: root (3) !== null, continue
//       - Step 4: 3 === 3 → key found!
//       - Case 1: 3.left === null → return 3.right (null)
//     - Step 3b: 2.right = null, return 2
//
// Result: Node 3 deleted
// Root returned: 2 (with right child now null)
//
// WHY return root (2)?
// - The caller (if any) needs the updated tree structure
// - If this was called from parent, parent.right = 2 (updated tree)
// - The root node (2) now has right = null instead of right = 3

let result2 = deleteBST(root2, 3);
console.log("After deleting 3:", result2);
console.log("Result:", JSON.stringify(result2, null, 2));
