/**
 * Optimal Approach - Maximum Sum Subarray (Kadane's Algorithm)
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the maximum sum of a contiguous subarray.
 * Also known as: Maximum Subarray Sum, Largest Sum Contiguous Subarray
 *
 * Algorithm (Kadane's Algorithm):
 * 1. Track maximum sum ending at current position (maxending)
 * 2. At each position, decide: extend previous subarray OR start new subarray
 * 3. maxending = max(maxending + arr[i], arr[i])
 *    - Extend: Continue with previous subarray (maxending + arr[i])
 *    - Start new: Begin new subarray from current element (arr[i])
 * 4. Update result with maximum maxending seen so far
 *
 * Key Insight: If the sum ending at previous position is negative,
 * it's better to start fresh from current element.
 */
function maxSum(arr) {
  // Step 1: Initialize result to first element
  //   At minimum, maximum sum is at least the first element
  //   Example: arr = [1, -2, 3, -1, 2]
  //   res = arr[0] = 1
  let res = arr[0];

  // Step 2: Initialize maxending to first element
  //   maxending = maximum sum of subarray ending at current position
  //   Initially, only element ending at position 0 is arr[0] itself
  //   Example: arr = [1, -2, 3, -1, 2]
  //   maxending = arr[0] = 1 (max sum ending at index 0)
  let maxending = arr[0];

  // Step 3: Process remaining elements
  //   For each element, decide whether to extend previous subarray or start new
  for (let i = 1; i < arr.length; i++) {
    // Step 3a: Calculate maximum sum ending at current position
    //   Option 1: Extend previous subarray (maxending + arr[i])
    //     Continue the subarray that ended at previous position
    //   Option 2: Start new subarray (arr[i])
    //     Begin fresh from current element
    //
    //   Choose the maximum of these two options
    //   Example: i=1, maxending=1, arr[1]=-2
    //   Option 1: 1 + (-2) = -1 (extend)
    //   Option 2: -2 (start new)
    //   maxending = max(-1, -2) = -1
    //
    //   If maxending is negative, it's better to start fresh
    maxending = Math.max(maxending + arr[i], arr[i]);

    // Step 3b: Update result with maximum sum found so far
    //   Compare maximum ending at current position with previous result
    //   Example: res = 1, maxending = -1
    //   res = Math.max(1, -1) = 1 (don't update, previous max is better)
    res = Math.max(res, maxending);
  }

  // Step 4: Return the maximum subarray sum found
  return res;
}

// Step-by-step execution for maxSum([1, -2, 3, -1, 2]):
//   Input: arr = [1, -2, 3, -1, 2]
//   Visualization:
//     Index: 0   1   2   3   4
//     Value: 1  -2   3  -1   2
//
//   Initialization:
//     res = arr[0] = 1
//     maxending = arr[0] = 1
//     (Max sum ending at index 0: [1], sum = 1)
//
//   Iteration 1: i = 1, arr[i] = -2
//     Step 3a: Calculate maxending
//       Option 1 (extend): maxending + arr[1] = 1 + (-2) = -1
//       Option 2 (start new): arr[1] = -2
//       maxending = max(-1, -2) = -1
//       Max sum ending at index 1: [1, -2], sum = -1
//     Step 3b: Update result
//       res = Math.max(1, -1) = 1
//       (Current max is still 1, from subarray [1])
//
//   Iteration 2: i = 2, arr[i] = 3
//     Step 3a: Calculate maxending
//       Option 1 (extend): maxending + arr[2] = -1 + 3 = 2
//       Option 2 (start new): arr[2] = 3
//       maxending = max(2, 3) = 3
//       Max sum ending at index 2: [3], sum = 3
//       (Better to start fresh from 3 than extend [-1, 3])
//     Step 3b: Update result
//       res = Math.max(1, 3) = 3
//       (New maximum found: subarray [3], sum = 3)
//
//   Iteration 3: i = 3, arr[i] = -1
//     Step 3a: Calculate maxending
//       Option 1 (extend): maxending + arr[3] = 3 + (-1) = 2
//       Option 2 (start new): arr[3] = -1
//       maxending = max(2, -1) = 2
//       Max sum ending at index 3: [3, -1], sum = 2
//       (Extend is better: 2 > -1)
//     Step 3b: Update result
//       res = Math.max(3, 2) = 3
//       (Current max is still 3, from subarray [3])
//
//   Iteration 4: i = 4, arr[i] = 2
//     Step 3a: Calculate maxending
//       Option 1 (extend): maxending + arr[4] = 2 + 2 = 4
//       Option 2 (start new): arr[4] = 2
//       maxending = max(4, 2) = 4
//       Max sum ending at index 4: [3, -1, 2], sum = 4
//       (Extend is better: 4 > 2)
//     Step 3b: Update result
//       res = Math.max(3, 4) = 4
//       (New maximum found: subarray [3, -1, 2], sum = 4)
//
//   Final result: 4
//   Maximum sum subarray: [3, -1, 2] at indices 2-4 (sum = 4)
//
//   Summary:
//     - Max sum ending at index 0: [1], sum = 1
//     - Max sum ending at index 1: [1, -2], sum = -1
//     - Max sum ending at index 2: [3], sum = 3 (restarted)
//     - Max sum ending at index 3: [3, -1], sum = 2 (extended)
//     - Max sum ending at index 4: [3, -1, 2], sum = 4 (extended) ← Maximum
//
//   Key Observation: At index 2, maxending was negative (-1), so we
//   started fresh from arr[2] = 3, which led to the optimal solution.
//
//   Comparison with Naive Approach:
//     Naive: O(n²) - Checks all possible subarrays
//     Kadane's: O(n) - Single pass, maintains optimal subarray ending at each position
//     Both have O(1) space complexity

let arr = [1, -2, 3, -1, 2];
console.log(maxSum(arr));
