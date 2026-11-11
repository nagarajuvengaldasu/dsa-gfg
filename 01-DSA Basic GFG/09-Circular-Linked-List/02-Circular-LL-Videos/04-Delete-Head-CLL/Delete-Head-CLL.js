class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function deleteHead(head) {
  if (head === null || head.next === head) {
    return null;
  }
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  curr.next = head.next;
  head = head.next;
  return head.next;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = head;
head = deleteHead(head);
let curr = head;
while (curr.next !== head) {
  console.log(curr.data);
  curr = curr.next;
}
console.log(curr.data);
