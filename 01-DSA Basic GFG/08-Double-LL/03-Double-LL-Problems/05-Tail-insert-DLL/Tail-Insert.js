class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
function TailInsert(head, data) {
  let newNode = new Node(data);
  if (head === null) return newNode;
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = newNode;
  newNode.prev = curr;
  newNode.next = null;
  return head;
}
let head = new Node(10);
head.prev = null;
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;
head.next.next.next = null;
let newhead = TailInsert(head, 40);
while (newhead !== null) {
  console.log(newhead.data);
  newhead = newhead.next;
}
