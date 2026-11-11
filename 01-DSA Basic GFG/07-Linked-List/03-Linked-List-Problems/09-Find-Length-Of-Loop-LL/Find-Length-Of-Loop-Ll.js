class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function findLength(head) {
  if (head === null || head.next === null) return 0;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let count = 1;
      let temp = slow.next;

      while (temp !== fast) {
        count++;
        temp = temp.next;
      }
      return count;
    }
  }
  return 0;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
// head.next.next.next.next.next = head.next;
console.log(findLength(head));
