/*
 * ========== PROBLEM STATEMENT ==========
 * Given a linked list and integer k, reverse only the first k nodes.
 * The rest of the list remains unchanged and is attached after the reversed portion.
 *
 * Example: 1→2→3→4→5, k=2  →  2→1→3→4→5
 *
 * APPROACH: Standard 3-pointer reversal (prev, curr, next) for k nodes only.
 * Then connect original head (now last of reversed part) to curr (rest of list).
 *
 * STEP-BY-STEP (1→2→3→4→5, k=2):
 * curr=1, prev=null, count=1: next=2, 1.next=null, prev=1, curr=2, count=2
 * count<=2: next=3, 2.next=1, prev=2, curr=3, count=3. Loop exits.
 * head.next=curr → 1.next=3. Return prev(2). Result: 2→1→3→4→5
 *
 * Time: O(k) | Space: O(1)
 */

class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function reverseknodes(head, k) {
  if (!head || k <= 0) return head;
  // WHY: Edge cases - empty list or invalid k.
  let curr = head;
  let prev = null;
  let count = 1;
  while (curr !== null && count <= k) {
    let next = curr.next;
    // EXECUTION: Save next before reversing pointer.
    curr.next = prev;
    prev = curr;
    curr = next;
    count += 1;
    // EXECUTION: Standard reversal: point curr to prev, advance.
  }
  head.next = curr;
  // WHY: Original head is now last of reversed portion. Connect to rest of list.
  return prev;
  // EXECUTION: prev is new head (former k-th node).
}
function printList(head) {
  let arr = [];
  while (head) {
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
let newHead = reverseknodes(head, 2);
printList(newHead);
