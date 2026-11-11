/**
 * ====================================================================
 * MAXIMIZE TOYS PROBLEM - USING MIN HEAP APPROACH
 * ====================================================================
 *
 * PROBLEM STATEMENT:
 * Given an array of toy costs and a budget K, find the maximum number
 * of toys you can buy.
 *
 * Example:
 * Input: arr = [1, 12, 5, 111, 200, 1000, 10], K = 50
 * Output: 4
 * Explanation: Buy toys costing 1, 5, 10, 12 (total = 28 <= 50)
 *
 * ====================================================================
 * HIGH-LEVEL EXPLANATION: WHAT'S HAPPENING OUTSIDE THE CODE
 * ====================================================================
 *
 * THINK OF IT LIKE SHOPPING:
 * --------------------------
 * Imagine you're in a toy store with $50. There are many toys with
 * different prices. You want to buy as many toys as possible.
 *
 * STRATEGY:
 * Instead of randomly picking toys, you should:
 * 1. Look at all available toys
 * 2. Always pick the CHEAPEST one first
 * 3. Keep buying cheapest toys until you run out of money
 *
 * WHY THIS WORKS?
 * - If you buy expensive toys first, you'll have less money left
 * - If you buy cheap toys first, you can buy more toys
 * - This is called "Greedy Algorithm" - always make the best local choice
 *
 * ====================================================================
 * HOW MIN HEAP HELPS US:
 * ====================================================================
 *
 * WHAT IS A MIN HEAP?
 * A Min Heap is like a special container that:
 * - Always keeps the smallest item at the top
 * - When you remove the smallest, it automatically brings the next
 *   smallest to the top
 * - It's like a magic box that always gives you the cheapest toy
 *
 * REAL-WORLD ANALOGY:
 * Think of a Min Heap like a vending machine that:
 * - Has all toys inside
 * - Always shows the cheapest toy in the display window
 * - When you buy that toy, it automatically shows the next cheapest
 * - You don't need to search through all toys - it's always ready!
 *
 * ====================================================================
 * THE PROCESS (WHAT HAPPENS STEP BY STEP):
 * ====================================================================
 *
 * PHASE 1: SETUP (Building the Heap)
 * -----------------------------------
 * You have: [1, 12, 5, 111, 200, 1000, 10] - all toy prices
 *
 * What happens:
 * - We put all toys into a "Min Heap" container
 * - The heap automatically arranges them so the cheapest is on top
 * - It's like organizing toys on shelves where cheapest is always
 *   at the front
 *
 * Result: Heap is ready, cheapest toy (1) is at the top
 *
 *
 * PHASE 2: SHOPPING (Extracting and Buying)
 * -----------------------------------------
 * You have: $50 budget
 *
 * What happens in each step:
 *
 * Step 1: Ask heap "What's the cheapest toy?"
 *   - Heap says: "1 dollar"
 *   - You check: Can I afford $1? Yes (you have $50)
 *   - You buy it: Spend $1, now have $49 left
 *   - Heap automatically shows next cheapest
 *
 * Step 2: Ask heap "What's the cheapest toy now?"
 *   - Heap says: "5 dollars"
 *   - You check: Can I afford $5? Yes (you have $49)
 *   - You buy it: Spend $5, now have $44 left
 *   - Heap automatically shows next cheapest
 *
 * Step 3: Ask heap "What's the cheapest toy now?"
 *   - Heap says: "10 dollars"
 *   - You check: Can I afford $10? Yes (you have $44)
 *   - You buy it: Spend $10, now have $34 left
 *   - Heap automatically shows next cheapest
 *
 * Step 4: Ask heap "What's the cheapest toy now?"
 *   - Heap says: "12 dollars"
 *   - You check: Can I afford $12? Yes (you have $34)
 *   - You buy it: Spend $12, now have $22 left
 *   - Heap automatically shows next cheapest
 *
 * Step 5: Ask heap "What's the cheapest toy now?"
 *   - Heap says: "111 dollars"
 *   - You check: Can I afford $111? No (you only have $22)
 *   - You stop shopping (can't afford any more)
 *
 * Result: You bought 4 toys (costing 1, 5, 10, 12)
 *
 * ====================================================================
 * KEY INSIGHTS:
 * ====================================================================
 *
 * 1. WHY HEAP IS PERFECT FOR THIS:
 *    - We need the cheapest toy repeatedly
 *    - Heap gives us cheapest in O(log n) time
 *    - After removing cheapest, next cheapest is ready
 *    - No need to search through entire array each time
 *
 * 2. WHY WE CAN STOP EARLY:
 *    - If we can't afford the cheapest available toy
 *    - We definitely can't afford any remaining toys
 *    - (Because they're all more expensive)
 *    - So we can stop immediately
 *
 * 3. COMPARISON WITH SORTING:
 *    - Sorting: Sort everything first, then buy in order
 *    - Heap: Build heap once, then extract minimums as needed
 *    - Both work, but heap is more flexible
 *
 * ====================================================================
 * VISUAL REPRESENTATION:
 * ====================================================================
 *
 * Initial toys: [1, 12, 5, 111, 200, 1000, 10]
 * Budget: $50
 *
 * After building heap:
 *        1 (cheapest - always at top)
 *       / \
 *     10   5
 *    / \  / \
 *  111 200 1000 12
 *
 * Shopping process:
 *
 * Extract 1 → Buy it ($1) → Remaining: $49
 * Extract 5 → Buy it ($5) → Remaining: $44
 * Extract 10 → Buy it ($10) → Remaining: $34
 * Extract 12 → Buy it ($12) → Remaining: $22
 * Extract 111 → Can't afford → STOP
 *
 * Final: Bought 4 toys, spent $28, saved $22
 *
 * ====================================================================
 * TIME AND SPACE COMPLEXITY:
 * ====================================================================
 *
 * Time Complexity: O(n log n)
 * - Building heap: O(n)
 * - Extracting n elements: O(n log n)
 * - Total: O(n log n)
 *
 * Space Complexity: O(n)
 * - Need to store the heap array
 *
 * ====================================================================
 * WHEN TO USE THIS APPROACH:
 * ====================================================================
 *
 * Use Min Heap when:
 * - You need to repeatedly get minimum/maximum elements
 * - You don't need the entire sorted array
 * - You might stop early (like when you run out of money)
 * - You need a priority queue (always process highest/lowest priority)
 *
 * Use Sorting when:
 * - You need the entire array sorted
 * - Simpler code is preferred
 * - Space is limited (sorting uses O(1) extra space)
 */

