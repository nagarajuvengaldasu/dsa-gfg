class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = head;
let curr = head;
while (curr.next !== head) {
  console.log(curr.data);
  curr = curr.next;
}
console.log(curr.data);
