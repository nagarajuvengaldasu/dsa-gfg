class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function inorderTraversal(root) {
  if (root === null) {
    return;
  }
  inorderTraversal(root.left);
  console.log(root.data);
  inorderTraversal(root.right);
}
let root = new Node(9);
root.left = new Node(12);
root.right = new Node(3);
root.left.left = new Node(42);
root.left.right = new Node(95);
inorderTraversal(root);