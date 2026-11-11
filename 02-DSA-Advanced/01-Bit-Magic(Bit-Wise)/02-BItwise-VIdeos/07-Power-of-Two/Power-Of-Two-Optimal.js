/**
 * Brain Kerningham's Algorithm
 * Time complexity: O(1)
 * Space complexity: O(1)
 *
 * Key insight: A power of 2 has exactly one set bit
 * n & (n-1) removes the rightmost set bit
 * If n is a power of 2, n & (n-1) will be 0
 *
 * Step-by-step execution:
 * Example: n = 6 (binary: 110) - should return false
 *
 * Step 1: Check if n === 0 → 6 !== 0, continue
 * Step 2: Calculate n-1 = 5 (binary: 101)
 * Step 3: Calculate n & (n-1) = 6 & 5 = 110 & 101 = 100 (which is 4, not zero)
 * Step 4: Since result !== 0, return false
 *
 * Example: n = 8 (binary: 1000) - should return true
 *
 * Step 1: Check if n === 0 → 8 !== 0, continue
 * Step 2: Calculate n-1 = 7 (binary: 0111)
 * Step 3: Calculate n & (n-1) = 8 & 7 = 1000 & 0111 = 0000 (which is 0)
 * Step 4: Since result === 0, return true
 */
function isPowerOfTwo(n) {
  // Step 1: Edge case - 0 is not a power of 2
  if (n === 0) return false;

  // Step 2: Brain Kerningham's algorithm
  // If n is a power of 2, it has exactly one set bit
  // n & (n-1) removes the rightmost set bit
  // For powers of 2, this will result in 0
  // For non-powers of 2, this will result in a non-zero value
  return (n & (n - 1)) === 0;
}

// Test execution:
// Step 1: Initialize n = 6
let n = 6;
// Step 2: Call function and print result
console.log(isPowerOfTwo(n)); // Output: false
