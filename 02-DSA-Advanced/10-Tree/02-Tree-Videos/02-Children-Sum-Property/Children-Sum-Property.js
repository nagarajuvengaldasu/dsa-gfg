/**
 * Children Sum Property
 * Check if for every node, node.key = sum of its children's keys.
 * Leaf nodes (no children) trivially satisfy.
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 * isSum(root) - Returns true if tree satisfies children sum property
 *
 * EXECUTION per node:
 * 1. null → true
 * 2. leaf (no children) → true
 * 3. sum = left.key + right.key (0 if child is null)
 * 4. Return (root.key === sum) && check left subtree && check right subtree
 */
function isSum(root) {
  // STEP 1: Empty tree
  if (root === null) {
    return true;
  }
  // STEP 2: Leaf node - no children, trivially true
  if (root.left === null && root.right === null) {
    return true;
  }
  // STEP 3: Compute sum of children's keys
  let sum = 0;
  if (root.left !== null) {
    sum += root.left.key;
  }
  if (root.right !== null) {
    sum += root.right.key;
  }
  // STEP 4: Check property at root and recursively for both subtrees
  return root.key === sum && isSum(root.left) && isSum(root.right);
}

/**
 * STEP-BY-STEP EXECUTION for tree:
 *         20
 *       /    \
 *      8      12
 *     / \
 *    3   5
 *
 * isSum(20): not leaf, sum = 8+12 = 20, 20===20 ✓
 *   isSum(8): sum = 3+5 = 8, 8===8 ✓
 *     isSum(3): leaf → true
 *     isSum(5): leaf → true
 *   isSum(12): leaf → true
 *
 * Result: true (20=8+12, 8=3+5)
 */

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(12);
root.left.left = new Node(3);
root.left.right = new Node(5);
console.log(isSum(root));
