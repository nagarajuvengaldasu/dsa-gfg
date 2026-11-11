class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function identical(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;
  while (curr1 !== null && curr2 !== null) {
    if (curr1.data !== curr2.data) {
      return false;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return curr1 === null && curr2 === null;
}
let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
let head2 = new Node(10);
head2.next = new Node(20);
head2.next.next = new Node(30);
head2.next.next.next = new Node(40);
head2.next.next.next.next = new Node(50);
let newHead = identical(head1, head2);
console.log(newHead);
