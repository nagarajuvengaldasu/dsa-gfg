/*
 * ========== PROBLEM STATEMENT ==========
 * Pairwise swap nodes: swap data of adjacent pairs.
 * 1→2→3→4→5  →  2→1→4→3→5
 *
 * NAIVE: Swap data only (no link manipulation). Iterate in pairs.
 *
 * STEP-BY-STEP (1→2→3→4→5):
 * curr=1: swap 1 and 2. curr=curr.next.next=3
 * curr=3: swap 3 and 4. curr=5
 * curr=5: no next. Done. Result: 2→1→4→3→5
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function pairwise(head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    [curr.data, curr.next.data] = [curr.next.data, curr.data];
    curr = curr.next.next;
    // EXECUTION: Swap data of pair, move to next pair.
  }
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
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log("Before:", printList(head));
head = pairwise(head);
console.log("After: ", printList(head));
