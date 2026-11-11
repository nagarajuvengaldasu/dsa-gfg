/**
 * Lookup Table Method to count set bits efficiently
 *
 * Step-by-step execution:
 * Example: n = 7 (binary: 00000000 00000000 00000000 00000111) - should return 3
 *
 * INITIALIZATION PHASE (initialize function):
 * Step 1: table[0] = 0 (0 has 0 set bits)
 * Step 2: Loop from i = 1 to 255
 *   - For each i, use Brain Kerningham's trick: table[i] = table[i & (i-1)] + 1
 *   - This builds a lookup table for all 8-bit numbers (0-255)
 *   - Example: i=7 → table[7] = table[7 & 6] + 1 = table[6] + 1 = 3
 *
 * COUNTING PHASE (setBits function):
 * Step 1: Split 32-bit number into 4 chunks of 8 bits each
 * Step 2: Extract each 8-bit chunk using bitwise operations:
 *   - Chunk 1: n & 255 → extracts bits 0-7 (rightmost 8 bits)
 *   - Chunk 2: (n >> 8) & 255 → extracts bits 8-15
 *   - Chunk 3: (n >> 16) & 255 → extracts bits 16-23
 *   - Chunk 4: n >> 24 → extracts bits 24-31 (leftmost 8 bits)
 * Step 3: Look up count for each chunk in table
 * Step 4: Sum all four counts
 *
 * For n = 7:
 *   - table[7 & 255] = table[7] = 3
 *   - table[(7 >> 8) & 255] = table[0] = 0
 *   - table[(7 >> 16) & 255] = table[0] = 0
 *   - table[7 >> 24] = table[0] = 0
 *   - Total = 3 + 0 + 0 + 0 = 3
 */

// Step 1: Declare lookup table array (stores count of set bits for 0-255)
let table = [];

/**
 * Initialize lookup table for all 8-bit numbers (0-255)
 * Uses Brain Kerningham's algorithm to build the table efficiently
 */
function initialize() {
  // Step 1: Base case - 0 has 0 set bits
  table[0] = 0;

  // Step 2: Build table for all numbers from 1 to 255
  for (let i = 1; i < 256; i++) {
    // Step 3: Use Brain Kerningham's trick
    // i & (i-1) removes rightmost set bit, so we add 1 to its count
    table[i] = table[i & (i - 1)] + 1;
  }
}

/**
 * Count set bits using lookup table
 * Splits 32-bit number into 4 chunks of 8 bits each
 */
function setBits(n) {
  // Step 1: Extract rightmost 8 bits (bits 0-7) and lookup count
  // n & 255 masks all bits except the rightmost 8 bits
  // 255 in binary is 11111111 (8 ones)
  let chunk1 = table[n & 255];

  // Step 2: Extract next 8 bits (bits 8-15) and lookup count
  // (n >> 8) shifts right by 8, then & 255 extracts the next 8 bits
  let chunk2 = table[(n >> 8) & 255];

  // Step 3: Extract next 8 bits (bits 16-23) and lookup count
  // (n >> 16) shifts right by 16, then & 255 extracts the next 8 bits
  let chunk3 = table[(n >> 16) & 255];

  // Step 4: Extract leftmost 8 bits (bits 24-31) and lookup count
  // n >> 24 shifts right by 24, leaving only the leftmost 8 bits
  let chunk4 = table[n >> 24];

  // Step 5: Sum all four chunk counts
  return chunk1 + chunk2 + chunk3 + chunk4;
}

// Test execution:
// Step 1: Initialize n = 7 (binary: 111)
let n = 7;
// Step 2: Initialize lookup table (must be called before setBits)
initialize();
// Step 3: Call function and print result
console.log(setBits(n)); // Output: 3
