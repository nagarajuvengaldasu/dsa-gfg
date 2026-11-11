/**
 * Count Nodes in Complete Binary Tree (Optimal) - O(log²n)
 * If left-depth === right-depth: perfect tree → 2^h - 1 nodes
 * Else: recurse left + right + 1
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function countNodes(root) {
  let ld = 0, rd = 0;
  for (let curr = root; curr !== null; curr = curr.left) ld++;
  for (let curr = root; curr !== null; curr = curr.right) rd++;
  if (ld === rd) return (1 << ld) - 1;  // perfect: 2^ld - 1
  return 1 + countNodes(root.left) + countNodes(root.right);
}

/**
 * EXECUTION for tree: 10(20(40,50), 30(60,70))
 * countNodes(10): ld=3 (10→20→40), rd=3 (10→30→70). ld===rd → (1<<3)-1 = 7
 * Output: 7
 */
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(countNodes(root));
