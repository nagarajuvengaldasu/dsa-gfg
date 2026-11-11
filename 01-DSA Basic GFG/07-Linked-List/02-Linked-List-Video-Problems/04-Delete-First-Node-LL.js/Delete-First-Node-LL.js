class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function deleteFirst(head) {
  // if the head is null then we need to return the head
  if (head === null) {
    return head;
  }
  // if the head is not null then we need to delete the first node
  // we need to return the next node of the head
  // because the first node is deleted and the next node is the new head
  return head.next;
}
// creating the linked list
let head = new Node(10);
// connecting the nodes
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
// printing the linked list
let curr = head;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
// deleting the first node
head = deleteFirst(head);
// printing the linked list
console.log("After deleting the first node");
let curr1 = head;
while (curr1 !== null) {
  console.log(curr1.data);
  curr1 = curr1.next;
}
