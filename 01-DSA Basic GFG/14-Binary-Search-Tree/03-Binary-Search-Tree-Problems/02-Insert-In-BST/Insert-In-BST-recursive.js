class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function insertInBST(root, key) {
  if (root === null) {
    return new Node(key);
  } else if (root.data === key) {
    return root.data;
  } else if (root.data > key) {
    root.left = insertInBST(root.left, key);
  } else {
    root.right = insertInBST(root.right, key);
  }
  return root;
}
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);
console.log(insertInBST(root, 8));
