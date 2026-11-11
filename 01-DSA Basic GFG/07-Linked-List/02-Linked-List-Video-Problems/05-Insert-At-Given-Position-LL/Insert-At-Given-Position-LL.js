class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function InsertPosition(head, pos, x) {
  // first we need to create the new node to insert
  let temp = new Node(x);
  // if the position is 1 then we need to insert the new node at the head
  if (pos === 1) {
    // connecting the new node to the head
    temp.next = head;
    // returning the new node
    return temp;
  }
  // if the position is not 1 then we need to insert the 
  // new node after the given position
  let curr = head;
  // traversing the linked list to the given position -2 
  // because we need to insert the new node after the given position
  for (let i = 1; i <= pos - 2 && curr != null; i++) {
    curr = curr.next;
  }
  // if the current node is null then we need to return the head
  if (curr === null) {
    // if the current node is null then we need to return the head
    return head;
  }
  // connecting the new node to the next node of the current node
  temp.next = curr.next;
  // connecting the new node to the current node
  curr.next = temp;
  // returning the head of the linked list
  return head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(40);
head.next.next.next = new Node(50);
let pos = 3;
let x = 30;
head = InsertPosition(head, pos, x);
let curr = head;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
