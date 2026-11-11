class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function searchInBST(root, key) {
  while (root !== null) {
    if (root.data == key) {
      return true;
    }
    if (root.data > key) {
      root = root.left;
    }
    root = root.right;
  }
  return false;
}
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);
console.log(searchInBST(root, 8));