// MinHeap class for building heap
class MinHeap {
  constructor(arr) {
    this.arr = arr;
    this.buildHeap();
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  buildHeap() {
    let n = this.arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.minHeapify(i);
    }
  }

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
   * Extract minimum element from heap
   * Removes and returns the smallest element
   *
   * Step-by-step execution:
   *
   * Example: Extract from heap [1, 10, 5, 111, 200, 1000, 12]
   *
   * Step 1: Check if heap is empty
   *   - If empty, return null
   *
   * Step 2: Check if heap has only one element
   *   - If length === 1, just pop and return it
   *
   * Step 3: Store the minimum (root element)
   *   - min = arr[0] = 1
   *
   * Step 4: Replace root with last element
   *   - arr[0] = arr[6] = 12 (last element)
   *   - Array becomes: [12, 10, 5, 111, 200, 1000, 12]
   *
   * Step 5: Remove last element
   *   - arr.pop() removes the duplicate 12
   *   - Array becomes: [12, 10, 5, 111, 200, 1000]
   *   - Now root (12) violates heap property (children 10 and 5 are smaller)
   *
   * Step 6: Heapify root to fix heap property
   *   - Call minHeapify(0) to restore heap
   *   - This moves 12 down to correct position
   *   - Final heap: [5, 10, 12, 111, 200, 1000]
   *
   * Step 7: Return the minimum value
   *   - Return 1 (the value we stored in Step 3)
   *
   * WHY THIS WORKS?
   * - Root always has the minimum in a min heap
   * - After removing root, we put last element at root
   * - Then heapify fixes the heap property
   * - Next extractMin() will give us the next minimum
   */
  extractMin() {
    // Step 1: Check if heap is empty
    if (this.arr.length === 0) {
      return null;
    }

    // Step 2: Special case - only one element
    if (this.arr.length === 1) {
      return this.arr.pop(); // Just remove and return it
    }

    // Step 3: Store the minimum value (root)
    // Root of min heap always contains the minimum element
    let min = this.arr[0];

    // Step 4: Replace root with last element
    // This maintains the complete binary tree structure
    this.arr[0] = this.arr[this.arr.length - 1];

    // Step 5: Remove the last element (we moved it to root)
    this.arr.pop();

    // Step 6: Heapify root to restore heap property
    // The new root might violate heap property, so we fix it
    this.minHeapify(0);

    // Step 7: Return the minimum value we stored
    return min;
  }

