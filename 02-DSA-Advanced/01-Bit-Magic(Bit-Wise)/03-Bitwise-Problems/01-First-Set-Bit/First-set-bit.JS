/**
 * Problem: Find the position of the first set bit from the right side
 *
 * APPROACH 1: Naive Approach (Iterative)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: n = 18 (binary: 010010)
 *
 * Step 1: Check if n === 0 → 18 !== 0, continue
 * Step 2: Initialize position = 1
 * Step 3: Loop while n > 0
 *   - Iteration 1: Check if n % 2 !== 0 → 18 % 2 = 0 (not set), continue
 *     - n = Math.floor(18 / 2) = 9, position = 2
 *   - Iteration 2: Check if n % 2 !== 0 → 9 % 2 = 1 (set!) → return position = 2
 *
 * Result: Position 2
 */
function getFirstSetBitNaive(n) {
  // Step 1: Edge case - if n is 0, no set bits exist
  if (n === 0) return 0;

  // Step 2: Initialize position counter (1-indexed from right)
  let position = 1;

  // Step 3: Check each bit from right to left
  while (n > 0) {
    // Step 4: Check if least significant bit (LSB) is set
    // n % 2 gives the remainder when dividing by 2, which is the LSB
    if (n % 2 !== 0) {
      return position; // Found first set bit, return its position
    }

    // Step 5: Right shift by dividing by 2 and move to next position
    n = Math.floor(n / 2);
    position++;
  }

  return 0; // Should not reach here if n > 0
}

/**
 * APPROACH 2: Using Bitwise AND with Mask
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: n = 18 (binary: 010010)
 *
 * Step 1: Check if n === 0 → 18 !== 0, continue
 * Step 2: Initialize position = 1, mask = 1 (binary: 000001)
 * Step 3: Loop while n > 0
 *   - Iteration 1: Check if (n & mask) !== 0 → (18 & 1) = 0 (not set), continue
 *     - mask = 1 << 1 = 2 (binary: 000010), position = 2
 *     - n = 18 >> 1 = 9
 *   - Iteration 2: Check if (n & mask) !== 0 → (9 & 2) = 0 (not set), continue
 *     - mask = 1 << 2 = 4 (binary: 000100), position = 3
 *     - n = 9 >> 1 = 4
 *   - Iteration 3: Check if (n & mask) !== 0 → (4 & 4) = 4 (set!) → return position = 3
 *
 * Wait, this approach needs adjustment. Let me use a better approach.
 */
function getFirstSetBitMask(n) {
  // Step 1: Edge case
  if (n === 0) return 0;

  // Step 2: Initialize position and mask
  let position = 1;
  let mask = 1;

  // Step 3: Check each bit position
  while ((n & mask) === 0) {
    mask = mask << 1; // Shift mask left to check next bit
    position++;

    // Safety check to avoid infinite loop
    if (position > 32) return 0;
  }

  return position;
}

/**
 * APPROACH 3: Optimal - Using n & ~(n-1) or n & -n (Isolate Rightmost Set Bit)
 * Time Complexity: O(1) for isolation, O(log n) for position finding
 * Space Complexity: O(1)
 *
 * Key insight: n & ~(n-1) or n & -n isolates the rightmost set bit
 * Then we can find its position using log2 or counting
 *
 * Step-by-step execution:
 * Example: n = 18 (binary: 010010)
 *
 * Step 1: Check if n === 0 → 18 !== 0, continue
 * Step 2: Isolate rightmost set bit
 *   - n-1 = 17 (binary: 010001)
 *   - ~(n-1) = ...11101110 (all bits flipped)
 *   - n & ~(n-1) = 18 & ~17 = 010010 & 11101110 = 000010 (which is 2)
 *   - OR using n & -n: 18 & -18 = 2 (same result)
 * Step 3: Find position of isolated bit
 *   - We need to find which position has value 2
 *   - 2 = 2^1, so position = 1 + 1 = 2 (1-indexed)
 *   - Or count right shifts needed: 2 >> 1 = 1, 1 >> 1 = 0, so 2 shifts = position 2
 */
