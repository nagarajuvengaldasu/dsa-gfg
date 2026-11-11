/*
 * ========== PROBLEM STATEMENT ==========
 * Merge K sorted linked lists into one sorted list.
 *
 * BRUTE FORCE: Collect all values, sort, build new list.
 *
 * STEP-BY-STEP: values=[1,3,7,2,4,8,9], sort→[1,2,3,4,7,8,9], build list.
 *
 * Time: O(N log N) | Space: O(N)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeKLists(arr) {
  let values = [];
  for (let head of arr) {
    while (head) {
      values.push(head.data);
      head = head.next;
    }
  }
  values.sort((a, b) => a - b);
  // EXECUTION: Collect all, sort, build new list.
  let dummy = new Node(0);
  let curr = dummy;
  for (let v of values) {
    curr.next = new Node(v);
    curr = curr.next;
  }
  return dummy.next;
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
console.log("BruteForce - Example 1:", printList(mergeKLists(lists)));

lists = [arrayToHead([1, 3]), arrayToHead([8]), arrayToHead([4, 5, 6])];
console.log("BruteForce - Example 2:", printList(mergeKLists(lists)));
