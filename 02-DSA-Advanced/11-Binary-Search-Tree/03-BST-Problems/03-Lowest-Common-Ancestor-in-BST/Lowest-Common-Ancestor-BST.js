// problem statement: Given a Binary Search Tree and two values, n1 and n2, find the Lowest Common Ancestor (LCA) of the two values in the BST.

// create a node class to create a node of the tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// function to find the lowest common ancestor of two values in the BST
function lca(root, n1, n2) {
  // take the current node as root
  let curr = root;
  // while the current node is not null
  while (curr !== null) {
    // if the n1 data is less than the current node data and the n2 data is less than the current node data, then move to the left child
    if (n1.data < curr.data && n2.data < curr.data) {
      curr = curr.left;
    }
    // if the n1 data is greater than the current node data and the n2 data is greater than the current node data, then move to the right child
    else if (n1.data > curr.data && n2.data > curr.data) {
      curr = curr.right;
    }
    // if the n1 data is less than the current node data and the n2 data is greater than the current node data, then return the current node
    else {
      return curr;
    }
  }
  // if the current node is null, then return null
  return null;
}
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(lca(root, 40, 50));
