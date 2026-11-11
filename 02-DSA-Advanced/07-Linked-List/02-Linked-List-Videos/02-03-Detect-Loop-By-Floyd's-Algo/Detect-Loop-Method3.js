/*
 * ========== PROBLEM STATEMENT ==========
 * Detect if a linked list has a cycle.
 *
 * METHOD 3 (Dummy node): As we traverse, point each node's next to a dummy node.
 * If we ever find curr.next === dummy, we've been here before → loop.
 *
 * STEP-BY-STEP (10→15→12→20→15):
 * curr=10: next=15, 10.next=dummy, curr=15
 * curr=15: next=12, 15.next=dummy, curr=12
 * curr=12: next=20, 12.next=dummy, curr=20
 * curr=20: next=15. 20.next=dummy, curr=15
 * curr=15: curr.next===dummy? Yes (we set it). return true
 *
 * Time: O(n) | Modifies linked list (destroys structure)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectLoop(head) {
  let dummy = new Node(null);
  let curr = head;
  while (curr !== null) {
    if (curr.next === dummy) return true;
    // EXECUTION: We already visited this node (pointed it to dummy).
    let next = curr.next;
    curr.next = dummy;
    curr = next;
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

console.log("Method 3 (dummy node) - Has loop:", detectLoop(head));
