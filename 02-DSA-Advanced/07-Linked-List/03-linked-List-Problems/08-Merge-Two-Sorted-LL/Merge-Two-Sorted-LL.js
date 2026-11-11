/*
 * ========== PROBLEM STATEMENT ==========
 * Merge two sorted linked lists into one sorted list.
 *
 * APPROACH: Use dummy node. Compare heads, attach smaller, advance. Attach remaining.
 *
 * STEP-BY-STEP (1→3→5→7 and 2→4→6→8):
 * 1<2: attach 1. 3<2: attach 2. 3<4: attach 3. ... Result: 1→2→3→4→5→6→7→8
 *
 * Time: O(m+n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function sortedMerge(head1, head2) {
  let dummy = new Node();
  let tail = dummy;
  let a = head1;
  let b = head2;
  while (a !== null && b !== null) {
    if (a.data <= b.data) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
    // EXECUTION: Attach smaller, advance.
  }
  tail.next = a !== null ? a : b;
  // WHY: Attach remaining nodes from non-empty list.
  return dummy.next;
}
function printList(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join("->");
}
let head1 = new Node(1);
head1.next = new Node(3);
head1.next.next = new Node(5);
head1.next.next.next = new Node(7);
let head2 = new Node(2);
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(8);
console.log("head1", printList(head1));
console.log("head2", printList(head2));
console.log("mergedHead", printList(sortedMerge(head1, head2)));
