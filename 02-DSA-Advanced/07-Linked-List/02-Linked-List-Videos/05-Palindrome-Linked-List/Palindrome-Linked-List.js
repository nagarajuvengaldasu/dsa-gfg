/*
 * ========== PROBLEM STATEMENT ==========
 * Check if a linked list is a palindrome (reads same forward and backward).
 *
 * APPROACH: Find middle, reverse second half, compare first half with reversed second half.
 *
 * STEP-BY-STEP (1→2→3→2→1):
 * 1. mid = middle node (3). revHead = 2→1 (second half).
 * 2. Reverse second half: 1→2.
 * 3. Compare: 1==1, 2==2. Palindrome.
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function middleElement(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
  // EXECUTION: Slow at middle when fast reaches end.
}
function reverList(revHead) {
  let prev = null;
  let temp = revHead;
  while (temp !== null) {
    let nxt = temp.next;
    temp.next = prev;
    prev = temp;
    temp = nxt;
  }
  return prev;
}
function isPalindrome(head) {
  if (head === null) return false;
  if (head.next === null) return true;

  let mid = middleElement(head);
  let revHead = mid.next;
  mid.next = null;
  revHead = reverList(revHead);
  while (head !== null && revHead !== null) {
    if (head.data != revHead.data) {
      return false;
    }
    head = head.next;
    revHead = revHead.next;
  }
  return true;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(isPalindrome(head));
