/*
 * ========== PROBLEM STATEMENT ==========
 * Detect if a linked list has a cycle.
 *
 * METHOD 4 (Hash Set): Store visited nodes in a Set. If we encounter a node
 * already in the set, we have a loop.
 *
 * STEP-BY-STEP (10→15→12→20→15):
 * curr=10: set.has(10)? No. add(10), curr=15
 * curr=15: add(15), curr=12
 * curr=12: add(12), curr=20
 * curr=20: add(20), curr=15
 * curr=15: set.has(15)? Yes. return true
 *
 * Time: O(n) | Space: O(n)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectLoop(head) {
  let set = new Set();
  let curr = head;
  while (curr !== null) {
    if (set.has(curr)) return true;
    // EXECUTION: Node already visited → loop.
    set.add(curr);
    curr = curr.next;
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

console.log("Method 4 (hash set) - Has loop:", detectLoop(head));
