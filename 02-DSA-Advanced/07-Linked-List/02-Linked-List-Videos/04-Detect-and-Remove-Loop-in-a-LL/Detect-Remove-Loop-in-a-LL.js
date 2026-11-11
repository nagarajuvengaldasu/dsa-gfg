/*
 * ========== PROBLEM STATEMENT ==========
 * Given a linked list that may have a cycle, detect the loop and remove it
 * so the list becomes linear (no cycle).
 *
 * APPROACH: Floyd's algo to find meeting point. Then move slow to head, advance
 * both slow and fast one step until slow.next === fast.next. The node before
 * the loop start is fast. Set fast.next = null to break the loop.
 *
 * STEP-BY-STEP (1→2→3→4→5→3):
 * Phase 1: slow=1, fast=1. They meet inside loop (e.g. at 4).
 * Phase 2: slow=head, move both until slow.next===fast.next. Both point to loop start.
 *          fast.next=null breaks the loop.
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function deleteloop(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
    // EXECUTION: Floyd's algo - find meeting point inside loop.
  }
  if (slow !== fast) {
    return;
  }
  // WHY: No loop found.
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // EXECUTION: Both move 1 step. When slow.next===fast.next, fast is last node before loop.
  fast.next = null;
  // WHY: Break the loop by severing the link from last node before loop start.
}
function printList(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next.next;
deleteloop(head);
printList(head);
