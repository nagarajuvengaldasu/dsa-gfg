class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function searchRecursive(head, x) {
  //if list is empty return -1
  if (head === null) return -1;
  //if data is found at head return 1
  if (head.data === x) return 1;
  //if data is not found at head, search in the next node
  let pos = searchRecursive(head.next, x);
  //if data is not found in the next node return -1
  if (pos === -1) return -1;
  //if data is found in the next node return the position + 1
  return pos + 1;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
let x = 30;
console.log(searchRecursive(head, x));
