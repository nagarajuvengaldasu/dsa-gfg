class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function deletehead(head) {
  if (head === null) return null;
  if (head.next === head) return null;

  head.data = head.next.data;
  let temp = head.next;
  head.next = head.next.next;
  temp.next = null;
  return head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = head;
let newHead = deletehead(head);
let curr = newHead;
while (curr.next !== newHead) {
  console.log(curr.data);
  curr = curr.next;
}
console.log(curr.data);
