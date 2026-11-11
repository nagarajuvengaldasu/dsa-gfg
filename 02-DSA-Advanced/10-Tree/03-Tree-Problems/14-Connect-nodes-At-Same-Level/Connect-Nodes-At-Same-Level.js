class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.nextRight = null;
  }
}
function connectNodes(root) {
  // if the root is null, return
  if (root === null) {
    return;
  }
  // create a queue to store the nodes
  let queue = [];
  // push the root node in the queue
  queue.push(root);
  // process the nodes in the queue
  while (queue.length > 0) {
    // get the size of the queue
    let size = queue.length;
    let prev = null;
    // process the nodes at the current level
    for (let i = 0; i < size; i++) {
      // shift the node from the queue
      let node = queue.shift();
      // if the previous node is not null, then update the nextRight of the previous node to the current node
      if (prev !== null) {
        // update the nextRight of the previous node to the current node
        prev.nextRight = node;
      }
      // update the previous node to the current node
      prev = node;
      // push the children of the node in the queue
      // if the node has left child, push it in the queue
      if (node.left) queue.push(node.left);
      // if the node has right child, push it in the queue
      if (node.right) queue.push(node.right);
    }
    // last node of the level
    prev.nextRight = null;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(connectNodes(root));
