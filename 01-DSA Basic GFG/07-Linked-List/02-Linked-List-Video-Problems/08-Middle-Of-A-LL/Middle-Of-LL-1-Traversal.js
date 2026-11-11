class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function MiddleElement(head) {
  //slow and fast assign to the head of the linked list
  let slow = head;
  let fast = head;
  //while loop will run until the fast is not null and fast.next is not null
  while (fast !== null && fast.next !== null) {
    //slow will move one step forward
    slow = slow.next;
    //fast will move two steps forward
    fast = fast.next.next;
  }
  //return the data of the slow pointer
  return slow.data;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
console.log(MiddleElement(head));
