class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function Reverse(curr, prev = null) {
  //base case
  // if the list is empty, return the head
  if(curr === null){
    return prev;
  }
  // function call to reverse the rest of the list
  let next = curr.next;
  curr.next = prev;
  return Reverse(next, curr);
  // return the head of the reversed list
  return prev;
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
