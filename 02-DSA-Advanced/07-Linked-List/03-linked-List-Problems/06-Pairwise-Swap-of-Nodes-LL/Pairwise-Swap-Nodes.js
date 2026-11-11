/*
 * ========== PROBLEM STATEMENT ==========
 * Pairwise swap nodes by changing links. 1→2→3→4→... → 2→1→4→3→...
 *
 * Swap first pair (update head), then loop for remaining pairs.
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function pairwiseSwap(head) {
  if (head == null || head.next === null) return head;
  let curr = head.next.next;
  let prev = head;
  head = head.next;
  head.next = prev;
  while (curr !== null && curr.next !== null) {
    prev.next = curr.next;
    prev = curr;
    let next = curr.next.next;
    curr.next.next = curr;
    curr = next;
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
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next.next.next = new Node(10);
console.log(printList(head));
console.log(printList(pairwiseSwap(head)));
