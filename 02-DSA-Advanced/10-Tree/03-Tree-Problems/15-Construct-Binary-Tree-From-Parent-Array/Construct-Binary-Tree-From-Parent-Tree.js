class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function constructBinaryTree(parent) {
  // get the length of the parent array
  let n = parent.length;
  // create an array to store the nodes
  let nodes = new Array(n);

  // create nodes for each index
  for (let i = 0; i < n; i++) {
    // create a new node for each index
    nodes[i] = new Node(i);
  }
  // construct the binary tree
  let root = null;
  for (let i = 0; i < n; i++) {
    // if the parent of the current node is -1, then the current node is the root
    if (parent[i] === -1) {
      // update the root to the current node
      root = nodes[i];
    } else {
      // get the parent node
      let p = nodes[parent[i]];
      // if the left child of the parent is null, then the current node is the left child of the parent
      if (p.left === null) {
        // update the left child of the parent to the current node
        p.left = nodes[i];
      } else {
        // update the right child of the parent to the current node
        p.right = nodes[i];
      }
    }
  }
  // return the root of the binary tree
  return root;
}
// test the function
let parent = [-1, 0, 0, 1, 1, 3, 5];
// print the binary tree
console.log(constructBinaryTree(parent));
