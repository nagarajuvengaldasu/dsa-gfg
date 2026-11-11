/**
 * Naive Approach - Maximum Circular Subarray Sum
 * Time Complexity: O(n²) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the maximum sum of a contiguous subarray in a circular array.
 * In a circular array, we can wrap around from the end to the beginning.
 *
 * Algorithm:
 * 1. For each starting position i, consider all subarrays starting from i
 * 2. Use modulo arithmetic to wrap around the array
 * 3. Track the maximum sum found across all circular subarrays
 */
function maxCircularSum(arr) {
  // Step 1: Initialize result to first element
  //   At minimum, maximum sum is at least the first element
  //   Example: arr = [5, -2, 3, 4]
  //   res = arr[0] = 5
  let res = arr[0];

  // Step 2: Try each position as a starting point
  //   For each starting position i, consider all circular subarrays starting from i
  //   Example: arr = [5, -2, 3, 4]
  for (let i = 0; i < arr.length; i++) {
    // Step 2a: Initialize curr to current element
    //   Start with subarray containing only element at position i
    //   Example: i = 0, arr[0] = 5
    //   curr = 5 (subarray [5])
    let curr = arr[i];

    // Step 2b: Update result with single element subarray
    //   Compare current element with previous maximum
    //   Example: res = 5, curr = 5
    //   res = Math.max(5, 5) = 5
    res = Math.max(res, curr);

    // Step 2c: Extend subarray circularly (wrap around array)
    //   Consider subarrays of length 2, 3, ..., n (wrapping around)
    //   Use modulo arithmetic: (i + j) % arr.length to wrap around
    //   Example: i = 0, arr.length = 4
    //   j=1: index = (0+1) % 4 = 1 → arr[1] = -2
    //   j=2: index = (0+2) % 4 = 2 → arr[2] = 3
    //   j=3: index = (0+3) % 4 = 3 → arr[3] = 4
    for (let j = 1; j < arr.length; j++) {
      // Step 2d: Calculate circular index using modulo
      //   (i + j) % arr.length wraps around when i + j >= arr.length
      //   Example: i = 3, j = 1, arr.length = 4
      //   index = (3 + 1) % 4 = 4 % 4 = 0 (wraps to beginning)
      let index = (i + j) % arr.length;

      // Step 2e: Add element at circular index to current sum
      //   Extend subarray by including next element (wrapping if needed)
      //   Example: curr = 5, arr[index] = arr[1] = -2
      //   curr = 5 + (-2) = 3
      curr += arr[index];

      // Step 2f: Update result with maximum sum found so far
      //   Compare current subarray sum with previous maximum
      //   Example: res = 5, curr = 3
      //   res = Math.max(5, 3) = 5
      res = Math.max(res, curr);
    }
  }

  // Step 3: Return the maximum circular subarray sum found
  return res;
}

