/**
 * Count Nodes in Binary Tree (Naive) - O(n)
 * Simple recursion: 1 + count(left) + count(right)
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function countnode(root) {
  if (root === null) return 0;
  return 1 + countnode(root.left) + countnode(root.right);
}

/**
 * EXECUTION for tree: 10(20(40,50), 30(60,70))
 * countnode(10): 1 + countnode(20) + countnode(30)
 *   countnode(20): 1 + countnode(40) + countnode(50) = 1+1+1 = 3
 *   countnode(30): 1 + countnode(60) + countnode(70) = 1+1+1 = 3
 * countnode(10) = 1 + 3 + 3 = 7
 * Output: 7
 */
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(countnode(root));
