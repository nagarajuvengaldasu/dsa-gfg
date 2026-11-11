/**
 * Problem: Find the position of the rightmost differing bit between two numbers
 *
 * Algorithm:
 * 1. XOR the two numbers to find all differing bits (XOR gives 1 where bits differ)
 * 2. Find the rightmost set bit in the XOR result (this is the rightmost differing bit)
 * 3. Return the position of that bit (1-indexed from right)
 *
 * Step-by-step execution:
 * Example: a = 29, b = 15
 *
 * Binary representation:
 * a = 29 → binary: 11101
 * b = 15 → binary: 01111
 *
 * Step 1: Calculate XOR to find differing bits
 *   x = a ^ b = 29 ^ 15
 *   29:  11101
 *   15:  01111
 *   XOR: 10010  (bits differ at positions 1 and 5)
 *   x = 18 (decimal)
 *
 * Step 2: Initialize position counter (1-indexed from right)
 *   position = 1
 *
 * Step 3: Find rightmost set bit in x
 *   Iteration 1: x = 18 (binary: 10010)
 *     - Check if x % 2 !== 0 → 18 % 2 = 0 (LSB is 0, not set)
 *     - x = Math.floor(18 / 2) = 9 (binary: 1001)
 *     - position = 2
 *
 *   Iteration 2: x = 9 (binary: 1001)
 *     - Check if x % 2 !== 0 → 9 % 2 = 1 (LSB is 1, set!)
 *     - Return position = 2
 *
 * Result: Position 2 (the rightmost differing bit is at position 2 from right)
 *
 * Verification:
 * Position 2 from right in 29 (11101) is 0
 * Position 2 from right in 15 (01111) is 1
 * They differ! ✓
 */
function rightMostDifferenceBit(a, b) {
  // Step 1: XOR the two numbers to find all differing bits
  // XOR operation: 1 if bits differ, 0 if bits are same
  // Example: 29 ^ 15 = 18 (binary: 10010)
  // This means bits differ at positions where XOR result has 1
  let x = a ^ b;

  // Step 2: Initialize position counter (1-indexed from right)
  // Position 1 is the rightmost bit (LSB)
  let position = 1;

  // Step 3: Find the rightmost set bit in the XOR result
  // This corresponds to the rightmost differing bit between a and b
  while (x > 0) {
    // Step 4: Check if least significant bit (LSB) is set
    // x % 2 gives the remainder when dividing by 2, which is the LSB
    // If LSB is 1, we found the rightmost differing bit
    if (x % 2 !== 0) {
      return position; // Return the position of rightmost differing bit
    }

    // Step 5: Right shift by dividing by 2 to check next bit
    // This removes the processed bit and moves to the next bit position
    x = Math.floor(x / 2);

    // Step 6: Increment position counter for next bit position
    position++;
  }

  // Step 7: If we reach here, no differing bits were found (shouldn't happen if a != b)
  return 0;
}

// Test execution:
// Step 1: Initialize test values
// a = 29 (binary: 11101)
// b = 15 (binary: 01111)
let a = 29;
let b = 15;

// Step 2: Call function and print result
console.log(rightMostDifferenceBit(a, b)); // Output: 2
