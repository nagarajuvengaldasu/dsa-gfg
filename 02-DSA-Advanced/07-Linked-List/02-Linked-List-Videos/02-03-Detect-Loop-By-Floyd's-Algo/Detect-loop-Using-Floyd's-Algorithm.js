/*
 * ========== PROBLEM STATEMENT ==========
 * Detect if a linked list has a cycle.
 *
 * FLOYD'S ALGORITHM (Tortoise & Hare): Use slow (1 step) and fast (2 steps) pointers.
 * If there's a loop, they will eventually meet. If fast reaches null, no loop.
 *
 * STEP-BY-STEP (1→2→3→4→5, no loop):
 * slow=1, fast=1. slow=2, fast=3. slow=3, fast=5. slow=4, fast=null. return false
 *
 * With loop (e.g. 5→2): slow and fast meet inside loop. return true
 *
 * Time: O(n) | Space: O(1) — optimal
 */

class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function detectLoop(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    // EXECUTION: slow moves 1, fast moves 2. In a loop, they eventually meet.
    if (slow === fast) {
      return true;
    }
  }
  return false;
  // WHY: fast reached null → no loop.
}
function printList(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}
let head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);
head.next.next.next.next = new node(5);
head.next.next.next.next.next = null;
let hasLoop = detectLoop(head);
console.log(hasLoop);
