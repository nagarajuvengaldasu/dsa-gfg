/*
 * PROBLEM STATEMENT:
 * Given a BST and a key, find the minimum absolute difference between the key
 * and any node value in the tree. If the key exists in the tree, return 0.
 *
 * Approach: Walk from root toward key (BST search). At each node, update minimum
 * difference seen; go left if key < node, right if key > node; if key === node return 0.
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function closestInBST(root, key) {
  let mindiff = Infinity;   // smallest |node.data - key| seen so far
  let current = root;       // current node in the walk

  while (current !== null) {
    // update minimum difference with current node
    mindiff = Math.min(mindiff, Math.abs(current.data - key));
    if (key < current.data) {
      current = current.left;   // key is smaller, go left
    } else if (key > current.data) {
      current = current.right;  // key is larger, go right
    } else {
      return 0;                 // exact match: closest possible difference is 0
    }
  }
  return mindiff;  // key not found; return best difference we saw on the path
}

/*
 * EXAMPLE TREE:       10
 *                    /   \
 *                   5    15
 *                  / \   / \
 *                 2  7  12 17
 *
 * EXECUTION TRACE for key = 16:
 * current=10 → mindiff=min(∞,6)=6; 16>10 → current=15
 * current=15 → mindiff=min(6,1)=1; 16>15 → current=17
 * current=17 → mindiff=min(1,1)=1; 16<17 → current=null
 * return 1  (closest value is 15 or 17, diff = 1)
 */
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(17);
console.log(closestInBST(root, 16));  // 1
