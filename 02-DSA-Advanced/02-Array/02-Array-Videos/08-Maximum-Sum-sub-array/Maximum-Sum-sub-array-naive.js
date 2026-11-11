/**
 * Naive Approach - Maximum Sum Subarray (Kadane's Problem - Naive Version)
 * Time Complexity: O(n²) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the maximum sum of a contiguous subarray.
 * Also known as: Maximum Subarray Sum, Largest Sum Contiguous Subarray
 *
 * Algorithm:
 * 1. For each starting position i, calculate sum of all subarrays starting at i
 * 2. For each subarray, update the maximum sum found
 * 3. Return the maximum sum
 */
function maxSum(arr) {
  // Step 1: Initialize result to first element
  //   At minimum, maximum sum is at least the first element
  //   Example: arr = [1, -2, 3, -1]
  //   res = arr[0] = 1
  let res = arr[0];

  // Step 2: Try each position as starting point
  //   For each starting position i, consider all subarrays starting from i
  //   Example: arr = [1, -2, 3, -1]
  for (let i = 0; i < arr.length; i++) {
    // Step 2a: Initialize sum to 0 for current starting position
    //   Sum will accumulate as we extend the subarray
    let sum = 0;

    // Step 2b: Calculate sum of all subarrays starting from position i
    //   Extend subarray by including elements one by one
    //   Example: i = 0
    //   j=0: sum = 0 + arr[0] = 1, res = max(1, 1) = 1
    //   j=1: sum = 1 + arr[1] = 1 + (-2) = -1, res = max(1, -1) = 1
    //   j=2: sum = -1 + arr[2] = -1 + 3 = 2, res = max(1, 2) = 2
    //   j=3: sum = 2 + arr[3] = 2 + (-1) = 1, res = max(2, 1) = 2
    for (let j = i; j < arr.length; j++) {
      // Add current element to sum
      //   This extends the subarray from [i...j-1] to [i...j]
      sum += arr[j];

      // Update result with maximum sum found so far
      //   Compare current subarray sum with previous maximum
      //   Example: res = 2, sum = 3
      //   res = Math.max(2, 3) = 3
      res = Math.max(res, sum);
    }
  }

  // Step 3: Return the maximum subarray sum found
  return res;
}

// Step-by-step execution for maxSum([1, -2, 3, -1]):
//   Input: arr = [1, -2, 3, -1]
//   Visualization:
//     Index: 0   1   2   3
//     Value: 1  -2   3  -1
//
//   Initialization:
//     res = arr[0] = 1
//
//   Iteration 1: i = 0 (subarrays starting at index 0)
//     sum = 0
//     Inner loop: j = 0 to 3
//       j=0: sum = 0 + arr[0] = 0 + 1 = 1
//         res = Math.max(1, 1) = 1
//         Subarray [0:0] = [1], sum = 1
//       j=1: sum = 1 + arr[1] = 1 + (-2) = -1
//         res = Math.max(1, -1) = 1
//         Subarray [0:1] = [1, -2], sum = -1
//       j=2: sum = -1 + arr[2] = -1 + 3 = 2
//         res = Math.max(1, 2) = 2
//         Subarray [0:2] = [1, -2, 3], sum = 2
//       j=3: sum = 2 + arr[3] = 2 + (-1) = 1
//         res = Math.max(2, 1) = 2
//         Subarray [0:3] = [1, -2, 3, -1], sum = 1
//     After i=0: res = 2
//
//   Iteration 2: i = 1 (subarrays starting at index 1)
//     sum = 0
//     Inner loop: j = 1 to 3
//       j=1: sum = 0 + arr[1] = 0 + (-2) = -2
//         res = Math.max(2, -2) = 2
//         Subarray [1:1] = [-2], sum = -2
//       j=2: sum = -2 + arr[2] = -2 + 3 = 1
//         res = Math.max(2, 1) = 2
//         Subarray [1:2] = [-2, 3], sum = 1
//       j=3: sum = 1 + arr[3] = 1 + (-1) = 0
//         res = Math.max(2, 0) = 2
//         Subarray [1:3] = [-2, 3, -1], sum = 0
//     After i=1: res = 2
//
//   Iteration 3: i = 2 (subarrays starting at index 2)
//     sum = 0
//     Inner loop: j = 2 to 3
//       j=2: sum = 0 + arr[2] = 0 + 3 = 3
//         res = Math.max(2, 3) = 3
//         Subarray [2:2] = [3], sum = 3
//       j=3: sum = 3 + arr[3] = 3 + (-1) = 2
//         res = Math.max(3, 2) = 3
//         Subarray [2:3] = [3, -1], sum = 2
//     After i=2: res = 3
//
//   Iteration 4: i = 3 (subarrays starting at index 3)
//     sum = 0
//     Inner loop: j = 3 to 3
//       j=3: sum = 0 + arr[3] = 0 + (-1) = -1
//         res = Math.max(3, -1) = 3
//         Subarray [3:3] = [-1], sum = -1
//     After i=3: res = 3
//
//   Final result: 3
//   Maximum sum subarray: [3] at index 2 (sum = 3)
//
//   Summary of all subarrays checked:
//     [1] = 1, [1,-2] = -1, [1,-2,3] = 2, [1,-2,3,-1] = 1
//     [-2] = -2, [-2,3] = 1, [-2,3,-1] = 0
//     [3] = 3 ← Maximum
//     [3,-1] = 2
//     [-1] = -1
//
//   Note: This algorithm checks all possible subarrays (O(n²) subarrays)
//   and finds the maximum sum in O(n²) time.

let arr = [1, -2, 3, -1];
console.log(maxSum(arr));
