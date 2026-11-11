class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
function searchIterative(head , x){
  //assign the head to the current node
  let curr = head;
  let pos=1;
  //traverse the list until the current node is not null
  while(curr !== null){
    //if data is found at current node return the position
    if(curr.data === x){
      return pos;
    }
    //move to the next node
    curr = curr.next;
    //increment the position
    pos++;
  }
  //if data is not found return -1
  return -1;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
let x = 20;
console.log(searchIterative(head , x));
