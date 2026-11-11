class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function Minimum(root) {
  if (root === null) {
    return -1;
  }
  if (root.left === null) {
    return root.data;
  }
  return Minimum(root.left);
}
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(18);
console.log(Minimum(root));
