class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function MiddleElement(head) {
  let count = 0;
  if (head === null) return;
  let curr = head;
  while (curr !== null) {
    count++;
    curr = curr.next;
  }
  let middle = Math.floor(count / 2);
  curr = head;
  for (let i = 0; i < middle; i++) {
    curr = curr.next;
  }
  return curr.data;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next = new Node(70);
head.next.next.next.next.next.next.next = new Node(80);
head.next.next.next.next.next.next.next.next = new Node(90);
head.next.next.next.next.next.next.next.next.next = new Node(100);
console.log(MiddleElement(head));
