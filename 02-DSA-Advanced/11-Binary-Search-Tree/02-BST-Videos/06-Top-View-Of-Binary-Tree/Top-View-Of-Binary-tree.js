/*
 * Top View of Binary Tree
 * ------------------------
 * For each vertical line (horizontal distance from root), we want the first
 * node visible when looking from the top.
 *
 * Method:
 * - Do a level-order (BFS) traversal.
 * - Track each node's horizontal distance (hd) from root:
 *     root: 0, left child: hd-1, right child: hd+1.
 * - Use a map from hd -> first node value seen at that hd (topmost).
 * - After BFS, iterate hd from minHd to maxHd and print/return values.
 *
 * Time:  O(n)
 * Space: O(n) for queue + map
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Returns an array with the top view from leftmost hd to rightmost hd
function topView(root) {
  if (root === null) {
    return [];
  }

  // Map: hd -> node.data (first seen at this hd in level-order)
  const hdMap = new Map();
  const queue = [];

  // Each item: { node, hd }
  queue.push({ node: root, hd: 0 });

  let minHd = 0;
  let maxHd = 0;

  while (queue.length > 0) {
    const { node, hd } = queue.shift();

    // Record this hd only the first time we see it (topmost at this vertical line)
    if (!hdMap.has(hd)) {
      hdMap.set(hd, node.data);
      if (hd < minHd) minHd = hd;
      if (hd > maxHd) maxHd = hd;
    }

    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }

  const result = [];
  for (let hd = minHd; hd <= maxHd; hd++) {
    if (hdMap.has(hd)) {
      result.push(hdMap.get(hd));
    }
  }
  return result;
}

// Example tree from the whiteboard:
//          10
//        /    \
//       20     50
//      /      /  \
//     30     40  60
//
// Top view: [30, 20, 10, 50]
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(50);
root.left.left = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

console.log(topView(root)); // [30, 20, 10, 50]

