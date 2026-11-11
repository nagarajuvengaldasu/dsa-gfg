/**
 * OPTIMAL APPROACH: Check if there exists a contiguous subarray with given sum
 * Using SLIDING WINDOW TECHNIQUE
 *
 * APPROACH EXPLANATION:
 * =====================
 * This uses a TWO-POINTER (sliding window) technique:
 *
 * 1. `end` pointer: Expands the window by adding elements from the right
 * 2. `start` pointer: Shrinks the window from the left when sum exceeds target
 * 3. `curr`: Maintains the current sum of the window [start...end]
 *
 * KEY INSIGHT:
 * - When curr > sum, we shrink from left (increment start) until curr <= sum
 * - This ensures we check all valid subarrays efficiently
 * - Only works for NON-NEGATIVE arrays (or we'd need a different approach)
 *
 * TIME COMPLEXITY: O(n) - each element visited at most twice
 * SPACE COMPLEXITY: O(1)
 */

function subarrayWithGivenSum(arr, sum) {
  // STEP 1: Get array length
  let n = arr.length;

  // STEP 2: Initialize two pointers for sliding window
  // start: left boundary of current window
  // end: right boundary of current window (controlled by loop)
  let start = 0;

  // STEP 3: Initialize current sum of the window
  let curr = 0;

  // STEP 4: Expand the window by moving end pointer from left to right
  // end represents the right boundary of our current window
  for (let end = 0; end < n; end++) {
    // STEP 5: Add the current element to the window sum
    // This expands the window to include arr[end]
    curr = curr + arr[end];

    // Execution trace for arr = [3, 2, 0, 4, 7], sum = 9:
    // end=0: curr = 0 + arr[0] = 0 + 3 = 3
    //        Window: [3], start=0, curr=3

    // STEP 6: Shrink window from left if current sum exceeds target
    // While curr > sum, remove elements from the left until curr <= sum
    // This ensures we don't miss any valid subarrays
    while (sum < curr) {
      // Remove leftmost element from the window
      curr = curr - arr[start];
      // Move start pointer to the right (shrink window)
      start++;

      // Execution trace continuation:
      // end=0: curr=3, sum=9, 3 < 9? No, skip while loop
      //        Check: curr === sum? 3 === 9? No
      //
      // end=1: curr = 3 + arr[1] = 3 + 2 = 5
      //        Window: [3, 2], start=0, curr=5
      //        curr=5, sum=9, 5 < 9? No, skip while loop
      //        Check: curr === sum? 5 === 9? No
      //
      // end=2: curr = 5 + arr[2] = 5 + 0 = 5
      //        Window: [3, 2, 0], start=0, curr=5
      //        curr=5, sum=9, 5 < 9? No, skip while loop
      //        Check: curr === sum? 5 === 9? No
      //
      // end=3: curr = 5 + arr[3] = 5 + 4 = 9
      //        Window: [3, 2, 0, 4], start=0, curr=9
      //        curr=9, sum=9, 9 < 9? No, skip while loop
      //        Check: curr === sum? 9 === 9? YES! ✓
      //        Returns: true
    }

    // STEP 7: Check if current window sum equals target
    // After shrinking (if needed), check if we found the target sum
    if (curr === sum) {
      return true; // Found a subarray with the given sum
    }
  }

  // STEP 8: No subarray found with the given sum
  return false;
}

/**
 * DETAILED STEP-BY-STEP EXECUTION:
 * =================================
 *
 * Input: arr = [3, 2, 0, 4, 7], sum = 9
 *
 * Initialization:
 *   n = 5
 *   start = 0
 *   curr = 0
 *
 * Iteration 1: end = 0
 *   curr = 0 + arr[0] = 0 + 3 = 3
 *   Window: [3] (indices 0 to 0)
 *   Check: sum < curr? 9 < 3? No → skip while loop
 *   Check: curr === sum? 3 === 9? No
 *   Continue...
 *
 * Iteration 2: end = 1
 *   curr = 3 + arr[1] = 3 + 2 = 5
 *   Window: [3, 2] (indices 0 to 1)
 *   Check: sum < curr? 9 < 5? No → skip while loop
 *   Check: curr === sum? 5 === 9? No
 *   Continue...
 *
 * Iteration 3: end = 2
 *   curr = 5 + arr[2] = 5 + 0 = 5
 *   Window: [3, 2, 0] (indices 0 to 2)
 *   Check: sum < curr? 9 < 5? No → skip while loop
 *   Check: curr === sum? 5 === 9? No
 *   Continue...
 *
 * Iteration 4: end = 3
 *   curr = 5 + arr[3] = 5 + 4 = 9
 *   Window: [3, 2, 0, 4] (indices 0 to 3)
 *   Check: sum < curr? 9 < 9? No → skip while loop
 *   Check: curr === sum? 9 === 9? YES! ✓
 *   Return: true
 *
 * Result: true (subarray [3, 2, 0, 4] has sum = 9)
 *
 * ============================================
 *
 * EXAMPLE WITH SHRINKING (if sum was smaller):
 *
 * Input: arr = [3, 2, 0, 4, 7], sum = 4
 *
 * Iteration 1: end = 0
 *   curr = 3, Window: [3]
 *   Check: 4 < 3? No, 3 === 4? No
 *
 * Iteration 2: end = 1
 *   curr = 5, Window: [3, 2]
 *   Check: 4 < 5? YES → Enter while loop
 *     curr = 5 - arr[0] = 5 - 3 = 2, start = 1
 *     Window: [2] (shrunk from left)
 *     Check: 4 < 2? No → exit while loop
 *   Check: 2 === 4? No
 *
 * Iteration 3: end = 2
 *   curr = 2 + 0 = 2, Window: [2, 0]
 *   Check: 4 < 2? No, 2 === 4? No
 *
 * Iteration 4: end = 3
 *   curr = 2 + 4 = 6, Window: [2, 0, 4]
 *   Check: 4 < 6? YES → Enter while loop
 *     curr = 6 - arr[1] = 6 - 2 = 4, start = 2
 *     Window: [0, 4] (shrunk from left)
 *     Check: 4 < 4? No → exit while loop
 *   Check: 4 === 4? YES! ✓
 *   Return: true
 */

/**
 * IMPORTANT NOTES:
 * ================
 *
 * 1. THIS APPROACH WORKS FOR NON-NEGATIVE ARRAYS:
 *    - If array contains negative numbers, this algorithm may not work correctly
 *    - For negative numbers, use prefix sum with hash map approach
 *
 * 2. WHY SHRINK FROM LEFT?
 *    - When curr > sum, removing from left ensures we check all valid subarrays
 *    - We only shrink when necessary (curr > sum)
 *    - This maintains the invariant: curr <= sum after shrinking
 *
 * 3. TIME COMPLEXITY ANALYSIS:
 *    - Each element is added once (O(n))
 *    - Each element is removed at most once (O(n))
 *    - Total: O(n) - much better than naive O(n²)
 *
 * 4. SPACE COMPLEXITY:
 *    - Only uses a few variables: O(1)
 */

let arr = [3, 2, 0, 4, 7];
let sum = 9;
console.log(subarrayWithGivenSum(arr, sum)); // Expected output: true (subarray [3, 2, 0, 4] = 9)
