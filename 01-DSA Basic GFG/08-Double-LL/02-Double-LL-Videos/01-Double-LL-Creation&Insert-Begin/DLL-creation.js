class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
let head = new Node(10);
head.prev = null;
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;
head.next.next.next = null;
// print the dll
let curr = head;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
