class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
function reverseDll(head) {
  if (head === null || head.next === null) return head;
  let prev = null;
  let curr = head;
  while (curr !== null) {
    prev = curr;
    [curr.prev, curr.next] = [curr.next, curr.prev];
    curr = curr.prev;
  }
  return prev;
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
let newhead = reverseDll(head);
let curr = newhead;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
