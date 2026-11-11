/*
 * Bottom View of Binary Tree
 * --------------------------
 * For each vertical line (horizontal distance from root), the bottom view
 * contains the node that is visible when looking from the bottom.
 *
 * Method (similar to top view, but overwrite instead of first-only):
 * - Do a level-order (BFS) traversal.
 * - Track each node's horizontal distance (hd) from root:
 *     root: 0, left child: hd-1, right child: hd+1.
 * - Use a map from hd -> latest node value seen at that hd (this will be
 *   the deepest node reached on that vertical line when BFS finishes).
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

// Returns an array with the bottom view from leftmost hd to rightmost hd
function bottomView(root) {
  if (root === null) {
    return [];
  }

  // Map: hd -> node.data (last seen at this hd in level-order = bottommost)
  const hdMap = new Map();
  const queue = [];

  // Each item: { node, hd }
  queue.push({ node: root, hd: 0 });

  let minHd = 0;
  let maxHd = 0;

  while (queue.length > 0) {
    const { node, hd } = queue.shift();

    // For bottom view we overwrite: the last node at this hd is the bottommost
    hdMap.set(hd, node.data);
    if (hd < minHd) minHd = hd;
    if (hd > maxHd) maxHd = hd;

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

// Example tree (same structure often used in vertical / top view examples):
//          10
//        /    \
//       20     50
//      /  \   /  \
//     30  40 60  70
//
// Bottom view: [30, 40, 60, 70]
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(50);
root.left.left = new Node(30);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(70);

console.log(bottomView(root)); // [30, 40, 60, 70]

