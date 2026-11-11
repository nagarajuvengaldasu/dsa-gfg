/**
 * Diameter of Binary Tree (Naive) - O(n²)
 * diameter(root) = max(d, diameter(left), diameter(right))
 * where d = 1 + height(left) + height(right)
 * Naive: height() called repeatedly for overlapping subtrees → O(n²)
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// height: returns subtree height (nodes)
function height(root) {
  if (root === null) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

// diameter: d = 1+lh+rh through root; max of d, diameter(left), diameter(right)
function diameter(root) {
  if (root === null) return 0;
  let d = 1 + height(root.left) + height(root.right);
  return Math.max(d, diameter(root.left), diameter(root.right));
}

/**
 * EXECUTION for tree: 10(30(40(60),50(,70)))
 * diameter(10): d=1+h(30)+h(null)=1+4+0=5, max(5, diam(30), 0)=5
 * diameter(30): d=1+h(40)+h(50)=1+2+2=5, max(5, diam(40), diam(50))=5
 * diameter(40): d=1+1+0=2, diam(60)=1. max=2
 * diameter(50): d=1+0+1=2, diam(70)=1. max=2
 * Output: 5
 */
let root = new Node(10);
root.left = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.left.left = new Node(60);
root.left.right.right = new Node(70);
console.log(diameter(root)); // 5
