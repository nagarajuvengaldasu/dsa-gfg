class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function swapKthNodeFromEnd(head, k) {
  let curr = head;
  let length = 0;
  while (curr !== null) {
    length++;
    curr = curr.next;
  }
  if (k > length) return head;
  if (2 * k - 1 === length) return head;

  let prev1 = null;
  let node1 = head;

  let prev2 = null;
  let node2 = head;

  for (let i = 1; i < k; i++) {
    prev1 = node1;
    node1 = node1.next;
  }

  for (let i = 1; i < length - k + 1; i++) {
    prev2 = node2;
    node2 = node2.next;
  }

  //special case: if the nodes are adjacent
  if (node1.next === node2) {
    node1.next = node2.next;
    if (prev1 !== null) {
      prev1.next = node2;
    } else {
      head = node2;
    }
    node2.next = node1;
    return head;
  }
  // sepcial case: nodes are adjacent and reverse order
  // eg: 1,2,3,4 k=2
  if (node2.next === node1) {
    if (prev2 !== null) {
      prev2.next = node1;
    } else {
      head = node1;
    }
    node2.next = node1.next;
    node1.next = node2;
  }
  // general case: nodes are not adjacent
  else {
    if (prev1 !== null) {
      prev1.next = node2;
    } else {
      head = node2;
    }
    if (prev2 !== null) {
      prev2.next = node1;
    } else {
      head = node1;
    }
    let temp = node1.next;
    node1.next = node2.next;
    node2.next = temp;
  }
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
// i want to swap the kth node from the end
swapKthNodeFromEnd(head, 3);
// print the linked list
let curr = head;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
