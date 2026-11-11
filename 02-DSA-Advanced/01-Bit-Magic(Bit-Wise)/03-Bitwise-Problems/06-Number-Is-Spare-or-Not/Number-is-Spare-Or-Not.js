/**
 * Problem: Check if a number is sparse
 *
 * Definition: A number is sparse if no two or more consecutive bits are set
 * in its binary representation.
 *
 * Examples:
 *
 * Example 1: n = 2
 * Binary: 10
 * Analysis: No consecutive set bits → Sparse (true)
 *
 * Example 2: n = 3
 * Binary: 11
 * Analysis: Has consecutive set bits at positions 0 and 1 → Not sparse (false)
 *
 * Example 3: n = 5
 * Binary: 101
 * Analysis: Set bits at positions 0 and 2, not consecutive → Sparse (true)
 *
 * Example 4: n = 6
 * Binary: 110
 * Analysis: Has consecutive set bits at positions 1 and 2 → Not sparse (false)
 */

/**
 * APPROACH 1: Using Bitwise AND with Right Shift (Optimal)
 * Time Complexity: O(1) - constant time operation
 * Space Complexity: O(1)
 *
 * Key Insight:
 * - Right shift n by 1: n >> 1 moves all bits one position right
 * - AND operation: n & (n >> 1) gives 1 only where consecutive bits are set
 * - If result is non-zero, number has consecutive set bits (not sparse)
 * - If result is zero, number has no consecutive set bits (sparse)
 *
 * Step-by-step execution:
 * Example 1: n = 2 (sparse)
 *
 * Step 1: Right shift n by 1
 *   n = 2 → binary: 10
 *   n >> 1 = 1 → binary: 01
 *
 * Step 2: Perform AND operation
 *   n & (n >> 1) = 2 & 1
 *   10
 *   01
 *   --
 *   00  (result = 0)
 *
 * Step 3: Check if result is zero
 *   Since result = 0, no consecutive set bits → return true (sparse)
 *
 * Example 2: n = 3 (not sparse)
 *
 * Step 1: Right shift n by 1
 *   n = 3 → binary: 11
 *   n >> 1 = 1 → binary: 01
 *
 * Step 2: Perform AND operation
 *   n & (n >> 1) = 3 & 1
 *   11
 *   01
 *   --
 *   01  (result = 1, non-zero)
 *
 * Step 3: Check if result is zero
 *   Since result ≠ 0, has consecutive set bits → return false (not sparse)
 *
 * Example 3: n = 5 (sparse)
 *
 * Step 1: Right shift n by 1
 *   n = 5 → binary: 101
 *   n >> 1 = 2 → binary: 010
 *
 * Step 2: Perform AND operation
 *   n & (n >> 1) = 5 & 2
 *   101
 *   010
 *   ---
 *   000  (result = 0)
 *
 * Step 3: Check if result is zero
 *   Since result = 0, no consecutive set bits → return true (sparse)
 *
 * Example 4: n = 6 (not sparse)
 *
 * Step 1: Right shift n by 1
 *   n = 6 → binary: 110
 *   n >> 1 = 3 → binary: 011
 *
 * Step 2: Perform AND operation
 *   n & (n >> 1) = 6 & 3
 *   110
 *   011
 *   ---
 *   010  (result = 2, non-zero)
 *
 * Step 3: Check if result is zero
 *   Since result ≠ 0, has consecutive set bits → return false (not sparse)
 */
function isSparseOptimal(n) {
  // Step 1: Check if n & (n >> 1) is non-zero
  // If non-zero, it means there are consecutive set bits (not sparse)
  // If zero, it means no consecutive set bits (sparse)

  // Right shift by 1: moves all bits one position to the right
  // AND operation: gives 1 only where both current and previous bit are set
  let result = n & (n >> 1);

  // Step 2: Return true if result is 0 (sparse), false otherwise (not sparse)
  return result === 0;
}

/**
 * APPROACH 2: Iterative Bit Checking
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: n = 3 (not sparse)
 *
 * Step 1: Initialize previousBit = 0
 *
 * Step 2: Loop while n > 0
 *   Iteration 1: n = 3 (binary: 11)
 *     - currentBit = n & 1 = 3 & 1 = 1
 *     - Check: currentBit === 1 && previousBit === 1 → true
 *     - Consecutive set bits found → return false
 *
 * Example: n = 5 (sparse)
 *
 * Step 1: Initialize previousBit = 0
 *
 * Step 2: Loop while n > 0
 *   Iteration 1: n = 5 (binary: 101)
 *     - currentBit = n & 1 = 5 & 1 = 1
 *     - Check: currentBit === 1 && previousBit === 1 → false (previousBit = 0)
 *     - previousBit = 1, n = 2
 *
 *   Iteration 2: n = 2 (binary: 10)
 *     - currentBit = n & 1 = 2 & 1 = 0
 *     - Check: currentBit === 1 && previousBit === 1 → false (currentBit = 0)
 *     - previousBit = 0, n = 1
 *
 *   Iteration 3: n = 1 (binary: 1)
 *     - currentBit = n & 1 = 1 & 1 = 1
 *     - Check: currentBit === 1 && previousBit === 1 → false (previousBit = 0)
 *     - previousBit = 1, n = 0
 *
 * Step 3: Loop exits, no consecutive bits found → return true
 */
