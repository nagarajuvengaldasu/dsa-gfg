/**
 * Optimal Approach - Maximum Length Even-Odd Subarray
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the length of the longest subarray where elements alternate
 * between even and odd (or odd and even).
 *
 * Algorithm (Single Pass):
 * 1. Traverse the array once from left to right
 * 2. Maintain a running count of consecutive alternating elements (curr)
 * 3. When elements alternate, increment curr and update result
 * 4. When elements don't alternate (same parity), reset curr to 1
 *
 * Key Optimization: Instead of trying each position as starting point (O(n²)),
 * we traverse once and maintain state (O(n)).
 */
function maxevenodd(arr) {
  // Step 1: Initialize result to 1
  //   At minimum, a single element is always a valid subarray (length 1)
  //   Example: arr = [5, 10, 6, 3, 8]
  //   res = 1
  let res = 1;

  // Step 2: Initialize curr to 1
  //   Track current length of alternating subarray ending at current position
  //   Initially, first element counts as length 1
  //   Example: arr = [5, 10, 6, 3, 8]
  //   curr = 1 (subarray [5] ending at index 0)
  let curr = 1;

  // Step 3: Process remaining elements (from index 1 to end)
  //   For each element, check if it alternates with previous element
  for (let i = 1; i < arr.length; i++) {
    // Step 3a: Check if current and previous elements have alternating parity
    //   Condition 1: arr[i] is even AND arr[i-1] is odd
    //   Condition 2: arr[i] is odd AND arr[i-1] is even
    //   If either condition is true, elements alternate (valid continuation)
    //   Example: i = 1, arr[1] = 10 (even), arr[0] = 5 (odd)
    //   (10 % 2 === 0 && 5 % 2 !== 0)? Yes → They alternate
    if (
      (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
      (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)
    ) {
      // Step 3b: Elements alternate, extend current alternating subarray
      //   Increment current length
      //   Example: curr = 2, arr[i] alternates with arr[i-1]
      //   curr = 2 + 1 = 3
      curr++;

      // Step 3c: Update result with maximum length found so far
      //   Compare current length with previous maximum
      //   Example: res = 2, curr = 3
      //   res = Math.max(2, 3) = 3
      res = Math.max(res, curr);
    } else {
      // Step 3d: Elements don't alternate (same parity)
      //   Reset current length to 1 (start new alternating subarray from current element)
      //   Example: arr[i] = 6 (even), arr[i-1] = 10 (even)
      //   Both are even → Reset curr = 1 (new subarray starting at index i)
      curr = 1;
    }
  }

  // Step 4: Return the maximum length found
  return res;
}

// Step-by-step execution for maxevenodd([5, 10, 6, 3, 8]):
//   Input: arr = [5, 10, 6, 3, 8]
//   Visualization:
//     Index: 0   1   2   3   4
//     Value: 5  10   6   3   8
//     Parity: O  E   E   O   E  (O=Odd, E=Even)
//
//   Initialization:
//     res = 1
//     curr = 1
//     (Current alternating subarray: [5], length = 1)
//
//   Iteration 1: i = 1, arr[i] = 10 (even), arr[i-1] = 5 (odd)
//     Check: (10 % 2 === 0 && 5 % 2 !== 0)? Yes → Alternate ✓
//     curr = 1 + 1 = 2
//     res = Math.max(1, 2) = 2
//     Current alternating subarray: [5, 10], length = 2
//
//   Iteration 2: i = 2, arr[i] = 6 (even), arr[i-1] = 10 (even)
//     Check: (6 % 2 === 0 && 10 % 2 !== 0)? No
//     Check: (6 % 2 !== 0 && 10 % 2 === 0)? No
//     Both are even → Don't alternate ✗
//     curr = 1 (reset, start new subarray from index 2)
//     res = 2 (unchanged)
//     Current alternating subarray: [6], length = 1 (restarted)
//
//   Iteration 3: i = 3, arr[i] = 3 (odd), arr[i-1] = 6 (even)
//     Check: (3 % 2 !== 0 && 6 % 2 === 0)? Yes → Alternate ✓
//     curr = 1 + 1 = 2
//     res = Math.max(2, 2) = 2
//     Current alternating subarray: [6, 3], length = 2
//
//   Iteration 4: i = 4, arr[i] = 8 (even), arr[i-1] = 3 (odd)
//     Check: (8 % 2 === 0 && 3 % 2 !== 0)? Yes → Alternate ✓
//     curr = 2 + 1 = 3
//     res = Math.max(2, 3) = 3
//     Current alternating subarray: [6, 3, 8], length = 3
//
//   Final result: 3
//   Maximum length even-odd subarray: [6, 3, 8] at indices 2-4 (length = 3)
//   Pattern: Even-Odd-Even (6 is even, 3 is odd, 8 is even)
//
//   Summary of alternating subarrays found:
//     - [5, 10] (indices 0-1): length 2 - Odd-Even
//     - [6] (index 2): length 1 - Even only (reset after [5,10])
//     - [6, 3, 8] (indices 2-4): length 3 - Even-Odd-Even ← Maximum
//
//   Key Observation: When we encounter two elements with same parity (at i=2),
//   we reset curr to 1, effectively starting a new alternating subarray from
//   that position. This is optimal because continuing with the previous subarray
//   would break the alternating pattern.
//
//   Comparison with Naive Approach:
//     Naive: O(n²) - For each position, counts alternating elements (O(n) each)
//     Optimal: O(n) - Single pass through array, maintains state
//     Both have O(1) space complexity

let arr = [5, 10, 6, 3, 8];
console.log(maxevenodd(arr));
