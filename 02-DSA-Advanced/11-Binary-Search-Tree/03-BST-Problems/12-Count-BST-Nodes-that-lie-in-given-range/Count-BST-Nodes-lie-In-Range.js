class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function getcount(root, l, h) {
  if (root === null) {
    return 0;
  }
  if (root.data < l) {
    return getcount(root.right, l, h);
  }
  if (root.data > h) {
    return getcount(root.left, l, h);
  }
  return 1 + getcount(root.left, l, h) + getcount(root.right, l, h);
}
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(18);
console.log(getcount(root, 7, 15));
