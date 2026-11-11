/**
 * NAIVE APPROACH: Maximum Sum of Subarray of Size K
 * This function finds the maximum sum of any contiguous subarray of length k
 *
 * Time Complexity: O(n * k) where n = array length
 * Space Complexity: O(1)
 *
 * ISSUES IDENTIFIED:
 * 1. No edge case handling: k > arr.length, k <= 0, empty array
 * 2. If all numbers are negative, returns 0 instead of maximum negative sum
 * 3. Inefficient: Recalculates sum for overlapping windows (not using sliding window)
 */

function maxSum(arr, k) {
  // Step 1: Initialize result to store maximum sum found
  // ISSUE: If all numbers are negative, this will return 0 instead of the actual max
  // Better: Initialize with Number.NEGATIVE_INFINITY or arr[0] + ... + arr[k-1]
  let res = 0;

  // Step 2: Outer loop - iterate through all possible starting positions
  // Why (arr.length - k + 1)?
  // - If array has 6 elements [0,1,2,3,4,5] and k=3
  // - Valid starting positions: 0,1,2,3 (positions 4 and 5 can't start a window of size 3)
  // - So we need: 0 to (6-3+1)-1 = 0 to 3, which is 4 iterations
  // - Formula: arr.length - k + 1 gives us the number of possible windows
  for (let i = 0; i < arr.length - k + 1; i++) {
    // Step 3: Initialize sum for current window starting at index i
    let sum = 0;

    // Step 4: Inner loop - calculate sum of k consecutive elements
    // j goes from 0 to k-1 (total k elements)
    for (let j = 0; j < k; j++) {
      // Step 5: WHY arr[i+j]?
      // - i is the starting position of the current window
      // - j is the offset within the window (0 to k-1)
      // - arr[i+j] accesses: arr[i+0], arr[i+1], arr[i+2], ..., arr[i+(k-1)]
      //
      // Example with arr = [1, 8, 30, -5, 20, 7], k = 3:
      // When i = 0: j=0 → arr[0+0]=arr[0]=1
      //            j=1 → arr[0+1]=arr[1]=8
      //            j=2 → arr[0+2]=arr[2]=30
      //            Sum = 1 + 8 + 30 = 39
      //
      // When i = 1: j=0 → arr[1+0]=arr[1]=8
      //            j=1 → arr[1+1]=arr[2]=30
      //            j=2 → arr[1+2]=arr[3]=-5
      //            Sum = 8 + 30 + (-5) = 33
      //
      // When i = 2: j=0 → arr[2+0]=arr[2]=30
      //            j=1 → arr[2+1]=arr[3]=-5
      //            j=2 → arr[2+2]=arr[4]=20
      //            Sum = 30 + (-5) + 20 = 45
      //
      // This pattern continues, sliding the window one position at a time
      sum = sum + arr[i + j];
    }

    // Step 6: Update result with maximum sum found so far
    res = Math.max(res, sum);
  }

  // Step 7: Return the maximum sum of any subarray of size k
  return res;
}

// Test case execution trace:
// arr = [1, 8, 30, -5, 20, 7], k = 3
//
// i=0: sum = arr[0] + arr[1] + arr[2] = 1 + 8 + 30 = 39, res = max(0, 39) = 39
// i=1: sum = arr[1] + arr[2] + arr[3] = 8 + 30 + (-5) = 33, res = max(39, 33) = 39
// i=2: sum = arr[2] + arr[3] + arr[4] = 30 + (-5) + 20 = 45, res = max(39, 45) = 45
// i=3: sum = arr[3] + arr[4] + arr[5] = (-5) + 20 + 7 = 22, res = max(45, 22) = 45
//
// Final result: 45

let arr = [1, 8, 30, -5, 20, 7];
let k = 3;
console.log(maxSum(arr, k)); // Expected output: 45

/**
 * POTENTIAL ISSUES AND IMPROVEMENTS:
 *
 * 1. Edge Cases Not Handled:
 *    - if (k > arr.length) return null or handle appropriately
 *    - if (k <= 0) return null or throw error
 *    - if (arr.length === 0) return null
 *
 * 2. Negative Numbers Issue:
 *    - If all numbers are negative, returns 0 instead of maximum sum
 *    - Fix: Initialize res = Number.NEGATIVE_INFINITY
 *
 * 3. Performance:
 *    - This is O(n*k) - recalculates sum for each window
 *    - Sliding window technique can optimize to O(n) by reusing previous sum
 */
