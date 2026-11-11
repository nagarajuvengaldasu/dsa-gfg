class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function nthNodeFromEnd(head, n) {
  let count = 0;
  let curr = head;
  while (curr !== null) {
    count++;
    curr = curr.next;
  }
  if (count < n) {
    return;
  }
  curr = head;
  for (let i = 1; i < count - n + 1; i++) {
    curr = curr.next;
  }
  return curr.data;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
let n = 2;
console.log(nthNodeFromEnd(head, n));
