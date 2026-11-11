/**
 * MaxHeap Implementation with Step-by-Step Execution
 *
 * A Max Heap is a complete binary tree where:
 * - Parent node is always larger than its children
 * - Largest element is at the root
 * - Implemented as an array for efficiency
 */

class MaxHeap {
  /**
   * Constructor: Initialize heap from array
   *
   * Step-by-step execution:
   * Step 1: Store the input array
   * Step 2: Call buildHeap() to convert array into max heap
   *
   * Example: new MaxHeap([10, 5, 20, 2, 4, 8])
   * - Step 1: this.arr = [10, 5, 20, 2, 4, 8]
   * - Step 2: buildHeap() converts it to [20, 10, 8, 2, 4, 5]
   */
  constructor(arr) {
    // Step 1: Store the input array
    this.arr = arr;

    // Step 2: Convert the array into a max heap
    this.buildHeap();
  }

  /**
   * Get left child index
   *
   * Formula: left child of node at index i is at 2*i + 1
   *
   * Example:
   * - left(0) = 2*0 + 1 = 1
   * - left(1) = 2*1 + 1 = 3
   * - left(2) = 2*2 + 1 = 5
   */
  left(i) {
    return 2 * i + 1;
  }

  /**
   * Get right child index
   *
   * Formula: right child of node at index i is at 2*i + 2
   *
   * Example:
   * - right(0) = 2*0 + 2 = 2
   * - right(1) = 2*1 + 2 = 4
   * - right(2) = 2*2 + 2 = 6
   */
  right(i) {
    return 2 * i + 2;
  }

  /**
   * Get parent index
   *
   * Formula: parent of node at index i is at (i-1)/2 (rounded down)
   *
   * Example:
   * - parent(1) = Math.floor((1-1)/2) = 0
   * - parent(2) = Math.floor((2-1)/2) = 0
   * - parent(3) = Math.floor((3-1)/2) = 1
   */
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * Build Heap: Convert array into max heap
   *
   * Step-by-step execution:
   *
   * Example with array [10, 5, 20, 2, 4, 8]:
   *
   * Step 1: Calculate starting index
   *   - n = 6 (array length)
   *   - Start from: Math.floor(6/2) - 1 = 2
   *   - This is the last non-leaf node (nodes 3, 4, 5 are leaves)
   *
   * Step 2: Iterate from index 2 down to 0
   *   - i = 2: maxHeapify(2) - Fix node at index 2 (value 20)
   *   - i = 1: maxHeapify(1) - Fix node at index 1 (value 5)
   *   - i = 0: maxHeapify(0) - Fix node at index 0 (value 10)
   *
   * Why start from (n/2)-1?
   * - All nodes from index (n/2) onwards are leaves
   * - Leaves already satisfy heap property (no children)
   * - We only need to fix non-leaf nodes
   */
  buildHeap() {
    // FIXED: Changed arr.length to this.arr.length
    // Step 1: Get array length
    let n = this.arr.length;

    // Step 2: Start from last non-leaf node and go up to root
    // Last non-leaf node is at index (n/2) - 1
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      // Step 3: Fix heap property at each node
      // This ensures the subtree rooted at i is a valid max heap
      this.maxHeapify(i);
    }
  }

  /**
   * MaxHeapify: Maintain max heap property at index i
   *
   * This function assumes that left and right subtrees are already heaps,
   * but the node at index i might violate the heap property.
   *
   * Step-by-step execution:
   *
   * Example: maxHeapify(0) on array [10, 5, 20, 2, 4, 8]
   *
   * Step 1: Get left and right child indices
   *   - lf = left(0) = 2*0 + 1 = 1
   *   - rt = right(0) = 2*0 + 2 = 2
   *
   * Step 2: Initialize largest = 0 (assume current node is largest)
   *
   * Step 3: Compare with left child
   *   - Check: lf (1) < n (6) AND arr[1] (5) > arr[0] (10)
   *   - Condition false: 5 is NOT > 10
   *   - largest remains 0
   *
   * Step 4: Compare with right child
   *   - Check: rt (2) < n (6) AND arr[2] (20) > arr[0] (10)
   *   - Condition true: 20 > 10
   *   - Update: largest = 2
   *
   * Step 5: Check if swap needed
   *   - largest (2) !== i (0) → Swap needed
   *   - Swap: arr[0] ↔ arr[2]
   *   - Array becomes: [20, 5, 10, 2, 4, 8]
   *
   * Step 6: Recursively fix the affected subtree
   *   - maxHeapify(2) - Fix the subtree at index 2
   *   - This ensures the entire subtree maintains heap property
   */
  maxHeapify(i) {
    // Step 1: Get indices of left and right children
    let lf = this.left(i); // Left child index
    let rt = this.right(i); // Right child index

    // Step 2: Assume current node is the largest
    let largest = i;
    let n = this.arr.length;

    // Step 3: Compare with left child
    // Check if left child exists and is larger than current node
    // FIXED: Changed arr[lf] to this.arr[lf] and arr[largest] to this.arr[largest]
    if (lf < n && this.arr[lf] > this.arr[largest]) {
      // Step 3a: Left child is larger, update largest index
      largest = lf;
    }

    // Step 4: Compare with right child
    // Check if right child exists and is larger than current largest
    // FIXED: Changed arr[rt] to this.arr[rt] and arr[largest] to this.arr[largest]
    if (rt < n && this.arr[rt] > this.arr[largest]) {
      // Step 4a: Right child is larger, update largest index
      largest = rt;
    }

    // Step 5: Check if we found a larger child
    if (largest !== i) {
      // Step 5a: Swap current node with larger child
      // This moves the smaller value down
      // FIXED: Changed arr[largest] and arr[i] to this.arr[largest] and this.arr[i]
      [this.arr[largest], this.arr[i]] = [this.arr[i], this.arr[largest]];

      // Step 5b: Recursively fix the affected subtree
      // The swapped value might violate heap property in its new position
      // So we need to fix the subtree starting from 'largest' index
      this.maxHeapify(largest);
    }
    // Step 6: If largest === i, heap property is already satisfied
    // No swap needed, function returns
  }
}

