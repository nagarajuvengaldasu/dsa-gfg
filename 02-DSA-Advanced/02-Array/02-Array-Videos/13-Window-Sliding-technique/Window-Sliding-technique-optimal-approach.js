/**
 * OPTIMAL APPROACH: Maximum Sum of Subarray of Size K using Sliding Window Technique
 *
 * APPROACH EXPLANATION:
 * =====================
 * Instead of recalculating the sum for each window from scratch (which is O(n*k)),
 * we use the SLIDING WINDOW TECHNIQUE:
 *
 * 1. Calculate the sum of the FIRST window (indices 0 to k-1)
 * 2. For each subsequent window, we SLIDE the window by:
 *    - REMOVING the leftmost element (arr[i-k]) that's leaving the window
 *    - ADDING the rightmost element (arr[i]) that's entering the window
 *    - Formula: new_sum = old_sum - arr[leaving] + arr[entering]
 *
 * WHY THIS IS OPTIMAL:
 * - Naive approach: O(n*k) - recalculates sum for each window
 * - Sliding window: O(n) - only one pass through the array
 *
 * VISUAL EXAMPLE with arr = [1, 8, 30, -5, 20, 7], k = 3:
 *
 * Window 1: [1, 8, 30]           → sum = 39
 * Window 2: [8, 30, -5]          → sum = 39 - 1 + (-5) = 33
 * Window 3: [30, -5, 20]          → sum = 33 - 8 + 20 = 45
 * Window 4: [-5, 20, 7]          → sum = 45 - 30 + 7 = 22
 *
 * Maximum sum = 45
 */

function maxKsum(arr, k) {
  // STEP 1: Calculate the sum of the FIRST window (indices 0 to k-1)
  // This is our initial window that we'll slide across the array
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
    // Execution trace for arr = [1, 8, 30, -5, 20, 7], k = 3:
    // i=0: sum = 0 + arr[0] = 0 + 1 = 1
    // i=1: sum = 1 + arr[1] = 1 + 8 = 9
    // i=2: sum = 9 + arr[2] = 9 + 30 = 39
    // After loop: sum = 39 (sum of first window: [1, 8, 30])
  }

  // STEP 2: Initialize result with the sum of the first window
  // This will store the maximum sum found so far
  let res = sum; // res = 39

  // STEP 3: Get array length for the sliding window loop
  let n = arr.length; // n = 6

  // STEP 4: SLIDE THE WINDOW from position k to n-1
  // We start from index k because we've already processed the first window (0 to k-1)
  // For each position i, we're sliding the window one position to the right
  for (let i = k; i < n; i++) {
    // STEP 5: SLIDING WINDOW FORMULA - This is the KEY insight!
    //
    // Current window: [arr[i-k], arr[i-k+1], ..., arr[i-1]]
    // New window:     [arr[i-k+1], arr[i-k+2], ..., arr[i]]
    //
    // To get the new sum:
    // - Remove arr[i-k] (leftmost element leaving the window)
    // - Add arr[i] (rightmost element entering the window)
    //
    // Formula: sum = sum - arr[i-k] + arr[i]
    // Which is equivalent to: sum = sum + (arr[i] - arr[i-k])
    //
    // WHY arr[i-k]?
    // - When window slides from position i-1 to i
    // - The element at position (i-k) is the one leaving the window
    // - Example: if i=3, k=3, then arr[3-3]=arr[0] is leaving
    //
    // WHY arr[i]?
    // - This is the new element entering the window at position i
    //
    sum = sum + (arr[i] - arr[i - k]);

    // Execution trace for arr = [1, 8, 30, -5, 20, 7], k = 3:
    //
    // i=3: sum = 39 + (arr[3] - arr[0])
    //         = 39 + (-5 - 1)
    //         = 39 + (-6)
    //         = 33
    //      Window: [8, 30, -5] (removed 1, added -5)
    //      res = max(39, 33) = 39
    //
    // i=4: sum = 33 + (arr[4] - arr[1])
    //         = 33 + (20 - 8)
    //         = 33 + 12
    //         = 45
    //      Window: [30, -5, 20] (removed 8, added 20)
    //      res = max(39, 45) = 45
    //
    // i=5: sum = 45 + (arr[5] - arr[2])
    //         = 45 + (7 - 30)
    //         = 45 + (-23)
    //         = 22
    //      Window: [-5, 20, 7] (removed 30, added 7)
    //      res = max(45, 22) = 45

    // STEP 6: Update the maximum sum found so far
    res = Math.max(res, sum);
  }

  // STEP 7: Return the maximum sum of any subarray of size k
  return res; // Returns 45
}

/**
 * DETAILED STEP-BY-STEP EXECUTION:
 * =================================
 *
 * Input: arr = [1, 8, 30, -5, 20, 7], k = 3
 *
 * PHASE 1: Calculate first window sum
 * ------------------------------------
 * Loop 1 (i=0 to k-1): Calculate sum of [arr[0], arr[1], arr[2]]
 *   i=0: sum = 0 + 1 = 1
 *   i=1: sum = 1 + 8 = 9
 *   i=2: sum = 9 + 30 = 39
 * Result: sum = 39, res = 39
 * Window: [1, 8, 30] → sum = 39
 *
 * PHASE 2: Slide the window
 * --------------------------
 *
 * Iteration 1: i = 3
 *   Current window: [1, 8, 30] (sum = 39)
 *   Element leaving: arr[3-3] = arr[0] = 1
 *   Element entering: arr[3] = -5
 *   New sum: 39 + (-5 - 1) = 39 - 6 = 33
 *   New window: [8, 30, -5] → sum = 33
 *   res = max(39, 33) = 39
 *
 * Iteration 2: i = 4
 *   Current window: [8, 30, -5] (sum = 33)
 *   Element leaving: arr[4-3] = arr[1] = 8
 *   Element entering: arr[4] = 20
 *   New sum: 33 + (20 - 8) = 33 + 12 = 45
 *   New window: [30, -5, 20] → sum = 45
 *   res = max(39, 45) = 45 ← NEW MAXIMUM!
 *
 * Iteration 3: i = 5
 *   Current window: [30, -5, 20] (sum = 45)
 *   Element leaving: arr[5-3] = arr[2] = 30
 *   Element entering: arr[5] = 7
 *   New sum: 45 + (7 - 30) = 45 - 23 = 22
 *   New window: [-5, 20, 7] → sum = 22
 *   res = max(45, 22) = 45
 *
 * Final Result: 45
 *
 * COMPLEXITY ANALYSIS:
 * - Time Complexity: O(n) - single pass through the array
 * - Space Complexity: O(1) - only using a few variables
 */

let arr = [1, 8, 30, -5, 20, 7];
let k = 3;
console.log(maxKsum(arr, k)); // Expected output: 45
