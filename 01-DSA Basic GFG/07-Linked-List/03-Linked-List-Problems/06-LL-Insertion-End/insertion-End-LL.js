class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function InsertionEnd(head, x) {
  let temp = new Node(x);
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = temp;
  temp.next = null;
  return head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
let newHead = InsertionEnd(head, 60);
let curr = newHead;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
