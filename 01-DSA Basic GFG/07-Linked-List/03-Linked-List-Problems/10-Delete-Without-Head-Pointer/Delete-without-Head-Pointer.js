class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function deleteNode(delnode) {
  // copy the data of the next node to the current node
  delnode.data = delnode.next.data;
  // skip / delete the next node
  delnode.next = delnode.next.next;
}
// without using the head i need to delete the node
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
// i want to delete the node 3
deleteNode(head.next);
// print the linked list
let curr = head;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
