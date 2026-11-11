/**
 * Optimal solution using XOR operator
 *
 * Key insight: XOR properties:
 * - x ^ x = 0 (same number XORed with itself gives 0)
 * - x ^ 0 = x (any number XORed with 0 gives itself)
 * - XOR is commutative and associative
 *
 * If a number appears even times, it will cancel out (become 0)
 * If a number appears odd times, it will remain in the result
 *
 * Step-by-step execution:
 * Example: arr = [4, 3, 4, 4, 4, 5, 5, 3, 3]
 * Expected: 3 (appears 3 times, which is odd)
 *
 * Step 1: Initialize res = arr[0] = 4
 *
 * Iteration 1: i = 1, arr[i] = 3
 *   - res = res ^ arr[i] = 4 ^ 3 = 7
 *
 * Iteration 2: i = 2, arr[i] = 4
 *   - res = res ^ arr[i] = 7 ^ 4 = 3
 *
 * Iteration 3: i = 3, arr[i] = 4
 *   - res = res ^ arr[i] = 3 ^ 4 = 7
 *
 * Iteration 4: i = 4, arr[i] = 4
 *   - res = res ^ arr[i] = 7 ^ 4 = 3
 *
 * Iteration 5: i = 5, arr[i] = 5
 *   - res = res ^ arr[i] = 3 ^ 5 = 6
 *
 * Iteration 6: i = 6, arr[i] = 5
 *   - res = res ^ arr[i] = 6 ^ 5 = 3
 *
 * Iteration 7: i = 7, arr[i] = 3
 *   - res = res ^ arr[i] = 3 ^ 3 = 0
 *
 * Iteration 8: i = 8, arr[i] = 3
 *   - res = res ^ arr[i] = 0 ^ 3 = 3
 *
 * Final: return res = 3
 *
 * Note: All even-occurring numbers (4 appears 4 times, 5 appears 2 times) cancel out,
 * leaving only the odd-occurring number (3 appears 3 times)
 */
function findOddOccuringNumber(arr) {
  // Step 1: Initialize result with first element
  let res = arr[0];

  // Step 2: XOR all elements in the array
  // Even-occurring numbers will cancel out (become 0)
  // Only odd-occurring number will remain
  for (let i = 1; i < arr.length; i++) {
    res = res ^ arr[i]; // XOR operation
  }

  // Step 3: Return the result (the odd-occurring number)
  return res;
}

// Test execution:
// Step 1: Initialize array
let arr = [4, 3, 4, 4, 4, 5, 5, 3, 3];
// Step 2: Call function and print result
console.log(findOddOccuringNumber(arr)); // Output: 3
