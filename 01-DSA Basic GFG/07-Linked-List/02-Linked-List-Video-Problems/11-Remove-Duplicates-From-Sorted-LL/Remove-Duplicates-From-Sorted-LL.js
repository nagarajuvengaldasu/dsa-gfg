class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function RemoveDuplicate(head) {
  // function call to remove the duplicates
  let curr = head;
  // loop to remove the duplicates
  while (curr !== null && curr.next !== null) {
    // check if the data is the same
    if (curr.data === curr.next.data) {
      // if the data is the same, remove the duplicate
      curr.next = curr.next.next;
    } else {
      // if the data is not the same, move to the next node
      curr = curr.next;
    }
  }
  // return the head of the list
  return head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(20);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(30);
let newHead = RemoveDuplicate(head);
let curr = newHead;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
