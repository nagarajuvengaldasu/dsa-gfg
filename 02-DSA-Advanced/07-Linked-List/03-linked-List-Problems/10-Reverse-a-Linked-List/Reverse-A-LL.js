/*
 * ========== PROBLEM STATEMENT ==========
 * Reverse a singly linked list iteratively.
 *
 * APPROACH: 3-pointer (prev, curr, next). For each node, curr.next = prev, then advance.
 *
 * STEP-BY-STEP (1→2→3→4→5):
 * curr=1: next=2, 1.next=null, prev=1, curr=2
 * curr=2: next=3, 2.next=1, prev=2, curr=3
 * ... prev=5, curr=null. Return 5. Result: 5→4→3→2→1
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function reverseList(head) {
  if (head == null || head.next === null) return head;
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    // EXECUTION: Reverse link, advance.
  }
  return prev;
}
function printList(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join("->");
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log("before", printList(head));
console.log("after", printList(reverseList(head)));
