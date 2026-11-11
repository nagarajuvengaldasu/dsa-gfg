class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function sortedInsert(head, x) {
  //allocate memory for the new node
  let temp = new Node(x);
  //if the list is empty, return the new node
  if (head === null) {
    return temp;
  }
  //if the new node is less than the head, insert it at the beginning
  if (x < head.data) {
    //insert the new node at the beginning
    temp.next = head;
    //return the new node
    return temp;
  }
  let curr = head;
  // WHY curr.next !== null for insertion?
  // When inserting, we need to find the node BEFORE the insertion point.
  // We check curr.next.data to see if we should insert AFTER curr.
  // After loop: curr points to the node BEFORE where we want to insert.
  // Then: temp.next = curr.next; curr.next = temp;
  //
  // If we used curr !== null:
  // - We'd check curr.data, but by the time we find the position,
  //   we've already passed it and lost reference to the previous node!
  // - We need curr to stay at the node BEFORE insertion point.
  while (curr.next !== null && curr.next.data < x) {
    curr = curr.next;
  }
  temp.next = curr.next;
  curr.next = temp;
  return head;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
let x = 25;
//insert the new node at the sorted position
let newHead = sortedInsert(head, x);
// why the curr = newhead?
// because the newHead is the head of the new linked list
// and we need to print the new linked list
let curr = newHead;
//traverse the new linked list and print the data
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
