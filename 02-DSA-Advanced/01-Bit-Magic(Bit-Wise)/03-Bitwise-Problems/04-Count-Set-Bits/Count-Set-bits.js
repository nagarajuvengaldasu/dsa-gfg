/**
 * Problem: Count total set bits in all numbers from 1 to n
 *
 * Example 1:
 * Input: 5
 * Output: 7
 * Explanation:
 *   1 = 001 → 1 set bit
 *   2 = 010 → 1 set bit
 *   3 = 011 → 2 set bits
 *   4 = 100 → 1 set bit
 *   5 = 101 → 2 set bits
 *   Total = 1 + 1 + 2 + 1 + 2 = 7
 *
 * Example 2:
 * Input: 17
 * Output: 35
 */

/**
 * APPROACH 1: Naive Approach (Current Code)
 * Time Complexity: O(n * log n)
 * Space Complexity: O(1)
 *
 * Step-by-step execution:
 * Example: n = 5
 *
 * Outer loop iteration 1: i = 1
 *   - x = 1 (binary: 001)
 *   - Inner loop: x % 2 = 1 (set) → count = 1, x = 0 → exit
 *
 * Outer loop iteration 2: i = 2
 *   - x = 2 (binary: 010)
 *   - Inner loop iteration 1: x % 2 = 0 (not set), x = 1
 *   - Inner loop iteration 2: x % 2 = 1 (set) → count = 2, x = 0 → exit
 *
 * Outer loop iteration 3: i = 3
 *   - x = 3 (binary: 011)
 *   - Inner loop iteration 1: x % 2 = 1 (set) → count = 3, x = 1
 *   - Inner loop iteration 2: x % 2 = 1 (set) → count = 4, x = 0 → exit
 *
 * Outer loop iteration 4: i = 4
 *   - x = 4 (binary: 100)
 *   - Inner loop iteration 1: x % 2 = 0 (not set), x = 2
 *   - Inner loop iteration 2: x % 2 = 0 (not set), x = 1
 *   - Inner loop iteration 3: x % 2 = 1 (set) → count = 5, x = 0 → exit
 *
 * Outer loop iteration 5: i = 5
 *   - x = 5 (binary: 101)
 *   - Inner loop iteration 1: x % 2 = 1 (set) → count = 6, x = 2
 *   - Inner loop iteration 2: x % 2 = 0 (not set), x = 1
 *   - Inner loop iteration 3: x % 2 = 1 (set) → count = 7, x = 0 → exit
 *
 * Result: count = 7
 */
function countSetBitsNaive(n) {
  // Step 1: Initialize counter for total set bits
  let count = 0;

  // Step 2: Iterate through all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    // Step 3: Process each number to count its set bits
    let x = i;

    // Step 4: Count set bits in current number
    while (x > 0) {
      // Step 5: Check if least significant bit (LSB) is set
      // x % 2 gives the remainder when dividing by 2, which is the LSB
      if (x % 2 !== 0) {
        count++; // Increment count if bit is set
      }

      // Step 6: Right shift by dividing by 2
      // This removes the processed bit and moves to next bit
      x = Math.floor(x / 2);
    }
  }

  // Step 7: Return total count of set bits
  return count;
}

/**
 * APPROACH 2: Using Brain Kerningham's Algorithm
 * Time Complexity: O(n * log n) - but faster constant factor
 * Space Complexity: O(1)
 *
 * Key insight: n & (n-1) removes the rightmost set bit
 *
 * Step-by-step execution:
 * Example: n = 5
 *
 * Outer loop iteration 1: i = 1
 *   - x = 1 (binary: 001)
 *   - Iteration 1: x & (x-1) = 1 & 0 = 0, count = 1, x = 0 → exit
 *
 * Outer loop iteration 2: i = 2
 *   - x = 2 (binary: 010)
 *   - Iteration 1: x & (x-1) = 2 & 1 = 0, count = 2, x = 0 → exit
 *
 * Outer loop iteration 3: i = 3
 *   - x = 3 (binary: 011)
 *   - Iteration 1: x & (x-1) = 3 & 2 = 2, count = 3, x = 2
 *   - Iteration 2: x & (x-1) = 2 & 1 = 0, count = 4, x = 0 → exit
 *
 * Outer loop iteration 4: i = 4
 *   - x = 4 (binary: 100)
 *   - Iteration 1: x & (x-1) = 4 & 3 = 0, count = 5, x = 0 → exit
 *
 * Outer loop iteration 5: i = 5
 *   - x = 5 (binary: 101)
 *   - Iteration 1: x & (x-1) = 5 & 4 = 4, count = 6, x = 4
 *   - Iteration 2: x & (x-1) = 4 & 3 = 0, count = 7, x = 0 → exit
 *
 * Result: count = 7
 */
function countSetBitsBrainKerningham(n) {
  // Step 1: Initialize counter for total set bits
  let count = 0;

  // Step 2: Iterate through all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    // Step 3: Count set bits using Brain Kerningham's algorithm
    let x = i;

    // Step 4: Remove rightmost set bit until number becomes 0
    // Each iteration removes one set bit, so count increments
    while (x > 0) {
      // Step 5: Remove rightmost set bit using n & (n-1)
      x = x & (x - 1);

      // Step 6: Increment count for each set bit found
      count++;
    }
  }

  // Step 7: Return total count of set bits
  return count;
}

