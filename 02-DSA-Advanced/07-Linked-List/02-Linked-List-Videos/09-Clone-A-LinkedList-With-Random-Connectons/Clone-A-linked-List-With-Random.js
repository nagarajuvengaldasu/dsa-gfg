/*
 * ========== PROBLEM STATEMENT ==========
 * Clone a linked list where each node has next and random pointers.
 * Create a deep copy without modifying the original.
 *
 * MAP APPROACH: First pass - create clone of each node, store original→clone in Map.
 * Second pass - set next and random for each clone using the map.
 *
 * STEP-BY-STEP:
 * Pass 1: Map {orig1→clone1, orig2→clone2, ...}
 * Pass 2: For each orig, clone.next = map(orig.next), clone.random = map(orig.random)
 *
 * Time: O(n) | Space: O(n)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function cloneList(head) {
  let m = new Map();
  m.set(null, null);
  for (let curr = head; curr !== null; curr = curr.next) {
    m.set(curr, new Node(curr.data));
  }
  // EXECUTION: Create clone for each node. null→null for last node's next.
  for (let curr = head; curr !== null; curr = curr.next) {
    let clone = m.get(curr);
    clone.next = m.get(curr.next);
    clone.random = m.get(curr.random);
  }
  // EXECUTION: Set next and random for each clone from map.
  return m.get(head);
}
function printList(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join("->");
}
let head = new Node(10);
head.next = new Node(5);
head.next.next = new Node(20);
head.next.next.next = new Node(15);
head.next.next.next.next = new Node(20);
head.random = head.next.next;
head.next.random = head.next.next.next;
head.next.next.random = head;
head.next.next.next.random = head.next.next;
console.log("Before: ", printList(head));
head = cloneList(head);
console.log("After: ", printList(head));
