class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function Reverse(head) {
  //base case 
  // if the list is empty or has only one node, return the head
  if(head === null || head.next === null){
    return head;
  }
  // function call to reverse the rest of the list
  let rest_head = Reverse(head.next);
  // get the tail of the reversed list
  let rest_tail = head.next;
  // point the tail of the reversed list to the head of the original list
  rest_tail.next = head;
  // point the head of the original list to null
  head.next = null;
  // return the head of the reversed list
  return rest_head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
let newHead = Reverse(head);
let curr = newHead;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