/**
 * APPROACH 3: Optimal - Pattern-Based Approach
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Key insight: Use pattern recognition for powers of 2
 *
 * Pattern observation:
 * - For numbers 0 to (2^k - 1), total set bits = k * 2^(k-1)
 * - For any number n, we can break it into:
 *   1. Complete groups of 2^k
 *   2. Remaining numbers
 *
 * Algorithm:
 * 1. Find the highest power of 2 ≤ n (let's call it x)
 * 2. Count set bits in complete groups: x * 2^(x-1)
 * 3. Count MSB in remaining numbers: (n - 2^x + 1)
 * 4. Recursively count set bits in remaining numbers: (n - 2^x)
 *
 * Step-by-step execution:
 * Example: n = 17
 *
 * Step 1: Find highest power of 2 ≤ 17
 *   - 2^4 = 16 ≤ 17, so x = 4
 *
 * Step 2: Count set bits in complete groups (0 to 15)
 *   - Formula: x * 2^(x-1) = 4 * 2^3 = 4 * 8 = 32
 *   - This counts all set bits in numbers 0-15
 *
 * Step 3: Count MSB in remaining numbers (16, 17)
 *   - Numbers 16 and 17 have MSB at position 4 set
 *   - Count: (n - 2^x + 1) = (17 - 16 + 1) = 2
 *
 * Step 4: Recursively count set bits in remaining part
 *   - Remaining: n - 2^x = 17 - 16 = 1
 *   - Recursive call: countSetBitsOptimal(1)
 *     - For n = 1: x = 0, count = 0 * 2^(-1) = 0 (but we handle this)
 *     - Actually: 2^0 = 1, so x = 0
 *     - Complete groups: 0 * 2^(-1) = 0 (but we need to handle base case)
 *     - MSB count: (1 - 1 + 1) = 1
 *     - Remaining: 1 - 1 = 0
 *     - Recursive call: countSetBitsOptimal(0) = 0
 *     - Total for n=1: 0 + 1 + 0 = 1
 *
 * Step 5: Total = 32 + 2 + 1 = 35
 *
 * But we need to adjust: we're counting from 1 to n, not 0 to n
 * So we subtract count for 0 (which is 0) and we're good
 */
function countSetBitsOptimal(n) {
  // Step 1: Base case - if n is 0, return 0
  if (n === 0) return 0;

  // Step 2: Find the highest power of 2 that is ≤ n
  // We find the position of the leftmost set bit
  let x = 0;
  let temp = n;
  while (temp > 1) {
    temp = temp >> 1; // Right shift until we find the MSB position
    x++;
  }
  // Now x is the position of MSB, so 2^x is the highest power of 2 ≤ n

  // Step 3: Calculate count for complete groups (0 to 2^x - 1)
  // Formula: x * 2^(x-1) gives total set bits in numbers 0 to (2^x - 1)
  // Handle edge case when x = 0 (n = 1)
  let completeGroups = x === 0 ? 0 : x * (1 << (x - 1)); // x * 2^(x-1)

  // Step 4: Count MSB in remaining numbers (2^x to n)
  // All numbers from 2^x to n have their MSB set
  let powerOf2 = 1 << x; // 2^x
  let msbCount = n - powerOf2 + 1; // (n - 2^x + 1)

  // Step 5: Recursively count set bits in remaining part
  // Remove the MSB from remaining numbers and count recursively
  let remaining = n - powerOf2; // (n - 2^x)
  let remainingCount = countSetBitsOptimal(remaining);

  // Step 6: Return total count
  // Total = complete groups + MSB count + remaining count
  return completeGroups + msbCount + remainingCount;
}

/**
 * APPROACH 4: Optimal - Iterative Pattern-Based (Non-recursive)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Same logic as Approach 3 but iterative
 */
function countSetBitsOptimalIterative(n) {
  // Step 1: Edge case
  if (n === 0) return 0;

  // Step 2: Initialize total count
  let totalCount = 0;

  // Step 3: Process each bit position
  while (n > 0) {
    // Step 4: Find highest power of 2 ≤ n
    let x = 0;
    let temp = n;
    while (temp > 1) {
      temp = temp >> 1;
      x++;
    }

    // Step 5: Add count for complete groups
    totalCount += x * (1 << (x - 1));

    // Step 6: Add count for MSB in remaining numbers
    let powerOf2 = 1 << x; // 2^x
    totalCount += n - powerOf2 + 1;

    // Step 7: Remove processed part and continue
    n = n - powerOf2;
  }

  // Step 8: Return total count
  return totalCount;
}

// Test all approaches
console.log("=== Testing All Approaches ===\n");

let testCases = [5, 17, 10, 1, 0];

testCases.forEach((n) => {
  console.log(`Input: n = ${n}`);
  console.log(`Naive: ${countSetBitsNaive(n)}`);
  console.log(`Brain Kerningham: ${countSetBitsBrainKerningham(n)}`);
  console.log(`Optimal (Recursive): ${countSetBitsOptimal(n)}`);
  console.log(`Optimal (Iterative): ${countSetBitsOptimalIterative(n)}`);
  console.log("---");
});

/**
 * RECOMMENDATION:
 *
 * For GeeksforGeeks and competitive programming:
 * - Use APPROACH 3 or 4 (Optimal) - O(log n) time complexity
 * - This is the most efficient solution
 *
 * For understanding and learning:
 * - APPROACH 2 (Brain Kerningham) is easier to understand
 * - Still O(n * log n) but faster than naive approach
 *
 * Current code (Naive) is O(n * log n) which may timeout for large inputs
 */
