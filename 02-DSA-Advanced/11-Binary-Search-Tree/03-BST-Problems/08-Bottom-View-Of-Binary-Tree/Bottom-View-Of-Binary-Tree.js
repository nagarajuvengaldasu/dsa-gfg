/*
 * PROBLEM STATEMENT:
 * Bottom view of a binary tree: for each vertical line (horizontal distance),
 * return the value of the bottommost node on that line. Output left to right (minHd to maxHd).
 *
 * Approach: BFS with (node, hd). For each hd, keep overwriting with current node's data—
 * so after BFS, map[hd] holds the last (bottommost) node seen on that vertical line.
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function bottomViewOfBinaryTree(root) {
  // Empty tree → no bottom view
  if (root === null) {
    return [];
  }
  // map: horizontal distance (hd) → value of the bottommost node at that hd
  let map = new Map();
  // BFS queue: each entry is [node, its horizontal distance]
  let queue = [];
  let front = 0;  // (unused; loop uses shift until queue is empty)
  queue.push([root, 0]);  // start with root at hd = 0
  let minHd = 0;
  let maxHd = 0;

  // BFS: process nodes level by level; later nodes at same hd overwrite → bottom view
  while (front < queue.length) {
    let [node, hd] = queue.shift();  // dequeue next [node, hd]

    // overwrite: this vertical line now shows this node (last one at hd wins = bottommost)
    map.set(hd, node.data);

    minHd = Math.min(minHd, hd);
    maxHd = Math.max(maxHd, hd);

    if (node.left !== null) {
      queue.push([node.left, hd - 1]);   // left child one column to the left
    }
    if (node.right !== null) {
      queue.push([node.right, hd + 1]);  // right child one column to the right
    }
  }

  // Build result: one value per vertical line, from leftmost to rightmost
  let result = [];
  for (let i = minHd; i <= maxHd; i++) {
    result.push(map.get(i));
  }
  return result;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(bottomViewOfBinaryTree(root));  // [4, 2, 6, 3, 7] — bottom nodes per vertical line
