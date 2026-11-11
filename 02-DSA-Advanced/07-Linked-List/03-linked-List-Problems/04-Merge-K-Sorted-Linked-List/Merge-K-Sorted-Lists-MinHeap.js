/*
 * ========== PROBLEM STATEMENT ==========
 * Merge K sorted linked lists.
 *
 * MIN-HEAP: Push head of each list. Pop min, append to result, push its next.
 *
 * STEP-BY-STEP: heap=[1,2,9]. pop 1, push 3. pop 2, push 4. ... Build sorted list.
 *
 * Time: O(N log K) | Space: O(K)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MinHeap {
  constructor() {
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }
  push(node) {
    this.arr.push(node);
    this.heapifyUp(this.arr.length - 1);
  }
  pop() {
    if (this.arr.length === 0) return null;
    let min = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.heapifyDown(0);
    return min;
  }
  heapifyUp(i) {
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.arr[i].data >= this.arr[parent].data) break;
      [this.arr[i], this.arr[parent]] = [this.arr[parent], this.arr[i]];
      i = parent;
    }
  }
  heapifyDown(i) {
    let n = this.arr.length;
    while (true) {
      let smallest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      if (left < n && this.arr[left].data < this.arr[smallest].data) smallest = left;
      if (right < n && this.arr[right].data < this.arr[smallest].data) smallest = right;
      if (smallest === i) break;
      [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];
      i = smallest;
    }
  }
}

function mergeKLists(arr) {
  let heap = new MinHeap();
  for (let head of arr) {
    if (head) heap.push(head);
  }
  let dummy = new Node(0);
  let tail = dummy;
  while (heap.size() > 0) {
    let node = heap.pop();
    tail.next = node;
    tail = node;
    if (node.next) heap.push(node.next);
    // EXECUTION: Append min, push its next to heap.
  }
  tail.next = null;
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
let arr = [arrayToHead([1, 3, 7]), arrayToHead([2, 4, 8]), arrayToHead([9])];
console.log("MinHeap - Example 1:", printList(mergeKLists(arr)));

arr = [arrayToHead([1, 3]), arrayToHead([8]), arrayToHead([4, 5, 6])];
console.log("MinHeap - Example 2:", printList(mergeKLists(arr)));
