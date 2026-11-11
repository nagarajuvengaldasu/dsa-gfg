/*
 * ========== PROBLEM STATEMENT ==========
 * Detect if a linked list has a cycle (loop). A cycle exists when a node's next
 * points to a previously visited node.
 *
 * METHOD 1 (NAIVE): For each node x, check if x.next is equal to any node from
 * head to x. If we find x.next === some earlier node, there's a loop.
 *
 * STEP-BY-STEP (10→15→12→20→15):
 * x=10: y=15. curr=head..10, none === 15. x=15.
 * x=15: y=12. curr=head..15, 15===15? When curr=15, y=12, 15≠12. curr reaches 15.
 *        Check curr===y: curr=15, y=12. No. x=12.
 * x=12: y=20. ... x=20.
 * x=20: y=15. curr from head: 10, 15. curr=15 === y=15. return true.
 *
 * Time: O(n²) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectLoop(head) {
  let x = head;
  while (x !== null) {
    let y = x.next;
    if (y === null) return false;
    // WHY: No next → no loop possible.
    let curr = head;
    while (curr !== x) {
      if (curr === y) return true;
      // EXECUTION: y (x.next) equals some node from head to x → loop.
      curr = curr.next;
    }
    if (curr === y) return true;
    // WHY: Self-loop (x.next === x).
    x = x.next;
  }
  return false;
}

let head = new Node(10);
let n15 = new Node(15);
let n12 = new Node(12);
let n20 = new Node(20);
head.next = n15;
n15.next = n12;
n12.next = n20;
n20.next = n15;

console.log("Has loop:", detectLoop(head));
