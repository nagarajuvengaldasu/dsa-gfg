/*
 * ========== PROBLEM STATEMENT ==========
 * Delete a node from a linked list when you only have a reference to that node
 * (no reference to head). Assume the node is not the last node.
 *
 * TRICK: Copy next node's data into current node, then bypass next node.
 * Effectively "delete" current by replacing it with next and skipping next.
 *
 * STEP-BY-STEP (10→20→30→40→25, delete 30):
 * nodeToDel=30, temp=40. nodeToDel.data=40, nodeToDel.next=25.
 * Result: 10→20→40→25 (30 is overwritten by 40, old 40 removed)
 *
 * Time: O(1) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteNode(nodeToDel) {
  if (!nodeToDel || !nodeToDel.next) return;
  // WHY: Can't delete last node without head reference.
  let temp = nodeToDel.next;
  nodeToDel.data = temp.data;
  nodeToDel.next = temp.next;
  // EXECUTION: Copy next's data and link. Node "becomes" next, next is skipped.
}

function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join(" -> ");
}

let head = new Node(10);
head.next = new Node(20);
let node30 = new Node(30);
head.next.next = node30;
node30.next = new Node(40);
node30.next.next = new Node(25);

console.log("Before:", printList(head));
deleteNode(node30);
console.log("After: ", printList(head));
