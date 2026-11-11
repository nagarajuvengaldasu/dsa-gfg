/*
 * ========== PROBLEM STATEMENT ==========
 * Add two numbers represented as linked lists (MSB at head). Return sum as list.
 * Example: 1→5→7 (157) + 4→5→6 (456) = 6→1→3 (613)
 *
 * APPROACH: Reverse both, add digit by digit with carry, reverse result.
 *
 * STEP-BY-STEP: 157+456. Reverse: 751, 654. Add: 7+4=11→1,carry1. 5+5+1=11→1,carry1. 1+6+1=8. Reverse: 813
 *
 * Time: O(m+n) | Space: O(max(m,n))
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function addTwoNumbers(head1, head2) {
  head1 = reverseList(head1);
  head2 = reverseList(head2);
  let carry = 0;
  let dummy = new Node(0);
  let tail = dummy;
  let a = head1;
  let b = head2;
  while (a !== null || b !== null || carry > 0) {
    let sum = carry;
    if (a !== null) {
      sum = sum + a.data;
      a = a.next;
    }
    if (b !== null) {
      sum = sum + b.data;
      b = b.next;
    }
    carry = Math.floor(sum / 10);
    tail.next = new Node(sum % 10);
    tail = tail.next;
    // EXECUTION: Digit = sum%10, carry = sum/10.
  }
  let result = reverseList(dummy.next);
  while (result !== null && result.data === 0 && result.next !== null) {
    result = result.next;
  }
  return result;

  function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
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
head1.next = new Node(5);
head1.next.next = new Node(7);
let head2 = new Node(4);
head2.next = new Node(5);
head2.next.next = new Node(6);
console.log("head1", printList(head1));
console.log("head2", printList(head2));
console.log("result", printList(addTwoNumbers(head1, head2)));
