/**
 * BURN A BINARY TREE FROM A LEAF
 *
 * PROBLEM: Given a binary tree and a leaf node, find the time for the entire
 * tree to burn. Fire starts at the leaf and spreads to adjacent nodes in 1 unit.
 *
 * APPROACH: Postorder recursion. dist[0] = distance from current root to leaf
 * (-1 if leaf not in subtree). Burn time through root = dist + height of other subtree.
 *
 * WHY dist as array: To pass by reference (JS primitives pass by value).
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let res = 0;

/**
 * burnTree(root, leaf, dist)
 * - Returns: height of subtree rooted at root
 * - dist[0]: distance from root to leaf (or -1 if leaf not in subtree)
 * - Updates global res with max burn time found
 */
function burnTree(root, leaf, dist) {
  // STEP 1: Base case - null node
  if (root === null) return 0;

  // STEP 2: Leaf found - set dist[0]=0, return height 1
  if (root.key === leaf) {
    dist[0] = 0;
    return 1;
  }

  // STEP 3: Recurse left and right, get distances and heights
  let ldist = [-1], rdist = [-1];
  let lh = burnTree(root.left, leaf, ldist);
  let rh = burnTree(root.right, leaf, rdist);

  // STEP 4: If leaf in left subtree, update dist and burn time
  if (ldist[0] !== -1) {
    dist[0] = ldist[0] + 1;
    res = Math.max(res, rh + dist[0]);  // path: leaf→root, then down right subtree
  }
  // STEP 5: Else if leaf in right subtree
  else if (rdist[0] !== -1) {
    dist[0] = rdist[0] + 1;
    res = Math.max(res, lh + dist[0]);  // path: leaf→root, then down left subtree
  }

  // STEP 6: Return subtree height
  return Math.max(lh, rh) + 1;
}

/**
 * burnTime(root, leaf) - Wrapper: resets res, calls burnTree, returns result
 */
function burnTime(root, leaf) {
  res = 0;
  burnTree(root, leaf, [-1]);
  return res;
}

/**
 * STEP-BY-STEP EXECUTION for tree (leaf=50):
 *
 * Tree:      10
 *          /   \
 *        20     30
 *       /  \
 *     40   50
 *    /
 *  60
 *
 * burnTree(10): not leaf, recurse
 *   burnTree(20): not leaf
 *     burnTree(40): not leaf
 *       burnTree(60): not leaf, ldist=[-1], rdist=[-1], return 1
 *       burnTree(null): return 0
 *     At 40: neither has leaf, return 2
 *     burnTree(50): LEAF! dist[0]=0, return 1
 *   At 20: rdist[0]=0 (leaf in right). dist[0]=1, res=max(0, 2+1)=3, return 3
 *   burnTree(30): no leaf, return 1
 * At 10: ldist[0]=1 (leaf in left). dist[0]=2, res=max(3, 1+2)=3, return 4
 *
 * burnTime returns res = 3
 */
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.left.left = new Node(60);
console.log(burnTime(root, 50));  // 3
