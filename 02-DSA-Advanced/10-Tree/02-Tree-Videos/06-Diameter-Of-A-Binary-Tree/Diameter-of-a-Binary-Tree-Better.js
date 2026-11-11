/**
 * Diameter of Binary Tree (Better) - O(n) time, O(n) aux space
 * Step 1: Precompute heights in a Map (Node → height) in O(n)
 * Step 2: diameter() uses map for O(1) height lookup
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// fillHeightMap: postorder, store each node's height in m
function fillHeightMap(root, m) {
  if (root === null) return 0;
  let h = 1 + Math.max(
    fillHeightMap(root.left, m),
    fillHeightMap(root.right, m)
  );
  m.set(root, h);
  return h;
}

// diameter: use m.get() for O(1) height; d=1+lh+rh, max(d, diam(left), diam(right))
function diameter(root, m) {
  if (root === null) return 0;
  let lh = root.left ? m.get(root.left) : 0;
  let rh = root.right ? m.get(root.right) : 0;
  let d = 1 + lh + rh;
  return Math.max(d, diameter(root.left, m), diameter(root.right, m));
}

function diameterBetter(root) {
  let m = new Map();
  fillHeightMap(root, m);
  return diameter(root, m);
}

/**
 * EXECUTION: tree 10(30(40(60),50(,70)))
 * fillHeightMap: m = {60:1, 70:1, 40:2, 50:2, 30:4, 10:5}
 * diameter(10,m): lh=4, rh=0, d=5, max(5, diam(30), 0)=5
 * diameter(30,m): lh=2, rh=2, d=5, max(5, 2, 2)=5
 * Output: 5
 */
let root = new Node(10);
root.left = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.left.left = new Node(60);
root.left.right.right = new Node(70);
console.log(diameterBetter(root)); // 5 (same tree as Naive)
