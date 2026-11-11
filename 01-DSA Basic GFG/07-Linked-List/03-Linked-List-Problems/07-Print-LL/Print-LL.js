class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function print(head) {
  let result = [];
  let curr = head;
  while (curr !== null) {
    result.push(curr.data);
    curr = curr.next;
  }
  return result;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
console.log(print(head));
