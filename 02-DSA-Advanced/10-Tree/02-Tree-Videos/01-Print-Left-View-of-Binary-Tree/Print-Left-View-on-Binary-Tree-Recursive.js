/**
 * Print Left View of Binary Tree (Recursive)
 * Left view = first node of each level when viewed from left.
 * Uses preorder (root, left, right) - visit left before right so first node at each level is printed.
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let maxlevel = 0;

/**
 * printLeftView(root, level) - Print leftmost node of each level
 * EXECUTION: Preorder. If level > maxlevel, this is first time at this depth → print.
 */
function printLeftView(root, level = 1) {
  // STEP 1: Base case - null node
  if (root === null) {
    return;
  }
  // STEP 2: First node at this level? (level > maxlevel)
  if (level > maxlevel) {
    console.log(root.key);  // Print leftmost node of this level
    maxlevel = level;       // Update max level seen
  }
  // STEP 3: Recurse left first (preorder) - ensures we see leftmost first
  printLeftView(root.left, level + 1);
  // STEP 4: Recurse right
  printLeftView(root.right, level + 1);
}

/**
 * STEP-BY-STEP EXECUTION for tree:
 *         10
 *       /    \
 *     20      30
 *    /  \       \
 *  40   50      60
 *
 * maxlevel = 0 initially
 *
 * printLeftView(10, 1): level 1 > 0 → print 10, maxlevel=1
 *   printLeftView(20, 2): level 2 > 1 → print 20, maxlevel=2
 *     printLeftView(40, 3): level 3 > 2 → print 40, maxlevel=3
 *       printLeftView(null) return
 *       printLeftView(null) return
 *     printLeftView(50, 3): level 3 not > 3, skip; recurse null, null
 *   printLeftView(30, 2): level 2 not > 2, skip; recurse null, 60
 *     printLeftView(60, 3): level 3 not > 3, skip; recurse null, null
 *
 * Output: 10, 20, 40
 */

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);
printLeftView(root);
