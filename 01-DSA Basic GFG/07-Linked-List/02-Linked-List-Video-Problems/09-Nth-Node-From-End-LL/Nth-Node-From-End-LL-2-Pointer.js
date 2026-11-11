class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function nthNodeFromEnd(head, n) {
  let second = head;
  let first = head;
  if (head === null) return null;
  // Move first pointer n positions ahead
  // If n is greater than list length, first will become null
  for (let i = 0; i < n; i++) {
    if (first === null) {
      // n is greater than the length of the list
      return null;
    }
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first !== null) {
    second = second.next;
    first = first.next;
  }
  return second.data;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
let n = 3;
console.log(nthNodeFromEnd(head, n));
