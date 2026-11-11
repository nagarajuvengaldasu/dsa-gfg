class Node{
  constructor(data){
    this.data= data;
    this.next = null;
  }
}
function insertEnd(head,x){
  // first we need to create the new node to insert
  let temp = new Node(x);
  // if the head is null then we need to insert the new node at the head
  if(head === null){
    return temp;
  }
  // if the head is not null then we need to insert the new node at the end
  let curr = head;
  // traversing the linked list to the last node
  while(curr.next !== null){
    curr = curr.next;
  }
  // connecting the new node to the last node
  curr.next = temp;
  // returning the head of the linked list
  return head;
}
// creating the linked list
let head = null;
// inserting the new node at the end of the linked list
head = insertEnd(head , 10);
head = insertEnd(head , 20);
head = insertEnd(head , 30);
// printing the linked list
let curr = head;
while(curr !== null){
  console.log(curr.data);
  curr = curr.next;
}