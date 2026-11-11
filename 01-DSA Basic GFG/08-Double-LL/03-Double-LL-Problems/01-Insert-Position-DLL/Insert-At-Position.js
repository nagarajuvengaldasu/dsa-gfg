class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function InsertAtPosition(head, x, p) {
  let temp = new Node(x);
  if (head === null) return temp;

  if (p === 0) {
    temp.next = head.next;
    temp.prev = head;
    if (head.next) {
      head.next.prev = temp;
    }
    head.next = temp;
    return head;
  }
  let curr = head;
  for (let i = 0; i < p && curr !== null; i++) {
    curr = curr.next;
  }
  temp.next = curr.next;
  temp.prev = curr;
  if (curr.next) {
    curr.next.prev = temp;
  }
  curr.next = temp;
  return head;
}
let head = new Node(10);
head.prev = null;
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;
console.log(InsertAtPosition(head, 25, 2));
