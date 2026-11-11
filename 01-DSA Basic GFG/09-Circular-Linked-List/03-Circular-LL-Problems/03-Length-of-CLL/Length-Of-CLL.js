class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function lengthofCll(head) {
  let curr = head;
  let count = 1;
  while (curr.next !== head) {
    count++;
    curr = curr.next;
  }
  return count;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head;
console.log(lengthofCll(head));
