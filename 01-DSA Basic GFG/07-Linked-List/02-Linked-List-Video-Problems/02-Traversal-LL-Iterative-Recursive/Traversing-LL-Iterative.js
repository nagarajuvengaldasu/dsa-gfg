//declaration of the node 
class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}
//traversing the linked list using the while loop
function traversing(head){
  //initializing the current node to the head 
   // why we are assigning the head to the current node?
   // because we want to start traversing from the head of the linked list. 
   // why we cant use direct head only tell me in detail?
   // because we want to traverse the linked list using the current node.
   // if we use direct head then we will not be able to traverse the linked list.
   // because head is the starting point of the linked list and we want to traverse the linked list from the starting point.
   // so we are assigning the head to the current node.
   // and then we are traversing the linked list using the current node.
   // and then we are printing the data of the current node.
   // and then we are assigning the next node to the current node.
   // and then we are traversing the linked list using the current node.
  let curr=head;
  //traversing the linked list using the while loop
  while(curr !== null){
    //printing the data of the current node
    console.log(curr.data);
    curr=curr.next;
  }
}
//creating the linked list
let head = new Node(10);
head.next=new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
traversing(head);