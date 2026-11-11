/**
 * Check For Balanced Tree (Optimal)
 * Single pass: return -1 if unbalanced, else return height.
 * Time: O(n), Space: O(h)
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 * isbal(root) - Wrapper: returns true if balanced, false otherwise
 * EXECUTION: isBalanced returns -1 for unbalanced, else height
 */
function isbal(root) {
  if (isBalanced(root) === -1) {
    return false;
  }
  return true;
}

/**
 * isBalanced(root) - Returns -1 if unbalanced, else height
 *
 * EXECUTION per node:
 * 1. null → 0 (height of empty tree)
 * 2. lh = isBalanced(left), if -1 propagate -1
 * 3. rh = isBalanced(right), if -1 propagate -1
 * 4. If |lh-rh| > 1 → return -1 (unbalanced)
 * 5. Else return max(lh,rh)+1 (balanced, return height)
 */
function isBalanced(root) {
  if (root === null) {
    return 0; // height of empty tree
  }
  let lh = isBalanced(root.left);
  if (lh === -1) return -1;
  let rh = isBalanced(root.right);
  if (rh === -1) return -1;
  if (Math.abs(lh - rh) > 1) {
    return -1; // unbalanced
  }
  return Math.max(lh, rh) + 1; // balanced, return height
}

/**
 * STEP-BY-STEP EXECUTION for tree:
 *         18
 *       /    \
 *     20      4
 *    /  \
 *  70   13
 *
 * isBalanced(18):
 *   lh = isBalanced(20): lh=1, rh=1, |1-1|<=1 → return 2
 *   rh = isBalanced(4): null→0, null→0, return 1
 *   |2-1| = 1 <= 1 → return max(2,1)+1 = 3
 *
 * isBalanced returns 3 (not -1) → isbal returns true
 */

let node = new Node(18);
node.left = new Node(20);
node.right = new Node(4);
node.left.left = new Node(70);
node.left.right = new Node(13);
console.log(isbal(node)); // true = balanced, false = unbalanced
