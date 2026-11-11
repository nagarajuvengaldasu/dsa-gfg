/**
 * MinHeap class - Build Heap from Array
 *
 * A heap is typically implemented as an array (not a tree with Node class)
 * The Node class above is not needed for heap implementation
 */

class MinHeap {
  constructor(arr) {
    // FIXED: Properly handle undefined array
    if (arr === undefined || arr === null) {
      this.arr = [];
      return; // Early return if no array provided
    }

    // Create a copy of the input array
    this.arr = [...arr];

    // FIXED: Calculate starting index correctly
    // Start from the last non-leaf node
    // For 0-indexed array: parent of last element is at (n-2)/2
    // But we need to use arr.length, not arr.length - 2
    let i = Math.floor((this.arr.length - 2) / 2);

    // Build heap by heapifying from bottom to top
    while (i >= 0) {
      this.minHeapify(i);
      i = i - 1;
    }
  }

  /**
   * Helper method to get left child index
   * For 0-indexed array: left child of i is at 2*i + 1
   */
  left(i) {
    return 2 * i + 1;
  }

  /**
   * Helper method to get right child index
   * For 0-indexed array: right child of i is at 2*i + 2
   */
  right(i) {
    return 2 * i + 2;
  }

  /**
   * Helper method to get parent index
   * For 0-indexed array: parent of i is at (i-1)/2
   */
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * MinHeapify: Maintains min-heap property
   * Assumes left and right subtrees are already heaps
   *
   * FIXED ISSUES:
   * 1. Method was outside class - moved inside
   * 2. Line 25: this.left(i) should be this.right(i)
   * 3. Line 29: 'let' is a keyword, should be 'lt'
   */
  minHeapify(i) {
    let arr = this.arr;
    let lt = this.left(i); // Left child index
    let rt = this.right(i); // FIXED: Changed from this.left(i) to this.right(i)
    let smaller = i; // Assume current node is smallest
    let n = arr.length;

    // Compare with left child
    // FIXED: Changed 'let' to 'lt' (let is a reserved keyword)
    if (lt < n && arr[lt] < arr[smaller]) {
      smaller = lt;
    }

    // Compare with right child
    if (rt < n && arr[rt] < arr[smaller]) {
      smaller = rt;
    }

    // If smaller value found, swap and recursively heapify
    if (smaller !== i) {
      [arr[smaller], arr[i]] = [arr[i], arr[smaller]]; // Swap
      this.minHeapify(smaller); // Recursively heapify the affected subtree
    }
  }

  /**
   * Get the minimum element (root)
   */
  getMin() {
    return this.arr.length > 0 ? this.arr[0] : null;
  }

  /**
   * Get the heap array
   */
  getArray() {
    return this.arr;
  }
}

// Test cases
console.log("=== Test Case 1: Build heap from array ===");
let arr1 = [10, 5, 3, 2, 4];
let heap1 = new MinHeap(arr1);
console.log("Input array:", arr1);
console.log("Heap array:", heap1.getArray());
console.log("Minimum:", heap1.getMin());

console.log("\n=== Test Case 2: Build heap from another array ===");
let arr2 = [20, 10, 15, 5, 8, 12, 3];
let heap2 = new MinHeap(arr2);
console.log("Input array:", arr2);
console.log("Heap array:", heap2.getArray());
console.log("Minimum:", heap2.getMin());

console.log("\n=== Test Case 3: Empty array ===");
let heap3 = new MinHeap();
console.log("Heap array:", heap3.getArray());
