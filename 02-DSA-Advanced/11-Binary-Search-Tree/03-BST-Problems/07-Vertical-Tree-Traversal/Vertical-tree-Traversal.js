/*
 * PROBLEM STATEMENT:
 * Vertical order traversal: group all nodes by their "vertical line" (horizontal distance).
 * Root has hd = 0; left child = hd - 1, right child = hd + 1.
 * Return an array of arrays: each inner array is one vertical line, left to right (minHd to maxHd).
 *
 * Approach: BFS with (node, horizontalDistance). Map hd → list of node values; then output in hd order.
 */

// Tree node: data and left/right children
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function verticalTreeTraversal(root) {
  // Empty tree → no vertical lines
  if (root === null) {
    return [];
  }
  // map: horizontal distance (hd) → array of node values in that vertical line
  let map = new Map();
  // BFS queue: each entry is [node, its horizontal distance]
  let queue = [];
  // Start with root at hd = 0
  queue.push([root, 0]);

  // Track min/max hd so we can output vertical lines in order (left to right)
  let minHd = 0;
  let maxHd = 0;

  // BFS: process nodes level by level
  while (queue.length > 0) {
    // Dequeue: take next [node, hd]
    let [node, hd] = queue.shift();
    // Ensure we have an array for this hd
    if (!map.has(hd)) {
      map.set(hd, []);
    }
    // Add this node's data to its vertical line
    map.get(hd).push(node.data);

    // Update range of hd we've seen
    minHd = Math.min(minHd, hd);
    maxHd = Math.max(maxHd, hd);

    // Enqueue left child with hd - 1 (one column to the left)
    if (node.left !== null) {
      queue.push([node.left, hd - 1]);
    }
    // Enqueue right child with hd + 1 (one column to the right)
    if (node.right !== null) {
      queue.push([node.right, hd + 1]);
    }
  }
  // Build result: one array per vertical line, from leftmost (minHd) to rightmost (maxHd)
  let result = [];
  for (let i = minHd; i <= maxHd; i++) {
    result.push(map.get(i));
  }
  return result;
}

/*
 * EXAMPLE TREE:         1 (hd=0)
 *                     /   \
 *              2(-1)        3(1)
 *             /   \        /   \
 *          4(-2)  5(0)  6(0)  7(2)
 *
 * EXECUTION TRACE (BFS):
 * Initial: queue = [[1,0]], map = {}, minHd=0, maxHd=0
 * Step 1:  [1,0] → map[0]=[1], queue += [2,-1],[3,1]   → minHd=-1, maxHd=1
 * Step 2:  [2,-1]→ map[-1]=[2], queue += [4,-2],[5,0]  → minHd=-2, maxHd=1
 * Step 3:  [3,1] → map[1]=[3], queue += [6,0],[7,2]    → minHd=-2, maxHd=2
 * Step 4:  [4,-2]→ map[-2]=[4]                         → minHd=-2
 * Step 5:  [5,0] → map[0]=[1,5]
 * Step 6:  [6,0] → map[0]=[1,5,6]
 * Step 7:  [7,2] → map[2]=[7]
 * Result: [ [-2]->[4], [-1]->[2], [0]->[1,5,6], [1]->[3], [2]->[7] ]
 * Output: [[4], [2], [1, 5, 6], [3], [7]]
 */
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(verticalTreeTraversal(root));  // [[4], [2], [1, 5, 6], [3], [7]]
