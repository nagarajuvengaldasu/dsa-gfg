/*
 * ========== PROBLEM STATEMENT ==========
 * Clone linked list with next and random pointers. O(1) space.
 *
 * Interweave orig→clone→orig... Set clone.random=orig.random.next. Separate lists.
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function cloneList(head) {
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = new Node(curr.data);
    curr.next.next = next;
    curr = next;
    // EXECUTION: Insert clone after each node.
  }
  for (let curr = head; curr !== null; curr = curr.next.next) {
    curr.next.random = curr.random != null ? curr.random.next : null;
  }
  let head2 = head.next;
  let clone = head2;
  for (let curr = head; curr !== null; curr = curr.next) {
    curr.next = curr.next.next;
    clone.next = clone.next ? clone.next.next : null;
    clone = clone.next;
  }
  return head2;
}

function printList(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join("->");
}

let head = new Node(10);
head.next = new Node(5);
head.next.next = new Node(20);
head.next.next.next = new Node(15);
head.next.next.next.next = new Node(20);
head.random = head.next.next;
head.next.random = head.next.next.next;
head.next.next.random = head;
head.next.next.next.random = head.next.next;
console.log("Before: ", printList(head));
head = cloneList(head);
console.log("After: ", printList(head));
