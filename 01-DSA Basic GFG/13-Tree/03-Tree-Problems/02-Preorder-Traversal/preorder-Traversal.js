class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root) {
  if(root === null){
    return;
  }
  console.log(root.data);
  preorderTraversal(root.left);
  preorderTraversal(root.right);
}

let root = new Node(9);
root.left = new Node(12);
root.right = new Node(3);
root.left.left = new Node(42);
root.left.right = new Node(95);
root.right.left = new Node(46);
root.right.right = new Node(79);
preorderTraversal(root);
