/**
 * Problem: Count the number of bits needed to be flipped to convert a to b
 *
 * Key Insight:
 * - XOR operation (a ^ b) gives 1 where bits differ, 0 where bits are same
 * - Count the number of set bits in (a ^ b) = number of bits to flip
 *
 * Examples:
 *
 * Example 1: a = 10, b = 20
 * a = 10 → binary: 01010
 * b = 20 → binary: 10100
 * XOR:    → binary: 11110 (bits differ at positions 0, 1, 2, 3)
 * Count set bits in XOR = 4
 * Output: 4
 *
 * Example 2: a = 20, b = 25
 * a = 20 → binary: 10100
 * b = 25 → binary: 11001
 * XOR:    → binary: 01101 (bits differ at positions 0, 2, 3)
 * Count set bits in XOR = 3
 * Output: 3
 */

/**
 * APPROACH 1: Using XOR and Count Set Bits (Naive)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: a = 10, b = 20
 *
 * Step 1: Calculate XOR to find differing bits
 *   xor = a ^ b = 10 ^ 20
 *   10:  01010
 *   20:  10100
 *   XOR: 11110  (decimal: 30)
 *   xor = 30
 *
 * Step 2: Count set bits in XOR result
 *   xor = 30 (binary: 11110)
 *   Iteration 1: 30 % 2 = 0 (not set), xor = 15, count = 0
 *   Iteration 2: 15 % 2 = 1 (set), xor = 7, count = 1
 *   Iteration 3: 7 % 2 = 1 (set), xor = 3, count = 2
 *   Iteration 4: 3 % 2 = 1 (set), xor = 1, count = 3
 *   Iteration 5: 1 % 2 = 1 (set), xor = 0, count = 4
 *
 * Result: 4 bits need to be flipped
 */
function bitDifferenceNaive(a, b) {
  // Step 1: XOR the two numbers to find all differing bits
  // XOR gives 1 where bits differ, 0 where bits are same
  let xor = a ^ b;

  // Step 2: Count the number of set bits in XOR result
  // This gives the number of bits that need to be flipped
  let count = 0;

  while (xor > 0) {
    // Step 3: Check if least significant bit (LSB) is set
    if (xor % 2 !== 0) {
      count++; // Increment count if bit is set
    }

    // Step 4: Right shift to check next bit
    xor = Math.floor(xor / 2);
  }

  // Step 5: Return total count of differing bits
  return count;
}

/**
 * APPROACH 2: Using XOR and Brain Kerningham's Algorithm (Optimal)
 * Time Complexity: O(k) where k is number of set bits (better than O(log n))
 * Space Complexity: O(1)
 *
 * Key insight: n & (n-1) removes the rightmost set bit
 *
 * Step-by-step execution:
 * Example: a = 10, b = 20
 *
 * Step 1: Calculate XOR
 *   xor = 10 ^ 20 = 30 (binary: 11110)
 *
 * Step 2: Count set bits using Brain Kerningham's algorithm
 *   Iteration 1: xor = 30 (binary: 11110)
 *     - xor & (xor-1) = 30 & 29 = 11110 & 11101 = 11100 (28)
 *     - xor = 28, count = 1
 *   Iteration 2: xor = 28 (binary: 11100)
 *     - xor & (xor-1) = 28 & 27 = 11100 & 11011 = 11000 (24)
 *     - xor = 24, count = 2
 *   Iteration 3: xor = 24 (binary: 11000)
 *     - xor & (xor-1) = 24 & 23 = 11000 & 10111 = 10000 (16)
 *     - xor = 16, count = 3
 *   Iteration 4: xor = 16 (binary: 10000)
 *     - xor & (xor-1) = 16 & 15 = 10000 & 01111 = 00000 (0)
 *     - xor = 0, count = 4
 *
 * Result: 4 bits need to be flipped
 */
function bitDifferenceOptimal(a, b) {
  // Step 1: XOR the two numbers to find all differing bits
  let xor = a ^ b;

  // Step 2: Count set bits using Brain Kerningham's algorithm
  let count = 0;

  while (xor > 0) {
    // Step 3: Remove rightmost set bit
    // Each iteration removes one set bit, so we increment count
    xor = xor & (xor - 1);
    count++;
  }

  // Step 4: Return total count of differing bits
  return count;
}

