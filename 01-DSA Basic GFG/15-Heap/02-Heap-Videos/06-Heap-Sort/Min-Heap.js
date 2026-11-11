/**
 * MinHeap Implementation with Step-by-Step Execution
 *
 * A Min Heap is a complete binary tree where:
 * - Parent node is always smaller than its children
 * - Smallest element is at the root
 * - Implemented as an array for efficiency
 */

class MinHeap {
  /**
   * Constructor: Initialize heap from array
   *
   * Step-by-step execution:
   * Step 1: Store the input array
   * Step 2: Call buildHeap() to convert array into min heap
   *
   * Example: new MinHeap([10, 5, 20, 2, 4, 8])
   * - Step 1: this.arr = [10, 5, 20, 2, 4, 8]
   * - Step 2: buildHeap() converts it to [2, 4, 8, 5, 10, 20]
   */
  constructor(arr) {
    // Step 1: Store the input array
    this.arr = arr;

    // Step 2: Convert the array into a min heap
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
   * Build Heap: Convert array into min heap
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
   *   - i = 2: minHeapify(2) - Fix node at index 2 (value 20)
   *   - i = 1: minHeapify(1) - Fix node at index 1 (value 5)
   *   - i = 0: minHeapify(0) - Fix node at index 0 (value 10)
   *
   * Why start from (n/2)-1?
   * - All nodes from index (n/2) onwards are leaves
   * - Leaves already satisfy heap property (no children)
   * - We only need to fix non-leaf nodes
   */
  buildHeap() {
    // Step 1: Get array length
    let n = this.arr.length;

    // Step 2: Start from last non-leaf node and go up to root
    // Last non-leaf node is at index (n/2) - 1
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      // Step 3: Fix heap property at each node
      // This ensures the subtree rooted at i is a valid min heap
      this.minHeapify(i);
    }
  }

