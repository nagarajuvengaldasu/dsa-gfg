// problem statement: Given a Binary Search Tree and two values, low and high, print all the keys in the range from low to high in the BST.

// create a node class to create a node of the tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// function to print the keys in the range from low to high in the BST
function keysInRange(root, low, high) {
  // take the result array to store the keys in range
  let result = [];
  // take the inorder function to traverse the tree in inorder manner
  function inorder(node) {
    // if the node is null, return
    if (node === null) {
      return;
    }
    // if the node data is greater than low, then traverse the left subtree
    if (node.data > low) {
      inorder(node.left);
    }
    // if the node data is in range, then push the node data to the result array
    if (node.data >= low && node.data <= high) {
      result.push(node.data);
    }
    // if the node data is less than high, then traverse the right subtree
      if (node.data < high) {
      inorder(node.right);
    } 
  }
  // call the inorder function with the root node
  inorder(root);
  return result;
}
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(keysInRange(root, 20, 50));
