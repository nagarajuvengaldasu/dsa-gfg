class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function swapKthNodeFromEnd(head, k) {
  if (head === null) return null;
  let length = 0;
  let curr = head;
  while (curr !== null) {
    length++;
    curr = curr.next;
  }
  if (k > length) return head;
  if (2 * k - 1 === length) return head;
  let node1 = head;
  for (let i = 1; i < k; i++) {
    node1 = node1.next;
  }
  if (node1 === null) return head;

  let node2 = head;

  for (let i = 1; i < length - k + 1; i++) {
    node2 = node2.next;
  }

  let tempData = node1.data;
  node1.data = node2.data;
  node2.data = tempData;
  return head;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// i want to swap the kth node from the end
swapKthNodeFromEnd(head, 3);
// print the linked list
let curr = head;
while (curr !== null) {
  console.log(curr.data);
  curr = curr.next;
}
