/**
 * Optimal Approach - Maximum Consecutive 1's in Binary Array
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the maximum number of consecutive 1's in a binary array.
 *
 * Algorithm (Single Pass):
 * 1. Traverse the array once from left to right
 * 2. Maintain a running count of consecutive 1's
 * 3. When encountering 0, reset count to 0
 * 4. When encountering 1, increment count and update maximum
 *
 * Key Optimization: Instead of trying each position as a starting point (O(n²)),
 * we traverse once and maintain state (O(n)).
 */
function maxConsecutive1s(arr) {
  // Step 1: Initialize count to track current consecutive 1's
  //   This tracks how many consecutive 1's we've seen so far
  let count = 0;

  // Step 2: Initialize result to track maximum consecutive 1's found
  //   This stores the maximum count we've seen
  let res = 0;

  // Step 3: Traverse the array once from left to right
  //   Process each element to update count and result
  //   Example: arr = [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
  for (let i = 0; i < arr.length; i++) {
    // Step 3a: If current element is 0, reset count
    //   Consecutive sequence is broken, start counting from 0
    //   Example: arr[i] = 0
    //   count = 0 (reset, no consecutive 1's currently)
    if (arr[i] === 0) {
      count = 0;
    } else {
      // Step 3b: If current element is 1, increment count
      //   Current consecutive sequence continues
      //   Example: arr[i] = 1, count = 2
      //   count = 2 + 1 = 3 (three consecutive 1's so far)
      count++;

      // Step 3c: Update result with maximum count seen so far
      //   Compare current count with previous maximum
      //   Example: res = 2, count = 3
      //   res = Math.max(2, 3) = 3 (update maximum)
      res = Math.max(res, count);
    }
  }

  // Step 4: Return the maximum consecutive 1's found
  //   After processing all elements, res contains the answer
  return res;
}

// Step-by-step execution for maxConsecutive1s([0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]):
//   Input: arr = [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
//   Visualization:
//     Index: 0  1  2  3  4  5  6  7  8  9 10
//     Value: 0  1  1  0  1  1  0  1  1  1  1
//
//   Initialization:
//     count = 0
//     res = 0
//
//   Iteration 1: i = 0, arr[i] = 0
//     arr[0] === 0? Yes
//       count = 0 (reset)
//     res = 0 (unchanged)
//
//   Iteration 2: i = 1, arr[i] = 1
//     arr[1] === 0? No
//       count = 0 + 1 = 1
//       res = Math.max(0, 1) = 1
//     Current consecutive 1's: 1
//
//   Iteration 3: i = 2, arr[i] = 1
//     arr[2] === 0? No
//       count = 1 + 1 = 2
//       res = Math.max(1, 2) = 2
//     Current consecutive 1's: 1, 1 (count = 2)
//
//   Iteration 4: i = 3, arr[i] = 0
//     arr[3] === 0? Yes
//       count = 0 (reset)
//     res = 2 (unchanged)
//     Consecutive sequence broken
//
//   Iteration 5: i = 4, arr[i] = 1
//     arr[4] === 0? No
//       count = 0 + 1 = 1
//       res = Math.max(2, 1) = 2
//     Current consecutive 1's: 1 (count = 1)
//
//   Iteration 6: i = 5, arr[i] = 1
//     arr[5] === 0? No
//       count = 1 + 1 = 2
//       res = Math.max(2, 2) = 2
//     Current consecutive 1's: 1, 1 (count = 2)
//
//   Iteration 7: i = 6, arr[i] = 0
//     arr[6] === 0? Yes
//       count = 0 (reset)
//     res = 2 (unchanged)
//     Consecutive sequence broken
//
//   Iteration 8: i = 7, arr[i] = 1
//     arr[7] === 0? No
//       count = 0 + 1 = 1
//       res = Math.max(2, 1) = 2
//     Current consecutive 1's: 1 (count = 1)
//
//   Iteration 9: i = 8, arr[i] = 1
//     arr[8] === 0? No
//       count = 1 + 1 = 2
//       res = Math.max(2, 2) = 2
//     Current consecutive 1's: 1, 1 (count = 2)
//
//   Iteration 10: i = 9, arr[i] = 1
//     arr[9] === 0? No
//       count = 2 + 1 = 3
//       res = Math.max(2, 3) = 3
//     Current consecutive 1's: 1, 1, 1 (count = 3)
//
//   Iteration 11: i = 10, arr[i] = 1
//     arr[10] === 0? No
//       count = 3 + 1 = 4
//       res = Math.max(3, 4) = 4
//     Current consecutive 1's: 1, 1, 1, 1 (count = 4)
//
//   Final result: 4
//   Maximum consecutive 1's are at positions 7, 8, 9, 10 (four consecutive 1's)
//
//   Summary:
//     - First group: positions 1-2 (2 consecutive 1's)
//     - Second group: positions 4-5 (2 consecutive 1's)
//     - Third group: positions 7-10 (4 consecutive 1's) ← Maximum
//
//   Comparison with Naive Approach:
//     Naive: O(n²) - For each position, counts consecutive 1's (O(n) each)
//     Optimal: O(n) - Single pass through array, maintains state
//     Both have O(1) space complexity

let arr = [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
console.log(maxConsecutive1s(arr));
