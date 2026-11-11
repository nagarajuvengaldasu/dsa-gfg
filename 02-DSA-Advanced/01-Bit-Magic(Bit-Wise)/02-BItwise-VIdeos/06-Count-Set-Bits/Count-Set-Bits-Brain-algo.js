/**
 * Brain Kerningham Algorithm to count set bits
 *
 * Key insight: n & (n-1) removes the rightmost set bit
 *
 * Step-by-step execution:
 * Example: n = 7 (binary: 111) - should return 3
 *
 * Iteration 1: n = 7 (binary: 111)
 *   - Step 1: n-1 = 6 (binary: 110)
 *   - Step 2: n & (n-1) = 7 & 6 = 111 & 110 = 110 (which is 6)
 *   - Step 3: n = 6, count = 1
 *
 * Iteration 2: n = 6 (binary: 110)
 *   - Step 1: n-1 = 5 (binary: 101)
 *   - Step 2: n & (n-1) = 6 & 5 = 110 & 101 = 100 (which is 4)
 *   - Step 3: n = 4, count = 2
 *
 * Iteration 3: n = 4 (binary: 100)
 *   - Step 1: n-1 = 3 (binary: 011)
 *   - Step 2: n & (n-1) = 4 & 3 = 100 & 011 = 000 (which is 0)
 *   - Step 3: n = 0, count = 3
 *
 * Iteration 4: n = 0, loop exits
 * Final: return count = 3
 */
function countSetBits(n) {
  // Step 1: Initialize counter to track number of set bits
  let count = 0;

  // Step 2: Loop until all bits are processed
  // Each iteration removes the rightmost set bit
  while (n > 0) {
    // Step 3: Remove rightmost set bit using n & (n-1)
    // This operation flips the rightmost set bit to 0
    n = n & (n - 1);

    // Step 4: Increment count for each set bit found
    count++;
  }

  // Step 5: Return total count of set bits
  return count;
}

// Test execution:
// Step 1: Initialize n = 7 (binary: 111)
let n = 7;
// Step 2: Call function and print result
console.log(countSetBits(n)); // Output: 3
