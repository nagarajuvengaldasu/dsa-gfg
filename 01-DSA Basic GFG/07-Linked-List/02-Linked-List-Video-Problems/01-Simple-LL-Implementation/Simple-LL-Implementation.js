class node{
  constructor(data){
    this.data= data;
    this.next=null;
  }
}
// // creating the nodes
// let temp1= new Node(10);
// let temp2 = new Node(20);
// let temp3= new Node(30);
// // connecting the nodes
// temp1.next = temp2;
// temp2.next = temp3;
// head=temp1;


// second approach;
// both creating and connecting the nodes.
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
