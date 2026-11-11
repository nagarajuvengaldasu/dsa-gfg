class MinHeap {
  constructor() {
    this.heap = []; // Step 1: Creates empty array to store heap elements
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2); // Step 2: Parent of index i is at (i-1)/2
  }
  getLeftChildIndex(i) {
    return 2 * i + 1; // Step 3: Left child of index i is at 2i+1
  }
  getRightChildIndex(i) {
    return 2 * i + 2; // Step 4: Right child of index i is at 2i+2
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; // Step 5: Swap elements at indices i and j
  }
  insert(value) {
    this.heap.push(value); // Step 6: Add new element at end of heap
    this.heapifyUp(); // Step 7: Restore min-heap property by bubbling up
  }
  heapifyUp() {
    let index = this.heap.length - 1; // Step 8: Start from last inserted element
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      // Step 9: While parent exists and parent > child, swap with parent
      this.swap(index, this.getParentIndex(index)); // Step 10: Swap with parent (heapifyUp: swap current with parent)
      index = this.getParentIndex(index); // Step 11: Move up to parent index
    }
  }
  removeMin() {
    if (this.heap.length === 1) {
      return this.heap.pop(); // Step 12: If only one element, pop and return
    }
    const min = this.heap[0]; // Step 13: Store root (minimum) to return later
    this.heap[0] = this.heap.pop(); // Step 14: Replace root with last element
    this.heapifyDown(); // Step 15: Restore min-heap property by bubbling down
    return min; // Step 16: Return the removed minimum
  }
  heapifyDown() {
    let index = 0; // Step 17: Start from root
    while (this.getLeftChildIndex(index) < this.heap.length) {
      // Step 18: While left child exists
      let smallestChildIndex = this.getLeftChildIndex(index); // Step 19: Assume left is smallest
      let rightChildIndex = this.getRightChildIndex(index); // Step 20: Get right child index

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        // Step 21: If right child exists and is smaller than left
        smallestChildIndex = rightChildIndex; // Step 22: Right is the smaller child
      }
      if (this.heap[index] <= this.heap[smallestChildIndex]) {
        break; // Step 23: Heap property satisfied, stop
      }
      this.swap(index, smallestChildIndex); // Step 24: Swap with smaller child
      index = smallestChildIndex; // Step 25: Move down to child
    }
  }
  size() {
    return this.heap.length; // Step 26: Return number of elements
  }
  peek() {
    return this.heap[0]; // Step 27: Return root (minimum) without removing
  }
}

class Solution {
  kthLargest(arr, k) {
    let minHeap = new MinHeap(); // Step 28: Create empty min-heap to store k largest elements
    for (let num of arr) {
      minHeap.insert(num); // Step 29: Insert current element into heap
      if (minHeap.size() > k) {
        minHeap.removeMin(); // Step 30: If heap has > k elements, remove smallest (keeps k largest)
      }
    }
    return minHeap.peek(); // Step 31: Root of min-heap = smallest of k largest = kth largest
  }
}

// === Execution trace for arr=[4,3,7,6,5], k=5 ===
// Step 32: arr = [4, 3, 7, 6, 5], k = 5
let arr = [4, 3, 7, 6, 5];
let k = 5;
let solution = new Solution(); // Step 33: Create Solution instance
// Step 34: kthLargest([4,3,7,6,5], 5) executes:
//   - insert(4): heap=[4]
//   - insert(3): heap=[3,4] (3 bubbles up)
//   - insert(7): heap=[3,4,7]
//   - insert(6): heap=[3,4,6,7]
//   - insert(5): heap=[3,4,5,6,7]
//   - peek() returns 3 (5th largest in 5 elements = smallest)
console.log(solution.kthLargest(arr, k)); // Step 35: Output: 3
