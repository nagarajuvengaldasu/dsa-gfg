class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function RemoveDuplicate(head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.data === curr.next.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(20);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(30);
head.next.next.next.next.next = new Node(40);
head.next.next.next.next.next.next = new Node(40);
head.next.next.next.next.next.next.next = new Node(50);
let newHead = RemoveDuplicate(head);
let curr = newHead;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
