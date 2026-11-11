class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findCommonNodes(root1, root2) {
  let a = [];
  let b = [];
  let res = [];
  function inorder(node, arr) {
    if (node === null) {
      return;
    }
    inorder(node.left, arr);
    arr.push(node.data);
    inorder(node.right, arr);
  }
  inorder(root1, a);
  inorder(root2, b);

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      res.push(a[i]);
      i++;
      j++;
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
}
let root1 = new Node(10);
root1.left = new Node(20);
root1.right = new Node(30);
root1.left.left = new Node(40);
root1.left.right = new Node(50);
root1.right.left = new Node(60);
root1.right.right = new Node(70);
let root2 = new Node(10);
root2.left = new Node(20);
root2.right = new Node(30);
root2.left.left = new Node(40);
root2.left.right = new Node(50);
root2.right.left = new Node(60);
root2.right.right = new Node(70);
console.log(findCommonNodes(root1, root2));
