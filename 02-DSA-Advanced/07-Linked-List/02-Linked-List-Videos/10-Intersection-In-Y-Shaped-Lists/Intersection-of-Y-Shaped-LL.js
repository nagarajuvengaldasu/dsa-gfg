/*
 * ========== PROBLEM STATEMENT ==========
 * Find the intersection point of two Y-shaped linked lists (they merge at some node).
 *
 * APPROACH: Get lengths of both lists. Move the longer list's pointer ahead by
 * the difference so both reach the intersection at the same time when stepped together.
 *
 * STEP-BY-STEP (10→20→30→40→50 and 15→25→40→50):
 * len1=5, len2=4. diff=1. longer=list1, shorter=list2.
 * longer moves 1 step: longer=20.
 * Step both: 20,15 → 30,25 → 40,40. Match! return 40.
 *
 * Time: O(m+n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function intersectionpoint(head1, head2) {
  const getlength = (head) => {
    let length = 0;
    let current = head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  };
  const len1 = getlength(head1);
  const len2 = getlength(head2);
  let diff = Math.abs(len1 - len2);
  let longer = len1 > len2 ? head1 : head2;
  let shorter = len1 > len2 ? head2 : head1;
  while (diff > 0) {
    longer = longer.next;
    diff--;
  }
  // EXECUTION: Align both pointers so they're same distance from end.
  while (longer && shorter) {
    if (longer === shorter) {
      return longer.data;
    }
    longer = longer.next;
    shorter = shorter.next;
  }
  return -1;
}
let head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
let common = new Node(40);
common.next = new Node(50);
head1.next.next.next = common;

let head2 = new Node(15);
head2.next = new Node(25);
head2.next.next = common;

console.log(intersectionpoint(head1, head2));
