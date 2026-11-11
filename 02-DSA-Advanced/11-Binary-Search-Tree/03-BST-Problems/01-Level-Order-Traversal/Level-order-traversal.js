class Node {
  constructor(data) {
    this.data = data;   // value stored in the node
    this.left = null;   // left child
    this.right = null;  // right child
  }
}

// Level order (BFS) traversal: visit nodes level by level from left to right
function levelOrderTraversal(node) {
  // If tree is empty, nothing to traverse → return empty array
  if (node === null) {
    return [];
  }

  let result = []; // will store the traversal order
  let queue = [];  // queue for BFS

  // Start with the root node in the queue
  queue.push(node);

  // Process nodes in FIFO order
  while (queue.length > 0) {
    // Remove the front node from the queue
    let current = queue.shift();
    // Record its value in the result
    result.push(current.data);

    // Add left child to queue if it exists
    if (current.left !== null) {
      queue.push(current.left);
    }
    // Add right child to queue if it exists
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  // Return array of values in level-order
  return result;
}

// Build sample tree
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

// Print level-order traversal
console.log(levelOrderTraversal(root));