function getFirstSetBitOptimal1(n) {
  // Step 1: Edge case
  if (n === 0) return 0;

  // Step 2: Isolate the rightmost set bit
  // n & -n works because -n in two's complement is ~n + 1
  // This isolates only the rightmost set bit
  let isolatedBit = n & -n;

  // Step 3: Find the position by counting how many times we need to right shift
  let position = 1;
  while (isolatedBit > 1) {
    isolatedBit = isolatedBit >> 1;
    position++;
  }

  return position;
}

/**
 * APPROACH 4: Most Optimal - Using Logarithm
 * Time Complexity: O(1) - assuming log2 is O(1)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: n = 18 (binary: 010010)
 *
 * Step 1: Check if n === 0 → 18 !== 0, continue
 * Step 2: Isolate rightmost set bit: n & -n = 18 & -18 = 2
 * Step 3: Use log2 to find position: log2(2) = 1, position = 1 + 1 = 2
 *
 * Example: n = 12 (binary: 1100)
 * Step 1: n & -n = 12 & -12 = 4
 * Step 2: log2(4) = 2, position = 2 + 1 = 3
 */
function getFirstSetBitOptimal2(n) {
  // Step 1: Edge case
  if (n === 0) return 0;

  // Step 2: Isolate the rightmost set bit
  let isolatedBit = n & -n;

  // Step 3: Calculate position using logarithm
  // log2(isolatedBit) gives the exponent, add 1 for 1-indexed position
  // Math.log2 is available in modern JavaScript
  let position = Math.floor(Math.log2(isolatedBit)) + 1;

  return position;
}

/**
 * APPROACH 5: Using Right Shift and AND with 1
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: n = 18 (binary: 010010)
 *
 * Step 1: Check if n === 0 → 18 !== 0, continue
 * Step 2: Initialize position = 1
 * Step 3: Loop while n > 0
 *   - Iteration 1: Check if (n & 1) !== 0 → (18 & 1) = 0 (not set), continue
 *     - n = n >> 1 = 9, position = 2
 *   - Iteration 2: Check if (n & 1) !== 0 → (9 & 1) = 1 (set!) → return position = 2
 */
function getFirstSetBitRightShift(n) {
  // Step 1: Edge case
  if (n === 0) return 0;

  // Step 2: Initialize position counter
  let position = 1;

  // Step 3: Check each bit from right to left
  while (n > 0) {
    // Step 4: Check if least significant bit is set using bitwise AND with 1
    if ((n & 1) !== 0) {
      return position; // Found first set bit
    }

    // Step 5: Right shift to move to next bit
    n = n >> 1;
    position++;
  }

  return 0;
}

// Test all approaches
console.log("=== Testing All Approaches ===\n");

let testCases = [
  { n: 18, expected: 2 },
  { n: 12, expected: 3 },
  { n: 1, expected: 1 },
  { n: 0, expected: 0 },
  { n: 16, expected: 5 }, // binary: 10000
  { n: 7, expected: 1 }, // binary: 111
];

testCases.forEach((test) => {
  console.log(`Input: n = ${test.n} (binary: ${test.n.toString(2)})`);
  console.log(`Expected: ${test.expected}`);
  console.log(`Naive: ${getFirstSetBitNaive(test.n)}`);
  console.log(`Mask: ${getFirstSetBitMask(test.n)}`);
  console.log(`Optimal1: ${getFirstSetBitOptimal1(test.n)}`);
  console.log(`Optimal2: ${getFirstSetBitOptimal2(test.n)}`);
  console.log(`RightShift: ${getFirstSetBitRightShift(test.n)}`);
  console.log("---");
});

/**
 * RECOMMENDED APPROACH:
 *
 * For interviews and production code, I recommend APPROACH 4 (Optimal2) using logarithm:
 * - Time Complexity: O(1)
 * - Space Complexity: O(1)
 * - Clean and efficient
 *
 * Alternative: APPROACH 5 (RightShift) is also good:
 * - Easy to understand
 * - Time Complexity: O(log n) which is acceptable
 * - No floating point operations
 *
 * The key insight is:
 * 1. Isolate the rightmost set bit using: n & -n
 * 2. Find its position using log2 or by counting shifts
 */
