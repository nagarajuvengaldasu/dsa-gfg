class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function checkCll(head) {
  let slow = head;
  let fast = head;
  if(head === null) return true;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
console.log(checkCll(head));