// Step-by-step execution for maxCircularSum([5, -2, 3, 4]):
//   Input: arr = [5, -2, 3, 4]
//   Visualization (circular array):
//     Index: 0   1   2   3
//     Value: 5  -2   3   4
//            └───┴───┴───┘
//                 │
//            (wraps around)
//
//   Initialization:
//     res = arr[0] = 5
//
//   Iteration 1: i = 0 (subarrays starting at index 0)
//     curr = arr[0] = 5
//     res = Math.max(5, 5) = 5
//     Subarray [0:0] = [5], sum = 5
//     Inner loop: j = 1 to 3
//       j=1: index = (0+1) % 4 = 1
//         curr = 5 + arr[1] = 5 + (-2) = 3
//         res = Math.max(5, 3) = 5
//         Subarray [0:1] = [5, -2], sum = 3
//       j=2: index = (0+2) % 4 = 2
//         curr = 3 + arr[2] = 3 + 3 = 6
//         res = Math.max(5, 6) = 6
//         Subarray [0:2] = [5, -2, 3], sum = 6
//       j=3: index = (0+3) % 4 = 3
//         curr = 6 + arr[3] = 6 + 4 = 10
//         res = Math.max(6, 10) = 10
//         Subarray [0:3] = [5, -2, 3, 4], sum = 10
//     After i=0: res = 10
//
//   Iteration 2: i = 1 (subarrays starting at index 1)
//     curr = arr[1] = -2
//     res = Math.max(10, -2) = 10
//     Subarray [1:1] = [-2], sum = -2
//     Inner loop: j = 1 to 3
//       j=1: index = (1+1) % 4 = 2
//         curr = -2 + arr[2] = -2 + 3 = 1
//         res = Math.max(10, 1) = 10
//         Subarray [1:2] = [-2, 3], sum = 1
//       j=2: index = (1+2) % 4 = 3
//         curr = 1 + arr[3] = 1 + 4 = 5
//         res = Math.max(10, 5) = 10
//         Subarray [1:3] = [-2, 3, 4], sum = 5
//       j=3: index = (1+3) % 4 = 0 (wraps around!)
//         curr = 5 + arr[0] = 5 + 5 = 10
//         res = Math.max(10, 10) = 10
//         Subarray [1:0] = [-2, 3, 4, 5] (circular), sum = 10
//     After i=1: res = 10
//
//   Iteration 3: i = 2 (subarrays starting at index 2)
//     curr = arr[2] = 3
//     res = Math.max(10, 3) = 10
//     Subarray [2:2] = [3], sum = 3
//     Inner loop: j = 1 to 3
//       j=1: index = (2+1) % 4 = 3
//         curr = 3 + arr[3] = 3 + 4 = 7
//         res = Math.max(10, 7) = 10
//         Subarray [2:3] = [3, 4], sum = 7
//       j=2: index = (2+2) % 4 = 0 (wraps around!)
//         curr = 7 + arr[0] = 7 + 5 = 12
//         res = Math.max(10, 12) = 12
//         Subarray [2:0] = [3, 4, 5] (circular), sum = 12
//       j=3: index = (2+3) % 4 = 1 (wraps around!)
//         curr = 12 + arr[1] = 12 + (-2) = 10
//         res = Math.max(12, 10) = 12
//         Subarray [2:1] = [3, 4, 5, -2] (circular), sum = 10
//     After i=2: res = 12
//
//   Iteration 4: i = 3 (subarrays starting at index 3)
//     curr = arr[3] = 4
//     res = Math.max(12, 4) = 12
//     Subarray [3:3] = [4], sum = 4
//     Inner loop: j = 1 to 3
//       j=1: index = (3+1) % 4 = 0 (wraps around!)
//         curr = 4 + arr[0] = 4 + 5 = 9
//         res = Math.max(12, 9) = 12
//         Subarray [3:0] = [4, 5] (circular), sum = 9
//       j=2: index = (3+2) % 4 = 1 (wraps around!)
//         curr = 9 + arr[1] = 9 + (-2) = 7
//         res = Math.max(12, 7) = 12
//         Subarray [3:1] = [4, 5, -2] (circular), sum = 7
//       j=3: index = (3+3) % 4 = 2 (wraps around!)
//         curr = 7 + arr[2] = 7 + 3 = 10
//         res = Math.max(12, 10) = 12
//         Subarray [3:2] = [4, 5, -2, 3] (circular), sum = 10
//     After i=3: res = 12
//
//   Final result: 12
//   Maximum circular subarray: [3, 4, 5] starting at index 2, wrapping to index 0
//   This is equivalent to [3, 4, 5] or indices 2, 3, 0 (circular)
//
//   Summary of key circular subarrays:
//     - [5, -2, 3, 4] (indices 0-3): sum = 10
//     - [-2, 3, 4, 5] (indices 1-0, circular): sum = 10
//     - [3, 4, 5] (indices 2-0, circular): sum = 12 ← Maximum
//     - [4, 5, -2, 3] (indices 3-2, circular): sum = 10
//
//   Note: The circular nature allows us to consider subarrays that wrap around
//   from the end to the beginning, which wouldn't be possible in a linear array.

let arr = [5, -2, 3, 4];
console.log(maxCircularSum(arr));
