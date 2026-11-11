class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
function Insert(head, data) {
  let newNode = new Node(data);
  if (head === null) return newNode;
  newNode.next = head;
  head.prev = newNode;
  newNode.prev = null;
  return newNode;
}
let head = new Node(10);
head.prev = null;
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;
head.next.next.next = null;
let newhead = Insert(head, 5);
while (newhead !== null) {
  console.log(newhead.data);
  newhead = newhead.next;
}
