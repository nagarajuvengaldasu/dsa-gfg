/**
 * Naive Approach - Maximum Length Even-Odd Subarray
 * Time Complexity: O(n²) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find the length of the longest subarray where elements alternate
 * between even and odd (or odd and even).
 *
 * Algorithm:
 * 1. For each starting position i, count consecutive alternating even-odd elements
 * 2. Break when two consecutive elements have the same parity (both even or both odd)
 * 3. Track the maximum length found
 */
function maxEvenOddSubarray(arr) {
  // Step 1: Initialize result to 1
  //   At minimum, a single element is always a valid subarray (length 1)
  //   Example: arr = [5, 10, 6, 3, 8]
  //   res = 1
  let res = 1;

  // Step 2: Try each position as a starting point
  //   For each starting position i, find length of longest alternating subarray
  //   Example: arr = [5, 10, 6, 3, 8]
  for (let i = 0; i < arr.length; i++) {
    // Step 2a: Initialize curr to 1 for current starting position
    //   Current element at position i counts as length 1
    //   Example: i = 0, arr[0] = 5 (odd)
    //   curr = 1 (subarray [5])
    let curr = 1;

    // Step 2b: Extend subarray while elements alternate (even-odd or odd-even)
    //   Check if current element has different parity than previous element
    //   Example: i = 0, j = 1
    //   arr[1] = 10 (even), arr[0] = 5 (odd)
    //   10 % 2 === 0 && 5 % 2 !== 0? Yes → curr = 2
    for (let j = i + 1; j < arr.length; j++) {
      // Step 2c: Check if current and previous elements have alternating parity
      //   Condition 1: arr[j] is even AND arr[j-1] is odd
      //   Condition 2: arr[j] is odd AND arr[j-1] is even
      //   If either condition is true, elements alternate (valid continuation)
      //   Example: arr[j] = 10 (even), arr[j-1] = 5 (odd)
      //   (10 % 2 === 0 && 5 % 2 !== 0)? Yes → They alternate
      if (
        (arr[j] % 2 === 0 && arr[j - 1] % 2 !== 0) ||
        (arr[j] % 2 !== 0 && arr[j - 1] % 2 === 0)
      ) {
        // Elements alternate, increment current length
        curr++;
      } else {
        // Two consecutive elements have same parity (both even or both odd)
        //   Break: cannot extend alternating subarray further
        //   Example: arr[j] = 6 (even), arr[j-1] = 10 (even)
        //   Both are even → break (not alternating)
        break;
      }
    }

    // Step 2d: Update result with maximum length found so far
    //   Compare current length with previous maximum
    //   Example: res = 2, curr = 3
    //   res = Math.max(2, 3) = 3
    res = Math.max(res, curr);
  }

  // Step 3: Return the maximum length found
  return res;
}

// Step-by-step execution for maxEvenOddSubarray([5, 10, 6, 3, 8]):
//   Input: arr = [5, 10, 6, 3, 8]
//   Visualization:
//     Index: 0   1   2   3   4
//     Value: 5  10   6   3   8
//     Parity: O  E   E   O   E  (O=Odd, E=Even)
//
//   Initialization:
//     res = 1
//
//   Iteration 1: i = 0, arr[i] = 5 (odd)
//     curr = 1
//     Subarray so far: [5], length = 1
//     Inner loop: j = 1 to 4
//       j=1: arr[1] = 10 (even), arr[0] = 5 (odd)
//         Check: (10 % 2 === 0 && 5 % 2 !== 0)? Yes → Alternate ✓
//         curr = 1 + 1 = 2
//         Subarray: [5, 10], length = 2
//       j=2: arr[2] = 6 (even), arr[1] = 10 (even)
//         Check: (6 % 2 === 0 && 10 % 2 !== 0)? No
//         Check: (6 % 2 !== 0 && 10 % 2 === 0)? No
//         Both are even → Break
//     curr = 2
//     res = Math.max(1, 2) = 2
//
//   Iteration 2: i = 1, arr[i] = 10 (even)
//     curr = 1
//     Subarray so far: [10], length = 1
//     Inner loop: j = 2 to 4
//       j=2: arr[2] = 6 (even), arr[1] = 10 (even)
//         Both are even → Break immediately
//     curr = 1
//     res = Math.max(2, 1) = 2
//
//   Iteration 3: i = 2, arr[i] = 6 (even)
//     curr = 1
//     Subarray so far: [6], length = 1
//     Inner loop: j = 3 to 4
//       j=3: arr[3] = 3 (odd), arr[2] = 6 (even)
//         Check: (3 % 2 !== 0 && 6 % 2 === 0)? Yes → Alternate ✓
//         curr = 1 + 1 = 2
//         Subarray: [6, 3], length = 2
//       j=4: arr[4] = 8 (even), arr[3] = 3 (odd)
//         Check: (8 % 2 === 0 && 3 % 2 !== 0)? Yes → Alternate ✓
//         curr = 2 + 1 = 3
//         Subarray: [6, 3, 8], length = 3
//       j=5: j < arr.length? No → Exit loop
//     curr = 3
//     res = Math.max(2, 3) = 3
//
//   Iteration 4: i = 3, arr[i] = 3 (odd)
//     curr = 1
//     Subarray so far: [3], length = 1
//     Inner loop: j = 4 to 4
//       j=4: arr[4] = 8 (even), arr[3] = 3 (odd)
//         Check: (8 % 2 === 0 && 3 % 2 !== 0)? Yes → Alternate ✓
//         curr = 1 + 1 = 2
//         Subarray: [3, 8], length = 2
//       j=5: j < arr.length? No → Exit loop
//     curr = 2
//     res = Math.max(3, 2) = 3
//
//   Iteration 5: i = 4, arr[i] = 8 (even)
//     curr = 1
//     Subarray so far: [8], length = 1
//     Inner loop: j = 5, j < arr.length? No → Skip
//     curr = 1
//     res = Math.max(3, 1) = 3
//
//   Final result: 3
//   Maximum length even-odd subarray: [6, 3, 8] at indices 2-4 (length = 3)
//   Pattern: Even-Odd-Even (6 is even, 3 is odd, 8 is even)
//
//   Summary:
//     - Starting at index 0: [5, 10] (length 2) - Odd-Even
//     - Starting at index 1: [10] (length 1) - Even only
//     - Starting at index 2: [6, 3, 8] (length 3) - Even-Odd-Even ← Maximum
//     - Starting at index 3: [3, 8] (length 2) - Odd-Even
//     - Starting at index 4: [8] (length 1) - Even only

let arr = [5, 10, 6, 3, 8];
console.log(maxEvenOddSubarray(arr));
