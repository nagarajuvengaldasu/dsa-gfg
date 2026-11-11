// Node class to represent a BST node
class Node {
  constructor(data) {
    this.data = data; // FIXED: Changed this.root to this.data
    this.left = null;
    this.right = null;
  }
}

/**
 * Ceil function: Find the smallest value in BST that is >= key
 *
 * DEFINITION:
 * Ceil of a key is the smallest value in the BST that is greater than or equal to the key.
 * If key exists in tree, ceil = key
 * If key doesn't exist, ceil = smallest value larger than key
 * If no such value exists, return -1
 *
 * Time Complexity: O(h) where h is height of tree
 * Space Complexity: O(1)
 */
function Ceil(root, key) {
  // Initialize result to -1 (indicates no ceil found)
  let res = -1;

  // Traverse the tree
  while (root !== null) {
    // If exact match found, return immediately
    if (root.data === key) {
      return root.data;
    }
    // If current node is greater than key
    // This node is a candidate for ceil (it's >= key)
    // But we should check left subtree for a smaller value that's still >= key
    else if (root.data > key) {
      res = root.data; // Save as potential ceil
      root = root.left; // Go left to find smaller value >= key
    }
    // If current node is less than key
    // We need a larger value, so go to right subtree
    else {
      root = root.right;
    }
  }

  // Return result (-1 if no ceil found, otherwise the ceil value)
  return res;
}

// Test case
// Tree structure:
//           10
//          /  \
//         5    15
//        / \  /  \
//       2  7 12  18
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(18);

// Test: Ceil of 14
// Expected: 15 (smallest value >= 14)
console.log("Ceil of 14:", Ceil(root, 14)); // Should return 15

// Additional test cases:
console.log("Ceil of 12:", Ceil(root, 12)); // Should return 12 (exact match)
console.log("Ceil of 8:", Ceil(root, 8)); // Should return 10 (smallest >= 8)
console.log("Ceil of 20:", Ceil(root, 20)); // Should return -1 (no value >= 20)
