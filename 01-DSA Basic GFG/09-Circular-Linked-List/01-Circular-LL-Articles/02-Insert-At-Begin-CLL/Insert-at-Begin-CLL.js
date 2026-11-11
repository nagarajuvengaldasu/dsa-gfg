class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
function insertAtBegin(head,data){
  let temp = new Node(data);
  if(head === null){
    temp.next = temp;
  }
  else{
    let curr = head;
    while(curr.next !== head){
      curr = curr.next;
    }
    curr.next = temp;
    temp.next = head;
  }
  return temp;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = head;
let newHead = insertAtBegin(head,5);
let curr = newHead;
while(curr.next !== newHead){
  console.log(curr.data);
  curr = curr.next;
}
console.log(curr.data);