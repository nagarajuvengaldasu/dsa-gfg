/*
 * ========== PROBLEM STATEMENT ==========
 * Clone a linked list with next and random pointers. O(1) extra space.
 *
 * OPTIMAL: Interweave original and clone. orig→clone→orig→clone...
 * Clone's random = orig.random.next. Then separate the two lists.
 *
 * STEP-BY-STEP:
 * 1. Insert clone after each orig: 10→[10']→5→[5']→...
 * 2. clone.random = orig.random.next (clone is next to orig)
 * 3. Separate: restore orig.next, build clone list
 *
 * Time: O(n) | Space: O(1) extra
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
  }
  // EXECUTION: Insert clone after each node.
  for (let curr = head; curr !== null; curr = curr.next.next) {
    curr.next.random = curr.random != null ? curr.random.next : null;
  }
  // EXECUTION: Clone's random = original's random's clone (next to it).
  let head2 = head.next;
  let clone = head2;
  for (let curr = head; curr !== null; curr = curr.next) {
    curr.next = curr.next.next;
    clone.next = clone.next ? clone.next.next : null;
    clone = clone.next;
  }
  // EXECUTION: Restore original list, extract clone list.
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
