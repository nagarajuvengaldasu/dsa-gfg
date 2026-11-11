/*
 * ========== PROBLEM STATEMENT ==========
 * Segregate even and odd nodes. Evens first, then odds. Preserve order.
 *
 * OPTIMAL: One pass. Build two lists: even list (es, ee) and odd list (os, oe).
 * Connect ee.next = os, oe.next = null. Return es.
 *
 * STEP-BY-STEP (17→15→8→12→5):
 * 17 odd: os=oe=17
 * 15 odd: oe.next=15, oe=15
 * 8 even: es=ee=8
 * 12 even: ee.next=12, ee=12
 * 5 odd: oe.next=5, oe=5
 * ee.next=os (8→12→17), oe.next=null. return es. Result: 8→12→17→15→5
 *
 * Note: Bug fix - odd branch should check os===null not es===null.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function segregateEvenOdd(head) {
  let es = null;
  let ee = null;
  let os = null;
  let oe = null;
  for (let curr = head; curr !== null; curr = curr.next) {
    let x = curr.data;
    if (x % 2 === 0) {
      if (es === null) {
        es = ee = curr;
      } else {
        ee.next = curr;
        ee = curr;
      }
      // EXECUTION: Add to even list.
    } else {
      if (os === null) {
        os = oe = curr;
      } else {
        oe.next = curr;
        oe = curr;
      }
      // EXECUTION: Add to odd list.
    }
  }
  if (os === null || es === null) {
    return head;
  }
  ee.next = os;
  oe.next = null;
  return es;
}
function printList(head) {
  let arr = [];
  while (head !== null) {
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