function isSparseIterative(n) {
  // Step 1: Track the previous bit value
  let previousBit = 0;

  // Step 2: Check each bit from right to left
  while (n > 0) {
    // Step 3: Get the current least significant bit (LSB)
    let currentBit = n & 1;

    // Step 4: Check if both current and previous bits are set
    // If yes, we found consecutive set bits → not sparse
    if (currentBit === 1 && previousBit === 1) {
      return false; // Not sparse
    }

    // Step 5: Update previous bit and right shift n
    previousBit = currentBit;
    n = n >> 1; // Move to next bit
  }

  // Step 6: No consecutive set bits found → sparse
  return true;
}

/**
 * APPROACH 3: Using String Conversion (Less Efficient)
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 *
 * Step-by-step execution:
 * Example: n = 3
 *
 * Step 1: Convert to binary string
 *   binary = n.toString(2) = "11"
 *
 * Step 2: Check for consecutive '1's
 *   binary.includes("11") = true
 *
 * Step 3: Return false (not sparse)
 */
function isSparseString(n) {
  // Step 1: Convert number to binary string
  let binary = n.toString(2);

  // Step 2: Check if binary string contains consecutive '1's
  // If "11" is found, number has consecutive set bits
  if (binary.includes("11")) {
    return false; // Not sparse
  }

  // Step 3: No consecutive '1's found → sparse
  return true;
}

/**
 * APPROACH 4: Using Regular Expression (Alternative)
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */
function isSparseRegex(n) {
  // Convert to binary and check for consecutive 1s using regex
  let binary = n.toString(2);
  // Pattern /11/ matches two consecutive 1s
  return !/11/.test(binary);
}

// Test all approaches
console.log("=== Testing All Approaches ===\n");

let testCases = [
  { n: 2, expected: true, desc: "Binary: 10" },
  { n: 3, expected: false, desc: "Binary: 11 (consecutive)" },
  { n: 5, expected: true, desc: "Binary: 101" },
  { n: 6, expected: false, desc: "Binary: 110 (consecutive)" },
  { n: 1, expected: true, desc: "Binary: 1" },
  { n: 4, expected: true, desc: "Binary: 100" },
  { n: 7, expected: false, desc: "Binary: 111 (consecutive)" },
  { n: 10, expected: true, desc: "Binary: 1010" },
  { n: 12, expected: false, desc: "Binary: 1100 (consecutive)" },
  { n: 21, expected: true, desc: "Binary: 10101" },
];

testCases.forEach((test) => {
  console.log(`Input: n = ${test.n} (${test.desc})`);
  console.log(`Expected: ${test.expected}`);
  console.log(`Optimal: ${isSparseOptimal(test.n)}`);
  console.log(`Iterative: ${isSparseIterative(test.n)}`);
  console.log(`String: ${isSparseString(test.n)}`);
  console.log(`Regex: ${isSparseRegex(test.n)}`);
  console.log("---");
});

/**
 * RECOMMENDATION:
 *
 * For GeeksforGeeks submission:
 * - Use APPROACH 1 (Optimal) - O(1) time, O(1) space
 * - Single line: return (n & (n >> 1)) === 0;
 * - This is the most efficient solution
 *
 * Algorithm Summary:
 * 1. Right shift n by 1: n >> 1
 * 2. AND with original: n & (n >> 1)
 * 3. If result is 0 → sparse (no consecutive set bits)
 * 4. If result is non-zero → not sparse (has consecutive set bits)
 *
 * Why this works:
 * - Right shift moves all bits one position right
 * - AND operation gives 1 only where both current and previous bit are set
 * - If any position has consecutive set bits, AND result will be non-zero
 */

// GeeksforGeeks Solution Format:
class Solution {
  isSparse(n) {
    // Step 1: Check if n & (n >> 1) is zero
    // Zero means no consecutive set bits (sparse)
    // Non-zero means has consecutive set bits (not sparse)
    return (n & (n >> 1)) === 0;
  }
}