  /**
   * Get minimum without removing it
   */
  getMin() {
    return this.arr.length > 0 ? this.arr[0] : null;
  }

  /**
   * Check if heap is empty
   */
  isEmpty() {
    return this.arr.length === 0;
  }
}

/**
 * Maximize toys using Min Heap
 *
 * This function uses a min heap to always get the cheapest toy available.
 * We extract minimum elements one by one and buy them until we run out of money.
 */
function maximizeToysHeap(arr, K) {
  // ====================================================================
  // STEP 1: Build a min heap from the array
  // ====================================================================
  // This arranges toys so the cheapest is always at the root (index 0)
  // After building heap, we can always get the minimum in O(log n) time
  let heap = new MinHeap([...arr]);

  // Example: arr = [1, 12, 5, 111, 200, 1000, 10]
  // After buildHeap(): heap.arr = [1, 10, 5, 111, 200, 1000, 12]
  // Root (index 0) = 1 (cheapest toy)

  // ====================================================================
  // STEP 2: Initialize variables
  // ====================================================================
  let count = 0; // Number of toys we've bought
  let sum = 0; // Total money we've spent so far

  // ====================================================================
  // STEP 3: Extract and buy toys until we run out of money
  // ====================================================================
  // Keep extracting minimum elements (cheapest toys) until:
  // - Heap becomes empty (bought all toys), OR
  // - We can't afford the next cheapest toy
  while (!heap.isEmpty()) {
    // ====================================================================
    // STEP 4: Extract the cheapest toy from heap
    // ====================================================================
    // extractMin() does:
    //   - Returns the minimum value (root)
    //   - Removes it from heap
    //   - Restores heap property
    //   - Next minimum is now at root
    let cheapestToy = heap.extractMin();

    // Example: First call returns 1, heap becomes [5, 10, 12, 111, 200, 1000]
    //          Second call returns 5, heap becomes [10, 12, 1000, 111, 200]

    // ====================================================================
    // STEP 5: Check if we can afford this toy
    // ====================================================================
    // Add the cost of this toy to our total and check if it's within budget
    if (sum + cheapestToy <= K) {
      // ====================================================================
      // STEP 6: Buy the toy
      // ====================================================================
      // We can afford it, so:
      // - Add its cost to our total
      // - Increment the count of toys bought
      sum += cheapestToy;
      count++;

      // Continue to next iteration to buy more toys
    } 
  }

  // ====================================================================
  // STEP 8: Return the count of toys we bought
  // ====================================================================
  return count;
}

