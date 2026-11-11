class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  let st = [];
  let curr = root;
  while (curr !== null || st.length > 0) {
    while (curr !== null) {
      st.push(curr);
      curr = curr.left;
    }
    curr = st.pop();
    console.log(curr.data);
    curr = curr.right;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
inorderTraversal(root);
