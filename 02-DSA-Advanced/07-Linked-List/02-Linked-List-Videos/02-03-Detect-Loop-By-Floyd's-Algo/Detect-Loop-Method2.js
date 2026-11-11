/*
 * ========== PROBLEM STATEMENT ==========
 * Detect if a linked list has a cycle.
 *
 * METHOD 2 (Visited flag): Add a visited flag to each node. While traversing,
 * if we reach a node with visited=true, we've seen it before → loop.
 *
 * STEP-BY-STEP (10→15→12→20→15):
 * curr=10: visited=false → set true, curr=15
 * curr=15: visited=false → set true, curr=12
 * curr=12: set true, curr=20
 * curr=20: set true, curr=15
 * curr=15: visited=true → return true
 *
 * Time: O(n) | Modifies node structure (adds visited)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.visited = false;
  }
}

function detectLoop(head) {
  let curr = head;
  while (curr !== null) {
    if (curr.visited === true) return true;
    // EXECUTION: Revisited node → we're in a loop.
    curr.visited = true;
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

console.log("Method 2 (visited flag) - Has loop:", detectLoop(head));
