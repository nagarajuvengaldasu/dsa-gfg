class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
function insertAtEnd(head, x) {
  let temp = new Node(x);
  if (head === null) {
    return temp;
  }
  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = temp;
  temp.prev = curr;
  return head;
}
let head = new Node(10);
head.prev = null;
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;
head.next.next.next = new Node(40);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = null;
let newhead = insertAtEnd(head, 50);
let curr = newhead;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
