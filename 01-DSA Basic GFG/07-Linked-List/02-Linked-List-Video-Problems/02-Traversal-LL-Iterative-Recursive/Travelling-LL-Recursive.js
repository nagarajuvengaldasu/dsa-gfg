class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function traversing(head) {
  if (head === null) return null;
  console.log(head.data);
  traversing(head.next);
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
traversing(head);
