/*
 * ========== PROBLEM STATEMENT ==========
 * Segregate even and odd valued nodes. All even nodes first, then odd.
 * Order of appearance within each group should be preserved.
 *
 * NAIVE: Two traversals. First find tail. Second: move each odd node to end.
 *
 * STEP-BY-STEP (17→15→8→12→5):
 * tail=5. curr=17 odd: unlink, append after tail. tail=17. List: 15→8→12→5→17
 * curr=15 odd: append. List: 8→12→5→17→15
 * curr=8 even: prev=8, curr=12
 * curr=12 even: prev=12, curr=5
 * curr=5 odd: append. Stop when curr===firstMoved(17). Result: 8→12→17→15→5
 *
 * Time: O(n) | Space: O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function segregateEvenOdd(head) {
  if (!head || !head.next) return head;

  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  // EXECUTION: Find last node for appending odds.

  let dummy = new Node(0);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  let firstMoved = null;

  while (curr !== null && curr !== firstMoved) {
    if (curr.data % 2 === 1) {
      if (firstMoved === null) firstMoved = curr;
      let next = curr.next;
      prev.next = next;
      curr.next = null;
      tail.next = curr;
      tail = curr;
      curr = next;
      // EXECUTION: Unlink odd, append after tail, advance curr.
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummy.next;
}

function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join(" -> ");
}

let head = new Node(17);
head.next = new Node(15);
head.next.next = new Node(8);
head.next.next.next = new Node(12);
head.next.next.next.next = new Node(5);
console.log("Before:", printList(head));
head = segregateEvenOdd(head);
console.log("After: ", printList(head));
