/**
 * Step-by-step execution:
 * Example: n = 7 (binary: 111) - should return 3
 *
 * Iteration 1: n = 7
 *   - Step 1: Check if n % 2 !== 0 → 7 % 2 = 1 (not zero) → count = 1
 *   - Step 2: n = Math.floor(7 / 2) = 3
 *
 * Iteration 2: n = 3
 *   - Step 1: Check if n % 2 !== 0 → 3 % 2 = 1 (not zero) → count = 2
 *   - Step 2: n = Math.floor(3 / 2) = 1
 *
 * Iteration 3: n = 1
 *   - Step 1: Check if n % 2 !== 0 → 1 % 2 = 1 (not zero) → count = 3
 *   - Step 2: n = Math.floor(1 / 2) = 0
 *
 * Iteration 4: n = 0, loop exits
 * Final: return count = 3
 */
function countSetBits(n) {
  // Step 1: Initialize counter to track number of set bits
  let count = 0;

  // Step 2: Process each bit from right to left
  while (n > 0) {
    // Step 3: Check if least significant bit (LSB) is set
    // n % 2 gives the remainder when dividing by 2, which is the LSB
    if (n % 2 !== 0) {
      count++; // Increment count if bit is set
    }
    // Step 4: Right shift by dividing by 2 and taking floor
    // This removes the processed bit and moves to next bit
    n = Math.floor(n / 2);
  }

  // Step 5: Return total count of set bits
  return count;
}

// Test execution:
// Step 1: Initialize n = 7 (binary: 111)
let n = 7;
// Step 2: Call function and print result
console.log(countSetBits(n)); // Output: 3
