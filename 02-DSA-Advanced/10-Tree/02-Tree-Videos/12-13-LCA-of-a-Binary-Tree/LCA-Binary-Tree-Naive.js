class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findpath(root, path, x) {
  if (root === null) {
    return false;
  }
  path.push(root.data);
  if (root.data === x) {
    return true;
  }
  if (
    (root.left !== null && findpath(root.left, path, x)) ||
    (root.right !== null && findpath(root.right, path, x))
  ) {
    return true;
  }
  path.pop();
  return false;
}

function FindLCA(root, n1, n2) {
  let p1 = [];
  let p2 = [];
  if (!findpath(root, p1, n1) || !findpath(root, p2, n2)) {
    return null;
  }
  for (let i = 0; i < p1.length && i < p2.length; i++) {
    if (p1[i] !== p2[i]) {
      return p1[i - 1];
    }
  }
  return null;
}
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(FindLCA(root, 40, 50));
