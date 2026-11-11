class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function Inorder(root){
  
}
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(Inorder(root));