class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function max(head) {
  let curr = head;
  let max = curr.data;
  while (curr !== null) {
    if (curr.data > max) {
      max = curr.data;
    }
    curr = curr.next;
  }
  return max;
}
function min(head) {
  let curr = head;
  let min = curr.data;
  while (curr !== null) {
    if (curr.data < min) {
      min = curr.data;
    }
    curr = curr.next;
  }
  return min;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
console.log("Min : ", min(head));
console.log("Max : ", max(head));
