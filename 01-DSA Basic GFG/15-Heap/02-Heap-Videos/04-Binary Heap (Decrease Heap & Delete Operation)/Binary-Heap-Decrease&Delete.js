/**
 * MinHeap class with Decrease Key and Delete Operations
 *
 * This class extends the basic heap functionality with:
 * 1. decreaseKey(i, x) - Decrease value at index i to x
 * 2. deleteKey(i) - Delete element at index i
 */

class MinHeap {
  constructor(arr) {
    // Handle undefined array
    if (arr === undefined || arr === null) {
      this.arr = [];
      return;
    }

    // Create a copy of the input array
    this.arr = [...arr];

    // Build heap from array
    let i = Math.floor((this.arr.length - 2) / 2);
    while (i >= 0) {
      this.minHeapify(i);
      i = i - 1;
    }
  }

  /**
   * Helper method to get left child index
   */
  left(i) {
    return 2 * i + 1;
  }

  /**
   * Helper method to get right child index
   */
  right(i) {
    return 2 * i + 2;
  }

  /**
   * Helper method to get parent index
   */
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * MinHeapify: Maintains min-heap property
   * Assumes left and right subtrees are already heaps
   */
  minHeapify(i) {
    let arr = this.arr;
    let lt = this.left(i);
    let rt = this.right(i);
    let smaller = i;
    let n = arr.length;

    if (lt < n && arr[lt] < arr[smaller]) {
      smaller = lt;
    }

    if (rt < n && arr[rt] < arr[smaller]) {
      smaller = rt;
    }

    if (smaller !== i) {
      [arr[smaller], arr[i]] = [arr[i], arr[smaller]];
      this.minHeapify(smaller);
    }
  }

  /**
   * Decrease Key Operation
   *
   * Decreases the value at index i to x
   * After decreasing, we need to move the element up to maintain heap property
   *
   * Time Complexity: O(log n)
   *
   * @param {number} i - Index of the element to decrease
   * @param {number} x - New value (must be smaller than current value)
   *
   * Example:
   * Heap: [2, 5, 3, 10, 8]
   * decreaseKey(3, 1) - Change value at index 3 from 10 to 1
   * Result: [1, 2, 3, 5, 8]
   */
  decreaseKey(i, x) {
    let arr = this.arr;

    // Validation: Check if index is valid
    if (i < 0 || i >= arr.length) {
      console.error("Invalid index");
      return;
    }

    // Validation: New value should be smaller than current value
    if (x > arr[i]) {
      console.error(
        "New value must be smaller than current value for decreaseKey"
      );
      return;
    }

    // Step 1: Update the value at index i
    arr[i] = x;

    // Step 2: Move up the tree to maintain heap property
    // Compare with parent and swap if parent is larger
    while (i > 0 && arr[this.parent(i)] > arr[i]) {
      let p = this.parent(i);
      // Swap current node with parent
      [arr[i], arr[p]] = [arr[p], arr[i]];
      // Move to parent index
      i = p;
    }
  }

  /**
   * Delete Key Operation
   *
   * Deletes the element at index i from the heap
   *
   * Algorithm:
   * 1. Replace element at i with last element
   * 2. Remove last element (pop)
   * 3. Heapify at index i to maintain heap property
   *
   * Time Complexity: O(log n)
   *
   * @param {number} i - Index of the element to delete
   *
   * Example:
   * Heap: [2, 5, 3, 10, 8]
   * deleteKey(1) - Delete element at index 1 (value 5)
   * Step 1: Replace 5 with 8 (last element)
   * Step 2: Remove last element
   * Step 3: Heapify at index 1
   * Result: [2, 3, 8, 10]
   */
  deleteKey(i) {
    let arr = this.arr;

    // Validation: Check if index is valid
    if (i < 0 || i >= arr.length) {
      console.error("Invalid index");
      return;
    }

    // Validation: Check if heap is empty
    if (arr.length === 0) {
      console.error("Heap is empty");
      return;
    }

    // Step 1: Replace element at index i with last element
    arr[i] = arr[arr.length - 1];

    // Step 2: Remove the last element
    arr.pop();

    // Step 3: Heapify at index i to maintain heap property
    // This will move the element down if needed
    this.minHeapify(i);
  }

  /**
   * Extract Minimum (Delete and return minimum)
   *
   * Removes and returns the minimum element (root)
   *
   * Time Complexity: O(log n)
   */
  extractMin() {
    if (this.arr.length === 0) {
      return null;
    }

    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    // Store minimum
    let min = this.arr[0];

    // Replace root with last element
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();

    // Heapify root
    this.minHeapify(0);

    return min;
  }

  /**
   * Get the minimum element (root) without removing it
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

  /**
   * Get the size of the heap
   */
  size() {
    return this.arr.length;
  }
}

// ====================================================================
// TEST CASES
// ====================================================================

console.log("=== Test Case 1: Decrease Key Operation ===");
let heap1 = new MinHeap([10, 5, 3, 2, 4]);
console.log("Initial heap:", heap1.getArray());
console.log("Minimum:", heap1.getMin());

// Decrease value at index 0 (10) to 1
heap1.decreaseKey(0, 1);
console.log("After decreaseKey(0, 1):", heap1.getArray());
console.log("New minimum:", heap1.getMin());

// Decrease value at index 2 (3) to 0
heap1.decreaseKey(2, 0);
console.log("After decreaseKey(2, 0):", heap1.getArray());
console.log("New minimum:", heap1.getMin());

console.log("\n=== Test Case 2: Delete Key Operation ===");
let heap2 = new MinHeap([2, 5, 3, 10, 8, 7]);
console.log("Initial heap:", heap2.getArray());
console.log("Size:", heap2.size());

// Delete element at index 1 (value 5)
heap2.deleteKey(1);
console.log("After deleteKey(1):", heap2.getArray());
console.log("Size:", heap2.size());
console.log("Minimum:", heap2.getMin());

// Delete element at index 0 (root)
heap2.deleteKey(0);
console.log("After deleteKey(0):", heap2.getArray());
console.log("Size:", heap2.size());
console.log("Minimum:", heap2.getMin());

console.log("\n=== Test Case 3: Extract Minimum ===");
let heap3 = new MinHeap([5, 10, 3, 15, 8, 2]);
console.log("Initial heap:", heap3.getArray());

let min1 = heap3.extractMin();
console.log("Extracted minimum:", min1);
console.log("Heap after extraction:", heap3.getArray());

let min2 = heap3.extractMin();
console.log("Extracted minimum:", min2);
console.log("Heap after extraction:", heap3.getArray());

console.log("\n=== Test Case 4: Combined Operations ===");
let heap4 = new MinHeap([20, 15, 10, 5, 8, 12]);
console.log("Initial heap:", heap4.getArray());

heap4.decreaseKey(0, 3);
console.log("After decreaseKey(0, 3):", heap4.getArray());

heap4.deleteKey(2);
console.log("After deleteKey(2):", heap4.getArray());

let min = heap4.extractMin();
console.log("Extracted minimum:", min);
console.log("Final heap:", heap4.getArray());
