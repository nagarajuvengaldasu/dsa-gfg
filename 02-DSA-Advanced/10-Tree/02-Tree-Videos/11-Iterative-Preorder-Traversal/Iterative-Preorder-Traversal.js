class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function preorderTraversal(root){
  if(root === null){
    return;
  }
  let st = [];
  st.push(root);
  while(st.length > 0){
    let curr = st.pop();
    console.log(curr.data);
    if(curr.right !== null){
      st.push(curr.right);
    }
    if(curr.left !== null){
      st.push(curr.left);
    }
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
preorderTraversal(root);