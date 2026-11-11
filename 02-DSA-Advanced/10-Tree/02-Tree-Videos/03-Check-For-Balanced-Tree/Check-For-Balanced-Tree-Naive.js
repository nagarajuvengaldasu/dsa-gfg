/**
 * Check For Balanced Tree (Naive)
 * Tree is balanced if |left_height - right_height| <= 1 for every node.
 * Naive: Compute height separately for each node → O(n) per node, O(n²) total.
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 * isBalanced(root) - Returns true if tree is height-balanced
 *
 * EXECUTION:
 * 1. null → true (empty tree is balanced)
 * 2. Get lh = height(left), rh = height(right)
 * 3. Check |lh-rh| <= 1 and both subtrees balanced
 */
function isBalanced(root) {
  // STEP 1: Empty tree is balanced
  if (root === null) {
    return true;
  }
  // STEP 2: Get heights of left and right subtrees
  let lh = height(root.left);
  let rh = height(root.right);
  // STEP 3: Balance check at root AND recursively for both subtrees
  return (
    Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  );
}

/**
 * height(root) - Returns height of tree (0 for null)
 * EXECUTION: 1 + max(height(left), height(right))
 */
function height(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

/**
 * STEP-BY-STEP EXECUTION for tree:
 *         10
 *       /    \
 *     20      30
 *    /  \    /  \
 *  40  50  60  70
 *
 * isBalanced(10):
 *   lh = height(20) = 2, rh = height(30) = 2
 *   |2-2| <= 1 ✓
 *   isBalanced(20) ✓, isBalanced(30) ✓
 *
 * height(20): 1 + max(height(40), height(50)) = 1 + 1 = 2
 * height(30): 1 + max(1, 1) = 2
 *
 * Result: true
 */

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(isBalanced(root));
