/*
 * ========== PROBLEM STATEMENT ==========
 * Given a linked list and k, reverse the list in groups of k nodes recursively.
 * If nodes remain < k, leave them as is.
 *
 * Example: 1→2→3→4→5, k=3  →  3→2→1→4→5
 *
 * APPROACH: Reverse first k nodes iteratively. Recursively reverse rest with same k.
 * Connect head (now last of first group) to result of recursive call.
 *
 * STEP-BY-STEP (1→2→3→4→5, k=3):
 * Reverse 1,2,3: prev=3, curr=4. head(1).next = reverseknodes(4,3)
 * recurs: 4→5, k=3. Reverse 4 only (count 2, curr=5 exits). 4.next = reverseknodes(5,3)
 * recurs: 5, k=3. Reverse 5 only. return 5. Back: 4.next=5, return 4.
 * Back: 1.next=4. Return prev=3. Result: 3→2→1→4→5
 *
 * Time: O(n) | Space: O(n/k) recursion
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function reverseknodes(head, k) {
  if (!head || k <= 0) return head;
  let curr = head;
  let prev = null;
  let count = 1;
  while (curr !== null && count <= k) {
    let after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;
    count++;
  }
  if (curr !== null) {
    head.next = reverseknodes(curr, k);
    // WHY: Connect reversed group's tail (head) to recursively processed rest.
  }
  return prev;
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
let newHead = reverseknodes(head, 3);
printList(newHead);
