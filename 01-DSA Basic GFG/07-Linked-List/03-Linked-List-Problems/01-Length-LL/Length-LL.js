class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function Length(head) {
  // function call to calculate the length of the list
  let count = 0;
  // loop to calculate the length of the list
  let curr = head;
  // loop to calculate the length of the list
  while (curr !== null) {
    count++;
    curr = curr.next;
  }
  return count;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
let newHead = Length(head);
console.log(newHead);
