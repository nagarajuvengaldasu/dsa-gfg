class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function lca(root, n1, n2) {
  if (root === null) {
    return null;
  }
  if (root.data === n1 || root.data === n2) {
    return root;
  }
  let lca1 = lca(root.left, n1, n2);
  let lca2 = lca(root.right, n1, n2);
  if (lca1 !== null && lca2 !== null) {
    return root;
  }
  if (lca1 !== null) {
    return lca1;
  } else {
    return lca2;
  }
}
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
console.log(lca(root, 40, 50));
