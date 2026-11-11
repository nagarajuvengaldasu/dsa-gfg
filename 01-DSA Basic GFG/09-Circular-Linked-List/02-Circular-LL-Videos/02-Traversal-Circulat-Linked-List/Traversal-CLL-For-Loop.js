class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function printList(head) {
  if (head === null) {
    return;
  }
  console.log(head.data);
  for (let curr = head.next; curr !== head; curr = curr.next) {
    console.log(curr.data);
  }
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = head;
printList(head);