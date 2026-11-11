/*
 * ========== PROBLEM STATEMENT ==========
 * Pairwise swap nodes by changing links (not just data).
 * 1→2→3→4→5  →  2→1→4→3→5
 *
 * OPTIMAL: Swap links. Handle first pair specially (updates head), then loop.
 *
 * STEP-BY-STEP (1→2→3→4→5):
 * curr=3, prev=1, head=2. First pair: 2→1. prev.next=4, prev=3, swap 3,4: 4→3, curr=5
 * curr=5: prev.next=5, done. Result: 2→1→4→3→5
 *
 * Time: O(n) | Space: O(1)
 */

class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function pairwiseswap(head) {
  if (head === null || head.next === null) return head;
  let curr = head.next.next;
  let prev = head;
  head = head.next;
  head.next = prev;
  // EXECUTION: Swap first pair, set new head.
  while (curr !== null && curr.next !== null) {
    prev.next = curr.next;
    prev = curr;
    let next = curr.next.next;
    curr.next.next = curr;
    curr = next;
    // EXECUTION: prev links to second of pair, swap curr and curr.next.
  }
  prev.next = curr;
  return head;
}
function printList(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join("->");
}
let head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);
head.next.next.next.next = new node(5);
console.log("Before:", printList(head));
head = pairwiseswap(head);
console.log("After: ", printList(head));