/**
 * ====================================================================
 * COMPLETE STEP-BY-STEP EXECUTION WITH DETAILED EXPLANATION
 * ====================================================================
 *
 * Input: arr = [1, 12, 5, 111, 200, 1000, 10], K = 50
 *
 * ====================================================================
 * PHASE 1: BUILD HEAP
 * ====================================================================
 *
 * Step 1: Create MinHeap object
 *   - Input array: [1, 12, 5, 111, 200, 1000, 10]
 *   - Constructor calls buildHeap()
 *
 * Step 2: buildHeap() converts array to min heap
 *   - Starts from last non-leaf node (index 2)
 *   - Calls minHeapify() on each non-leaf node
 *   - Final heap structure: [1, 10, 5, 111, 200, 1000, 12]
 *
 * Heap visualization:
 *           1 (root - minimum)
 *          /  \
 *        10    5
 *       / \   / \
 *     111 200 1000 12
 *
 * Key point: Root (index 0) = 1 is the cheapest toy
 *
 * ====================================================================
 * PHASE 2: EXTRACT AND BUY TOYS
 * ====================================================================
 *
 * Initialize: count = 0, totalCost = 0
 *
 * --------------------------------------------------------------------
 * ITERATION 1: Extract first toy
 * --------------------------------------------------------------------
 *
 * Step 1: Call extractMin()
 *   - Current heap: [1, 10, 5, 111, 200, 1000, 12]
 *   - Store min = arr[0] = 1
 *   - Replace root with last element: arr[0] = arr[6] = 12
 *   - Array: [12, 10, 5, 111, 200, 1000, 12]
 *   - Remove last: [12, 10, 5, 111, 200, 1000]
 *   - Heapify root: minHeapify(0) fixes heap
 *   - Final heap: [5, 10, 12, 111, 200, 1000]
 *   - Return: 1
 *
 * Step 2: Check affordability
 *   - totalCost (0) + cheapestToy (1) = 1 <= 50? Yes ✓
 *
 * Step 3: Buy the toy
 *   - totalCost = 0 + 1 = 1
 *   - count = 0 + 1 = 1
 *
 * Status: Bought 1 toy, spent $1, remaining budget = $49
 * Heap after extraction: [5, 10, 12, 111, 200, 1000]
 *
 * --------------------------------------------------------------------
 * ITERATION 2: Extract second toy
 * --------------------------------------------------------------------
 *
 * Step 1: Call extractMin()
 *   - Current heap: [5, 10, 12, 111, 200, 1000]
 *   - Store min = arr[0] = 5
 *   - Replace root with last: arr[0] = arr[5] = 1000
 *   - Array: [1000, 10, 12, 111, 200, 1000]
 *   - Remove last: [1000, 10, 12, 111, 200]
 *   - Heapify root: minHeapify(0) moves 1000 down
 *   - Final heap: [10, 111, 12, 1000, 200]
 *   - Return: 5
 *
 * Step 2: Check affordability
 *   - totalCost (1) + cheapestToy (5) = 6 <= 50? Yes ✓
 *
 * Step 3: Buy the toy
 *   - totalCost = 1 + 5 = 6
 *   - count = 1 + 1 = 2
 *
 * Status: Bought 2 toys, spent $6, remaining budget = $44
 * Heap after extraction: [10, 111, 12, 1000, 200]
 *
 * --------------------------------------------------------------------
 * ITERATION 3: Extract third toy
 * --------------------------------------------------------------------
 *
 * Step 1: Call extractMin()
 *   - Current heap: [10, 111, 12, 1000, 200]
 *   - Store min = arr[0] = 10
 *   - Replace root with last: arr[0] = arr[4] = 200
 *   - Array: [200, 111, 12, 1000, 200]
 *   - Remove last: [200, 111, 12, 1000]
 *   - Heapify root: minHeapify(0) moves 200 down
 *   - Final heap: [12, 111, 1000, 200]
 *   - Return: 10
 *
 * Step 2: Check affordability
 *   - totalCost (6) + cheapestToy (10) = 16 <= 50? Yes ✓
 *
 * Step 3: Buy the toy
 *   - totalCost = 6 + 10 = 16
 *   - count = 2 + 1 = 3
 *
 * Status: Bought 3 toys, spent $16, remaining budget = $34
 * Heap after extraction: [12, 111, 1000, 200]
 *
 * --------------------------------------------------------------------
 * ITERATION 4: Extract fourth toy
 * --------------------------------------------------------------------
 *
 * Step 1: Call extractMin()
 *   - Current heap: [12, 111, 1000, 200]
 *   - Store min = arr[0] = 12
 *   - Replace root with last: arr[0] = arr[3] = 200
 *   - Array: [200, 111, 1000, 200]
 *   - Remove last: [200, 111, 1000]
 *   - Heapify root: minHeapify(0) moves 200 down
 *   - Final heap: [111, 200, 1000]
 *   - Return: 12
 *
 * Step 2: Check affordability
 *   - totalCost (16) + cheapestToy (12) = 28 <= 50? Yes ✓
 *
 * Step 3: Buy the toy
 *   - totalCost = 16 + 12 = 28
 *   - count = 3 + 1 = 4
 *
 * Status: Bought 4 toys, spent $28, remaining budget = $22
 * Heap after extraction: [111, 200, 1000]
 *
 * --------------------------------------------------------------------
 * ITERATION 5: Extract fifth toy
 * --------------------------------------------------------------------
 *
 * Step 1: Call extractMin()
 *   - Current heap: [111, 200, 1000]
 *   - Store min = arr[0] = 111
 *   - Replace root with last: arr[0] = arr[2] = 1000
 *   - Array: [1000, 200, 1000]
 *   - Remove last: [1000, 200]
 *   - Heapify root: minHeapify(0) moves 1000 down
 *   - Final heap: [200, 1000]
 *   - Return: 111
 *
 * Step 2: Check affordability
 *   - totalCost (28) + cheapestToy (111) = 139 <= 50? No ✗
 *
 * Step 3: Can't afford - BREAK
 *   - We can't buy this toy
 *   - Since heap gives us minimum, all remaining toys are >= 111
 *   - So we can't afford any more toys
 *   - Break out of loop
 *
 * ====================================================================
 * FINAL RESULT
 * ====================================================================
 *
 * count = 4
 * totalCost = 28
 * Toys bought: 1, 5, 10, 12
 *
 * Why this works:
 * - Heap always gives us the cheapest available toy
 * - We buy cheapest first (greedy approach)
 * - This maximizes the number of toys we can buy
 */

