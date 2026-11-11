class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

function InsertBegin(head, x){
  let temp = new Node(x);
  let curr = head;
  while(curr.next !== head){
    curr = curr.next;
  }
  curr.next = temp;
  temp.next = head;
  return temp;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = head;
let newhead = InsertBegin(head , 0);
let start = newhead;
let curr = newhead;
do{
  console.log(curr.data);
  curr = curr.next;
}while(curr !== start);