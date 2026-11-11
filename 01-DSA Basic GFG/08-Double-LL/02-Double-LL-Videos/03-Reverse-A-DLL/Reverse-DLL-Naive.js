class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
function reverseDLL(head){
  let arr=[];
  let curr = head;
  while(curr !== null){
    arr.push(curr.data);
    curr = curr.next;
  }
  curr = head;
  while(curr !== null){
    curr.data = arr.pop();
    curr= curr.next
  }
  return head;

}
let head = new Node(10);
head.prev = null;
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;
head.next.next.next = new Node(40);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = null;

console.log("Original DLL:");
let curr = head;
while(curr !== null){
  console.log(curr.data);
  curr = curr.next;
}
console.log("Reversed DLL:");
let newhead = reverseDLL(head);
curr = newhead;
while(curr !== null){
  console.log(curr.data);
  curr = curr.next;
}