/**
 * Test case with complete step-by-step execution trace
 *
 * Input array: [10, 5, 20, 2, 4, 8]
 *
 * Tree representation:
 *           10 (index 0)
 *          /  \
 *         5    20 (indices 1, 2)
 *        / \  /
 *       2  4 8 (indices 3, 4, 5)
 *
 * Execution trace:
 * ============================================
 *
 * CONSTRUCTOR CALL:
 * - new MaxHeap([10, 5, 20, 2, 4, 8])
 *   - Step 1: this.arr = [10, 5, 20, 2, 4, 8]
 *   - Step 2: Call buildHeap()
 *
 * BUILDHEAP EXECUTION:
 * - n = 6
 * - Start from: i = Math.floor(6/2) - 1 = 2
 *
 * Iteration 1: i = 2 (node with value 20)
 *   - maxHeapify(2):
 *     - lf = left(2) = 5, rt = right(2) = 6
 *     - Check left: 5 < 6? Yes, arr[5] (8) > arr[2] (20)? No
 *     - Check right: 6 < 6? No (index 6 doesn't exist)
 *     - largest = 2, no swap needed
 *   - Array: [10, 5, 20, 2, 4, 8] (unchanged)
 *
 * Iteration 2: i = 1 (node with value 5)
 *   - maxHeapify(1):
 *     - lf = left(1) = 3, rt = right(1) = 4
 *     - Check left: arr[3] (2) > arr[1] (5)? No
 *     - Check right: arr[4] (4) > arr[1] (5)? No
 *     - largest = 1, no swap needed
 *   - Array: [10, 5, 20, 2, 4, 8] (unchanged)
 *
 * Iteration 3: i = 0 (node with value 10)
 *   - maxHeapify(0):
 *     - lf = left(0) = 1, rt = right(0) = 2
 *     - Check left: arr[1] (5) > arr[0] (10)? No
 *     - Check right: arr[2] (20) > arr[0] (10)? Yes → largest = 2
 *     - largest (2) !== i (0) → Swap arr[0] ↔ arr[2]
 *     - Array: [20, 5, 10, 2, 4, 8]
 *     - Recursive call: maxHeapify(2)
 *       - lf = left(2) = 5, rt = right(2) = 6
 *       - Check left: arr[5] (8) > arr[2] (10)? No
 *       - Check right: 6 < 6? No
 *       - largest = 2, no swap
 *   - Array: [20, 5, 10, 2, 4, 8]
 *
 * FINAL RESULT: [20, 5, 10, 2, 4, 8]
 *
 * Final tree representation:
 *           20 (maximum at root)
 *          /  \
 *         5    10
 *        / \  /
 *       2  4 8
 *
 * Heap property verified:
 * - 20 > 5 and 20 > 10 ✓
 * - 5 > 2 and 5 > 4 ✓
 * - 10 > 8 ✓
 */
let arr = [10, 5, 20, 2, 4, 8];
console.log("Input array:", arr);

let heap = new MaxHeap(arr);
console.log("Max Heap array:", heap.arr);

// Verify heap property
console.log("\nHeap verification:");
console.log("Root (maximum):", heap.arr[0]);
console.log("Left child of 0:", heap.arr[heap.left(0)]);
console.log("Right child of 0:", heap.arr[heap.right(0)]);
