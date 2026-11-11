/**
 * Diameter (Optimal) - O(n) time, O(h) space
 * height() returns height; side-effect: res = max diameter through each root
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let res = 0;
function height(root) {
  if (root === null) {
    return 0;
  }
  let lh = height(root.left);
  let rh = height(root.right);
  res = Math.max(res, 1 + lh + rh); // diameter through this root
  return 1 + Math.max(lh, rh);
}
function diameter(root) {
  height(root);
  let r = res;
  res = 0;
  return r;
}

/**
 * EXECUTION for tree 10(20(40,50), 30(60,70)):
 * height(10): lh=2, rh=2, res=max(0,5)=5, return 3
 * height(20): res=3, return 2. height(30): res=3, return 2
 * height(40/50/60/70): res=1, return 1
 * diameter -> 5 (path 40-20-10-30-70)
 */
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(diameter(root));
