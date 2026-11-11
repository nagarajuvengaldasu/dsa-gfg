/**
 * Optimal Approach - Maximum Circular Subarray Sum (Kadane's Algorithm Variant)
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the maximum sum of a contiguous subarray in a circular array.
 * In a circular array, we can wrap around from the end to the beginning.
 *
 * Algorithm (Key Insight):
 * Maximum circular sum = max(maximum normal subarray sum, total sum - minimum normal subarray sum)
 *
 * Why this works:
 * 1. Maximum normal subarray: Best subarray without wrapping (use Kadane's algorithm)
 * 2. Maximum circular subarray: Total sum minus minimum normal subarray
 *    (We remove the minimum subarray, leaving maximum circular subarray)
 * 3. Take the maximum of these two cases
 *
 * Special case: If all elements are negative, maxNormal will be the maximum single element
 */
function maxSumCircular(arr) {
  // Step 1: Calculate total sum of all elements
  //   This is needed to compute circular subarray sum
  //   Example: arr = [5, -2, 3, 4]
  //   sum = 5 + (-2) + 3 + 4 = 10
  let sum = 0;
  arr.forEach((x) => {
    sum += x;
  });

  // Step 2: Initialize variables for Kadane's algorithm
  //   maxEnd: Maximum sum ending at current position (for max subarray)
  //   minEnd: Minimum sum ending at current position (for min subarray)
  //   maxNormal: Maximum normal subarray sum (non-circular)
  //   minNormal: Minimum normal subarray sum (non-circular)
  //   Example: arr = [5, -2, 3, 4]
  //   maxEnd = arr[0] = 5
  //   minEnd = arr[0] = 5
  //   maxNormal = arr[0] = 5
  //   minNormal = arr[0] = 5
  let maxEnd = arr[0];
  let minEnd = arr[0];
  let maxNormal = arr[0];
  let minNormal = arr[0];

  // Step 3: Apply Kadane's algorithm to find max and min subarray sums
  //   Process remaining elements to compute both maximum and minimum subarray sums
  for (let i = 1; i < arr.length; i++) {
    // Step 3a: Calculate maximum sum ending at current position
    //   Kadane's algorithm: extend previous or start new
    //   Example: i=1, maxEnd=5, arr[1]=-2
    //   maxEnd = max(5 + (-2), -2) = max(3, -2) = 3
    maxEnd = Math.max(maxEnd + arr[i], arr[i]);

    // Step 3b: Update maximum normal subarray sum
    //   Track the best maximum sum seen so far
    //   Example: maxNormal=5, maxEnd=3
    //   maxNormal = max(5, 3) = 5
    maxNormal = Math.max(maxNormal, maxEnd);

    // Step 3c: Calculate minimum sum ending at current position
    //   Similar to Kadane's but for minimum (extend or start new)
    //   Example: i=1, minEnd=5, arr[1]=-2
    //   minEnd = min(5 + (-2), -2) = min(3, -2) = -2
    minEnd = Math.min(minEnd + arr[i], arr[i]);

    // Step 3d: Update minimum normal subarray sum
    //   Track the worst minimum sum seen so far
    //   Example: minNormal=5, minEnd=-2
    //   minNormal = min(5, -2) = -2
    minNormal = Math.min(minNormal, minEnd);
  }

  // Step 4: Handle special case (all elements negative)
  //   If maxNormal < 0, all elements are negative
  //   In this case, maximum circular sum = maximum single element = maxNormal
  //   Example: arr = [-1, -2, -3], maxNormal = -1 (maximum single element)
  if (maxNormal < 0) {
    return maxNormal;
  }

  // Step 5: Return maximum of normal and circular subarray sums
  //   maxNormal: Maximum subarray without wrapping
  //   sum - minNormal: Maximum circular subarray (total - minimum subarray)
  //   Example: sum = 10, minNormal = -2, maxNormal = 7
  //   Circular sum = 10 - (-2) = 12
  //   Result = max(7, 12) = 12
  return Math.max(maxNormal, sum - minNormal);
}

// Step-by-step execution for maxSumCircular([5, -2, 3, 4]):
//   Input: arr = [5, -2, 3, 4]
//   Visualization:
//     Index: 0   1   2   3
//     Value: 5  -2   3   4
//
//   Step 1: Calculate total sum
//     sum = 5 + (-2) + 3 + 4 = 10
//
//   Step 2: Initialize variables
//     maxEnd = arr[0] = 5
//     minEnd = arr[0] = 5
//     maxNormal = arr[0] = 5
//     minNormal = arr[0] = 5
//
//   Step 3: Apply Kadane's algorithm
//     Iteration 1: i = 1, arr[i] = -2
//       maxEnd = max(5 + (-2), -2) = max(3, -2) = 3
//       maxNormal = max(5, 3) = 5
//       minEnd = min(5 + (-2), -2) = min(3, -2) = -2
//       minNormal = min(5, -2) = -2
//       (Max subarray ending at index 1: [5, -2], sum = 3)
//       (Min subarray ending at index 1: [-2], sum = -2)
//
//     Iteration 2: i = 2, arr[i] = 3
//       maxEnd = max(3 + 3, 3) = max(6, 3) = 6
//       maxNormal = max(5, 6) = 6
//       minEnd = min(-2 + 3, 3) = min(1, 3) = 1
//       minNormal = min(-2, 1) = -2
//       (Max subarray ending at index 2: [5, -2, 3], sum = 6)
//       (Min subarray ending at index 2: [-2, 3], sum = 1, but minNormal stays -2)
//
//     Iteration 3: i = 3, arr[i] = 4
//       maxEnd = max(6 + 4, 4) = max(10, 4) = 10
//       maxNormal = max(6, 10) = 10
//       minEnd = min(1 + 4, 4) = min(5, 4) = 4
//       minNormal = min(-2, 4) = -2
//       (Max subarray ending at index 3: [5, -2, 3, 4], sum = 10)
//       (Min subarray ending at index 3: [4], sum = 4, but minNormal stays -2)
//
//   After loop:
//     maxNormal = 10 (maximum normal subarray: [5, -2, 3, 4])
//     minNormal = -2 (minimum normal subarray: [-2])
//     sum = 10
//
//   Step 4: Check special case
//     maxNormal = 10 >= 0 → Not all negative, continue
//
//   Step 5: Calculate result
//     Circular sum = sum - minNormal = 10 - (-2) = 12
//     Result = max(maxNormal, circular sum) = max(10, 12) = 12
//
//   Final result: 12
//   Maximum circular subarray: [3, 4, 5] (circular, starting at index 2)
//   This equals: total sum (10) - minimum subarray (-2) = 12
//
//   Explanation:
//     - Maximum normal subarray (no wrap): [5, -2, 3, 4] = 10
//     - Minimum normal subarray: [-2] = -2
//     - Maximum circular subarray (with wrap): Remove [-2], get [3, 4, 5] = 12
//     - Final answer: max(10, 12) = 12
//
//   Comparison with Naive Approach:
//     Naive: O(n²) - Checks all circular subarrays using modulo
//     Optimal: O(n) - Uses Kadane's algorithm twice (max and min) in single pass
//     Both have O(1) space complexity

let arr = [5, -2, 3, 4];
console.log(maxSumCircular(arr));
