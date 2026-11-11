/*
 * ========== PROBLEM STATEMENT ==========
 * Join two linked lists: connect the last node of first list to head of second.
 * Return the head of the first list.
 *
 * APPROACH: Traverse to tail of head1, set tail.next = head2.
 *
 * STEP-BY-STEP (1→2→3→4→5 and 6→7→8→9→10):
 * temp=1→2→3→4→5. temp.next=6. Result: 1→2→3→4→5→6→7→8→9→10
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function joinTwoLists(head1, head2) {
  if (head1 == null) return head2;
  let temp = head1;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = head2;
  // EXECUTION: Connect tail of list1 to head of list2.
  return head1;
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
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
let head2 = new Node(6);
head2.next = new Node(7);
head2.next.next = new Node(8);
head2.next.next.next = new Node(9);
head2.next.next.next.next = new Node(10);
console.log("before", printList(head1));
console.log("before", printList(head2));
console.log("after", printList(joinTwoLists(head1, head2)));
