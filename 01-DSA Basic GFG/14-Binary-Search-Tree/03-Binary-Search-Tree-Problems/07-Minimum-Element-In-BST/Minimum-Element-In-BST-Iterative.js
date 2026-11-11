class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function Minimum(root) {
  while (root !== null) {
    if (root.left === null) {
      return root.data;
    }
    root = root.left;
  }
  return -1;
}
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(18);
console.log(Minimum(root));
