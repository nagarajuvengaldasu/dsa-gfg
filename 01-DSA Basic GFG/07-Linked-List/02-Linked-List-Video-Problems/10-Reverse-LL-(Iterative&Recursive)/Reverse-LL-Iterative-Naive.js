class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function Reverse(head) {
  let arr = [];
  for (let curr = head; curr !== null; curr = curr.next) {
    arr.push(curr.data);
  }
  for (let curr = head; curr !== null; curr = curr.next) {
    curr.data = arr.pop();
  }
  return head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
Reverse(head);
let curr = head;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
