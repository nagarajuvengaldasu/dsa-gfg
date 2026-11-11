/*
 * ========== PROBLEM STATEMENT ==========
 * K LARGEST ELEMENTS
 * Given an array and integer K, return the K largest elements in any order.
 *
 * Example: arr = [5, 15, 10, 20, 8], K = 2 → [20, 15]
 *
 * Approach (Min Heap of size K - Efficient):
 * 1) Build a Min Heap of the first K elements.
 * 2) For every element x from (k+1)th to last: if x > heap root, replace root with x.
 * 3) Return the heap content (K largest).
 * Time: O(k + (n-k) * log k)
 */

function MinHeap(initialArr) {
  // Step 1: Creates empty array to store heap elements
  this.arr = [];
  // Step 2: Initializes size to 0
  this.size = 0;

  this.insert = function (val) {
    this.arr.push(val); // Step 3: Adds new element at end of heap
    this.size++; // Step 4: Increments size
    this.heapifyUp(this.size - 1); // Step 5: Bubble up to restore min-heap
  };

  this.getMin = function () {
    return this.size > 0 ? this.arr[0] : undefined; // Step 6: Returns minimum value
  };

  this.extractMin = function () {
    if (this.size === 0) return undefined; // Step 7: Returns undefined if heap is empty
    let min = this.arr[0]; // Step 8: Stores minimum value
    this.arr[0] = this.arr[this.size - 1];
    this.arr.pop(); // Step 9: Removes last element
    this.size--; // Step 10: Decrements size
    if (this.size > 0) this.heapifyDown(0); // Step 11: Bubble down
    return min; // Step 12: Returns minimum value
  };

  this.heapifyUp = function (index) {
    while (index > 0) {
      // Step 13: Bubbles up to maintain heap property
      let parent = Math.floor((index - 1) / 2);
      if (this.arr[index] < this.arr[parent]) {
        // Step 14: If current value is less than parent, swap
        [this.arr[index], this.arr[parent]] = [
          this.arr[parent],
          this.arr[index],
        ];
        index = parent; // Step 15: Moves to parent index
      } else break;
    }
  };

  this.heapifyDown = function (index) {
    while (index < this.size) {
      // Step 16: Bubbles down to maintain heap property
      let left = 2 * index + 1,
        right = 2 * index + 2,
        smallest = index;
      if (left < this.size && this.arr[left] < this.arr[smallest])
        smallest = left; // Step 17: If left child is less than smallest, update smallest
      if (right < this.size && this.arr[right] < this.arr[smallest])
        smallest = right; // Step 18: If right child is less than smallest, update smallest
      if (smallest === index) break;
      [this.arr[index], this.arr[smallest]] = [
        this.arr[smallest],
        this.arr[index],
      ];
      index = smallest; // Step 19: Moves to smallest index
    }
  };

  if (Array.isArray(initialArr) && initialArr.length > 0) {
    // Step 20: If initial array is not empty, builds min-heap from initial array
    for (let i = 0; i < initialArr.length; i++) {
      this.insert(initialArr[i]); // Step 4: Build min-heap from initial array
    }
  }
}

function kLargestEfficient(arr, k) {
  if (k <= 0 || arr.length === 0) return []; // Step 21: Returns empty array if k is less than or equal to 0 or array is empty
  if (k >= arr.length) return [...arr].sort((a, b) => b - a); // Step 22: Returns array sorted in descending order if k is greater than or equal to array length

  let h = new MinHeap(arr.slice(0, k)); // Step 5: Min-heap of first K elements

  for (let i = k; i < arr.length; i++) {
    // Step 23: For remaining elements, if x larger than smallest in K-largest, replace smallest with x
    let x = arr[i]; // Step 6: Next element
    if (x > h.getMin()) {
      // Step 7: If x larger than smallest in K-largest
      h.extractMin(); // Step 8: Removes smallest
      h.insert(x); // Step 9: Adds x (keeps K largest in heap)
    }
  }

  return h.arr.slice(); // Step 10: Return K largest
}

// Example from image: [5, 15, 10, 20, 8, 25, 18], K = 3 → heap ends with 18, 25, 20 (order may vary)
let arr = [5, 15, 10, 20, 8, 25, 18];
let k = 3;
console.log(kLargestEfficient(arr, k)); // e.g. [18, 25, 20] or [20, 18, 25] — the 3 largest

// Other examples
console.log(kLargestEfficient([5, 15, 10, 20, 8], 2)); // [15, 20] or [20, 15]
console.log(kLargestEfficient([8, 6, 4, 10, 9], 3)); // [9, 10, 8] or similar
console.log(kLargestEfficient([30, 40, 20], 1)); // [40]
