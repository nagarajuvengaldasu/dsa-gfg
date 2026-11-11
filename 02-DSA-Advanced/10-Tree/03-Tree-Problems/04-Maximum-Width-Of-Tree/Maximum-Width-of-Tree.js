class Node {
  constructor(data) {
    this.data = data;        // Store node value
    this.left = null;        // Left child pointer
    this.right = null;       // Right child pointer
  }
}

function findMinWidth(root) {
  if (root === null) {
    return 0;                // Empty tree has width 0
  }
  let queue = [];            // BFS queue for level-order traversal
  queue.push(root);          // Start with root
  let maxwidth = 0;          // Track max nodes in any level (width)
  while (queue.length > 0) {
    let levelsize = queue.length;           // Nodes in current level
    maxwidth = Math.max(maxwidth, queue.length);  // Update max width
    for (let i = 0; i < levelsize; i++) {
      let node = queue.shift();   // Dequeue front node
      if (node.left) {
        queue.push(node.left);    // Enqueue left child
      }
      if (node.right) {
        queue.push(node.right);   // Enqueue right child
      }
    }
  }
  return maxwidth;           // Return maximum level width
}

// Build tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(findMinWidth(root));  // Log max width (e.g. 4 for level 2)