  /**
   * MinHeapify: Maintain min heap property at index i
   *
   * This function assumes that left and right subtrees are already heaps,
   * but the node at index i might violate the heap property.
   *
   * Step-by-step execution:
   *
   * Example: minHeapify(0) on array [10, 5, 20, 2, 4, 8]
   *
   * Step 1: Get left and right child indices
   *   - lt = left(0) = 2*0 + 1 = 1
   *   - rt = right(0) = 2*0 + 2 = 2
   *
   * Step 2: Initialize smaller = 0 (assume current node is smallest)
   *
   * Step 3: Compare with left child
   *   - Check: lt (1) < n (6) AND arr[1] (5) < arr[0] (10)
   *   - Condition true: 5 < 10
   *   - Update: smaller = 1
   *
   * Step 4: Compare with right child
   *   - Check: rt (2) < n (6) AND arr[2] (20) < arr[1] (5)
   *   - Condition false: 20 is NOT < 5
   *   - smaller remains 1
   *
   * Step 5: Check if swap needed
   *   - smaller (1) !== i (0) → Swap needed
   *   - Swap: arr[0] ↔ arr[1]
   *   - Array becomes: [5, 10, 20, 2, 4, 8]
   *
   * Step 6: Recursively fix the affected subtree
   *   - minHeapify(1) - Fix the subtree at index 1
   *   - This ensures the entire subtree maintains heap property
   */
  minHeapify(i) {
    let arr = this.arr;

    // Step 1: Get indices of left and right children
    let lt = this.left(i); // Left child index
    let rt = this.right(i); // Right child index

    // Step 2: Assume current node is the smallest
    let smaller = i;
    let n = arr.length;

    // Step 3: Compare with left child
    // Check if left child exists and is smaller than current node
    if (lt < n && arr[lt] < arr[smaller]) {
      // Step 3a: Left child is smaller, update smaller index
      smaller = lt;
    }

    // Step 4: Compare with right child
    // Check if right child exists and is smaller than current smallest
    if (rt < n && arr[rt] < arr[smaller]) {
      // Step 4a: Right child is smaller, update smaller index
      smaller = rt;
    }

    // Step 5: Check if we found a smaller child
    if (smaller !== i) {
      // Step 5a: Swap current node with smaller child
      // This moves the larger value down
      [arr[smaller], arr[i]] = [arr[i], arr[smaller]];

      // Step 5b: Recursively fix the affected subtree
      // The swapped value might violate heap property in its new position
      // So we need to fix the subtree starting from 'smaller' index
      this.minHeapify(smaller);
    }
    // Step 6: If smaller === i, heap property is already satisfied
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
 * - new MinHeap([10, 5, 20, 2, 4, 8])
 *   - Step 1: this.arr = [10, 5, 20, 2, 4, 8]
 *   - Step 2: Call buildHeap()
 *
 * BUILDHEAP EXECUTION:
 * - n = 6
 * - Start from: i = Math.floor(6/2) - 1 = 2
 *
 * Iteration 1: i = 2 (node with value 20)
 *   - minHeapify(2):
 *     - lt = left(2) = 5, rt = right(2) = 6
 *     - Check left: 6 < 6? No (index 6 doesn't exist)
 *     - Check right: 6 < 6? No
 *     - smaller = 2, no swap needed
 *   - Array: [10, 5, 20, 2, 4, 8] (unchanged)
 *
 * Iteration 2: i = 1 (node with value 5)
 *   - minHeapify(1):
 *     - lt = left(1) = 3, rt = right(1) = 4
 *     - Check left: arr[3] (2) < arr[1] (5)? Yes → smaller = 3
 *     - Check right: arr[4] (4) < arr[3] (2)? No
 *     - smaller (3) !== i (1) → Swap arr[1] ↔ arr[3]
 *     - Array: [10, 2, 20, 5, 4, 8]
 *     - Recursive call: minHeapify(3)
 *       - lt = left(3) = 7, rt = right(3) = 8
 *       - Both out of bounds, no swap
 *   - Array: [10, 2, 20, 5, 4, 8]
 *
 * Iteration 3: i = 0 (node with value 10)
 *   - minHeapify(0):
 *     - lt = left(0) = 1, rt = right(0) = 2
 *     - Check left: arr[1] (2) < arr[0] (10)? Yes → smaller = 1
 *     - Check right: arr[2] (20) < arr[1] (2)? No
 *     - smaller (1) !== i (0) → Swap arr[0] ↔ arr[1]
 *     - Array: [2, 10, 20, 5, 4, 8]
 *     - Recursive call: minHeapify(1)
 *       - lt = left(1) = 3, rt = right(1) = 4
 *       - Check left: arr[3] (5) < arr[1] (10)? Yes → smaller = 3
 *       - Check right: arr[4] (4) < arr[3] (5)? Yes → smaller = 4
 *       - smaller (4) !== i (1) → Swap arr[1] ↔ arr[4]
 *       - Array: [2, 4, 20, 5, 10, 8]
 *       - Recursive call: minHeapify(4)
 *         - lt = left(4) = 9, rt = right(4) = 10
 *         - Both out of bounds, no swap
 *
 * FINAL RESULT: [2, 4, 20, 5, 10, 8]
 *
 * Final tree representation:
 *           2 (minimum at root)
 *          /  \
 *         4    20
 *        / \  /
 *       5  10 8
 *
 * Heap property verified:
 * - 2 < 4 and 2 < 20 ✓
 * - 4 < 5 and 4 < 10 ✓
 * - 20 < 8? No, but 8 has no siblings, so it's fine
 */
let arr = [10, 5, 20, 2, 4, 8];
console.log("Input array:", arr);

let heap = new MinHeap(arr);
console.log("Min Heap array:", heap.arr);

// Verify heap property
console.log("\nHeap verification:");
console.log("Root (minimum):", heap.arr[0]);
console.log("Left child of 0:", heap.arr[heap.left(0)]);
console.log("Right child of 0:", heap.arr[heap.right(0)]);