/**
 * APPROACH 3: Using Built-in Method (Most Concise)
 * Time Complexity: O(log n) or better (depends on implementation)
 * Space Complexity: O(1)
 *
 * JavaScript doesn't have a built-in bit count, but we can use toString(2)
 * However, this is less efficient for large numbers
 */
function bitDifferenceBuiltIn(a, b) {
  // Step 1: XOR to find differing bits
  let xor = a ^ b;

  // Step 2: Convert to binary string and count '1's
  // This is less efficient but more readable
  return xor.toString(2).split("1").length - 1;
}

/**
 * APPROACH 4: Using Right Shift with AND (Alternative)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: a = 10, b = 20
 *
 * Step 1: Calculate XOR
 *   xor = 10 ^ 20 = 30 (binary: 11110)
 *
 * Step 2: Count set bits using right shift
 *   Iteration 1: (30 & 1) = 0 (not set), xor = 15, count = 0
 *   Iteration 2: (15 & 1) = 1 (set), xor = 7, count = 1
 *   Iteration 3: (7 & 1) = 1 (set), xor = 3, count = 2
 *   Iteration 4: (3 & 1) = 1 (set), xor = 1, count = 3
 *   Iteration 5: (1 & 1) = 1 (set), xor = 0, count = 4
 *
 * Result: 4 bits need to be flipped
 */
function bitDifferenceRightShift(a, b) {
  // Step 1: XOR to find differing bits
  let xor = a ^ b;

  // Step 2: Count set bits using right shift
  let count = 0;

  while (xor > 0) {
    // Step 3: Check if LSB is set using bitwise AND with 1
    if ((xor & 1) !== 0) {
      count++;
    }

    // Step 4: Right shift to check next bit
    xor = xor >> 1;
  }

  // Step 5: Return total count
  return count;
}

// Test all approaches
console.log("=== Testing All Approaches ===\n");

let testCases = [
  { a: 10, b: 20, expected: 4 },
  { a: 20, b: 25, expected: 3 },
  { a: 5, b: 5, expected: 0 }, // Same numbers
  { a: 0, b: 15, expected: 4 }, // 0 vs 1111
  { a: 7, b: 8, expected: 4 }, // 111 vs 1000
];

testCases.forEach((test) => {
  console.log(`Input: a = ${test.a}, b = ${test.b}`);
  console.log(
    `a (binary): ${test.a.toString(2)}, b (binary): ${test.b.toString(2)}`
  );
  console.log(`XOR (binary): ${(test.a ^ test.b).toString(2)}`);
  console.log(`Expected: ${test.expected}`);
  console.log(`Naive: ${bitDifferenceNaive(test.a, test.b)}`);
  console.log(`Optimal: ${bitDifferenceOptimal(test.a, test.b)}`);
  console.log(`BuiltIn: ${bitDifferenceBuiltIn(test.a, test.b)}`);
  console.log(`RightShift: ${bitDifferenceRightShift(test.a, test.b)}`);
  console.log("---");
});

/**
 * RECOMMENDATION:
 *
 * For GeeksforGeeks submission:
 * - Use APPROACH 2 (Optimal with Brain Kerningham) - O(k) where k is number of set bits
 * - This is the most efficient solution
 *
 * Algorithm Summary:
 * 1. XOR a and b to find all differing bits
 * 2. Count set bits in the XOR result
 * 3. Return the count
 *
 * Why XOR works:
 * - XOR gives 1 where bits differ, 0 where bits are same
 * - Counting 1s in XOR result = counting bits that need to be flipped
 */

// GeeksforGeeks Solution Format:
class Solution {
  countBitsFlip(a, b) {
    // Step 1: XOR to find differing bits
    let xor = a ^ b;

    // Step 2: Count set bits using Brain Kerningham's algorithm
    let count = 0;
    while (xor > 0) {
      xor = xor & (xor - 1); // Remove rightmost set bit
      count++;
    }

    return count;
  }
}
