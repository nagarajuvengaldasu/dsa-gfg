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
  let curr = head;
  do {
    console.log(curr.data);
    curr = curr.next;
  } while (curr !== head);
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = head;
printList(head);
