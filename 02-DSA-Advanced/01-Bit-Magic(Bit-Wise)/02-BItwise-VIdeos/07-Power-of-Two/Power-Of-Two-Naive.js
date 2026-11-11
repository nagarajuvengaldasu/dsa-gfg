/**
 * Step-by-step execution:
 * Example: n = 6 (binary: 110) - should return false
 *
 * Step 1: Check if n === 0 → 6 !== 0, continue
 *
 * Iteration 1: n = 6
 *   - Step 1: Check if n !== 1 → 6 !== 1, enter loop
 *   - Step 2: Check if n % 2 !== 0 → 6 % 2 = 0 (zero), continue
 *   - Step 3: n = Math.floor(6 / 2) = 3
 *
 * Iteration 2: n = 3
 *   - Step 1: Check if n !== 1 → 3 !== 1, enter loop
 *   - Step 2: Check if n % 2 !== 0 → 3 % 2 = 1 (not zero) → return false
 *
 * Example: n = 8 (binary: 1000) - should return true
 *
 * Step 1: Check if n === 0 → 8 !== 0, continue
 *
 * Iteration 1: n = 8
 *   - Step 1: Check if n !== 1 → 8 !== 1, enter loop
 *   - Step 2: Check if n % 2 !== 0 → 8 % 2 = 0 (zero), continue
 *   - Step 3: n = Math.floor(8 / 2) = 4
 *
 * Iteration 2: n = 4
 *   - Step 1: Check if n !== 1 → 4 !== 1, enter loop
 *   - Step 2: Check if n % 2 !== 0 → 4 % 2 = 0 (zero), continue
 *   - Step 3: n = Math.floor(4 / 2) = 2
 *
 * Iteration 3: n = 2
 *   - Step 1: Check if n !== 1 → 2 !== 1, enter loop
 *   - Step 2: Check if n % 2 !== 0 → 2 % 2 = 0 (zero), continue
 *   - Step 3: n = Math.floor(2 / 2) = 1
 *
 * Iteration 4: n = 1
 *   - Step 1: Check if n !== 1 → 1 === 1, exit loop
 *   - Step 2: return true
 */
function isPowerOfTwo(n) {
  // Step 1: Edge case - 0 is not a power of 2
  if (n === 0) return false;

  // Step 2: Keep dividing by 2 until we reach 1
  // If we encounter an odd number (except 1), it's not a power of 2
  while (n !== 1) {
    // Step 3: Check if current number is odd
    // If n % 2 !== 0, then n is odd and cannot be a power of 2
    if (n % 2 !== 0) {
      return false;
    }
    // Step 4: Divide by 2 (right shift by 1 bit)
    n = Math.floor(n / 2);
  }

  // Step 5: If we reached 1, n was a power of 2
  return true;
}

// Test execution:
// Step 1: Initialize n = 6
let n = 6;
// Step 2: Call function and print result
console.log(isPowerOfTwo(n)); // Output: false
