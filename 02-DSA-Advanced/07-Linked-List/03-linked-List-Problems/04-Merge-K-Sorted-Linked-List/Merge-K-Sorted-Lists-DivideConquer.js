/*
 * ========== PROBLEM STATEMENT ==========
 * Merge K sorted linked lists.
 *
 * DIVIDE & CONQUER: Merge pairs recursively (merge sort style).
 *
 * STEP-BY-STEP: mergeKLists([L1,L2,L3]) = merge(merge(L1,L2), L3).
 *
 * Time: O(N log K) | Space: O(log K) recursion
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeTwoLists(a, b) {
  let dummy = new Node(0);
  let tail = dummy;
  while (a && b) {
    if (a.data <= b.data) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
  }
  tail.next = a || b;
  return dummy.next;
}

function mergeKLists(arr) {
  if (!arr || arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  let mid = Math.floor(arr.length / 2);
  let left = mergeKLists(arr.slice(0, mid));
  let right = mergeKLists(arr.slice(mid));
  return mergeTwoLists(left, right);
}

// Helper
function arrayToHead(arr) {
  if (!arr.length) return null;
  let head = new Node(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new Node(arr[i]);
    curr = curr.next;
  }
  return head;
}
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.data);
    head = head.next;
  }
  return arr.join(" -> ");
}

// Test
let lists = [arrayToHead([1, 3, 7]), arrayToHead([2, 4, 8]), arrayToHead([9])];
console.log("DivideConquer - Example 1:", printList(mergeKLists(lists)));

lists = [arrayToHead([1, 3]), arrayToHead([8]), arrayToHead([4, 5, 6])];
console.log("DivideConquer - Example 2:", printList(mergeKLists(lists)));