// Test cases
console.log("=== Approach 2: Min Heap Method ===");

// Example 1: From problem statement
let arr1 = [1, 12, 5, 111, 200, 1000, 10];
let K1 = 50;
console.log("Input array:", arr1);
console.log("Budget K:", K1);
console.log("Maximum toys:", maximizeToysHeap([...arr1], K1));
console.log("Explanation: Buy toys costing 1, 5, 10, 12 (total = 28)");

// Example 2: Different scenario
let arr2 = [20, 10, 5, 30, 100];
let K2 = 35;
console.log("\nExample 2:");
console.log("Input array:", arr2);
console.log("Budget K:", K2);
console.log("Maximum toys:", maximizeToysHeap([...arr2], K2));
console.log("Explanation: Buy toys costing 5, 10, 20 (total = 35)");

// Example 3: Can buy all toys
let arr3 = [1, 2, 3, 4];
let K3 = 20;
console.log("\nExample 3:");
console.log("Input array:", arr3);
console.log("Budget K:", K3);
console.log("Maximum toys:", maximizeToysHeap([...arr3], K3));
console.log("Explanation: Can buy all 4 toys (total = 10)");

// ====================================================================
// COMPARISON: Sorting vs Heap
// ====================================================================
console.log("\n=== Comparison: Sorting vs Heap ===");
console.log("Sorting Approach:");
console.log("  - Time: O(n log n)");
console.log("  - Space: O(1)");
console.log("  - Simple and straightforward");
console.log("  - Need to sort entire array");
console.log("\nHeap Approach:");
console.log("  - Time: O(n log n)");
console.log("  - Space: O(n)");
console.log("  - More complex but flexible");
console.log("  - Can stop early if needed");
console.log("  - Useful when you need priority queue operations");
