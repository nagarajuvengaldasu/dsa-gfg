/**
 * Optimal Approach - Bit Manipulation
 * Time Complexity: O(32 * n) ≈ O(n)
 * Space Complexity: O(1)
 *
 * Algorithm:
 * 1. Start from the most significant bit (MSB) and go to LSB
 * 2. For each bit position, check if at least 2 numbers have all previously
 *    selected bits plus the current bit set
 * 3. If yes, include this bit in the result (can form a pair with this AND value)
 * 4. Continue to next bit position
 */
function maximumAndValue(arr) {
  // Step 1: Edge case - Need at least 2 elements to form a pair
  if (arr.length < 2) return 0;

  // Step 2: Initialize result to 0
  //   We'll build up the answer bit by bit from MSB to LSB
  let result = 0;

  // Step 3: Iterate through each bit position from MSB (bit 30) to LSB (bit 0)
  //   For 32-bit integers, positions are 0 (LSB) to 31 (MSB)
  //   Since arr[i] ≤ 10^5, checking up to bit 30 is sufficient
  for (let bit = 30; bit >= 0; bit--) {
    // Step 3a: Create a mask that includes all previously selected bits plus current bit
    //   mask = result | (1 << bit)
    //   Example: If result = 8 (1000) and bit = 2:
    //     - 1 << 2 = 4 (0100)
    //     - mask = 8 | 4 = 12 (1100)
    //     - This mask checks if number has bits 3 and 2 both set
    const mask = result | (1 << bit);
    let count = 0;

    // Step 3b: Count how many numbers have all bits in mask set
    //   For each number, check if (num & mask) == mask
    //   This ensures the number has:
    //   - All previously selected bits (from result)
    //   - The current bit we're checking
    //
    //   Example: mask = 12 (1100), checking number 12
    //     - 12 & 12 = 12 == 12 ✓ (has both bits 3 and 2 set)
    //   Example: mask = 12 (1100), checking number 8
    //     - 8 & 12 = 8 ≠ 12 ✗ (has bit 3 but not bit 2)
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] & mask) == mask) {
        count++;
      }
    }

    // Step 3c: If at least 2 numbers have all bits in mask set,
    //          we can form a pair with this bit included in AND value
    //   This means the current bit can be part of our maximum AND value
    //   Update result to include this bit
    //
    //   Example: If count >= 2 for mask = 12 (1100):
    //     - At least 2 numbers have bits 3 and 2 both set
    //     - We can form a pair from these numbers
    //     - The AND value of that pair will have bit 3 and bit 2 set
    //     - So result = 12
    if (count >= 2) {
      result = mask; // Include this bit in the result
    }
    // If count < 2, we skip this bit (don't add it to result)
    // and continue to the next bit position
  }

  // Step 4: Return the accumulated result
  //   Result contains all bits that can be set in at least one pair's AND value
  return result;
}

// Step-by-step execution for maximumAndValue([4, 8, 12, 16]):
//   Input: arr = [4, 8, 12, 16]
//   Binary: 4 = 00000100, 8 = 00001000, 12 = 00001100, 16 = 00010000
//
//   Initialization:
//     - result = 0
//
//   Bit 30 to Bit 4: No numbers have these bits set, count = 0, skip all
//
//   Bit 4: mask = 0 | (1 << 4) = 16 = 00010000
//     - Check: (4 & 16) == 16? → 0 == 16? ✗
//     - Check: (8 & 16) == 16? → 0 == 16? ✗
//     - Check: (12 & 16) == 16? → 0 == 16? ✗
//     - Check: (16 & 16) == 16? → 16 == 16? ✓ (count = 1)
//     - count = 1 < 2, skip bit 4
//     - result = 0
//
//   Bit 3: mask = 0 | (1 << 3) = 8 = 00001000
//     - Check: (4 & 8) == 8? → 0 == 8? ✗
//     - Check: (8 & 8) == 8? → 8 == 8? ✓ (count = 1)
//     - Check: (12 & 8) == 8? → 8 == 8? ✓ (count = 2)
//     - Check: (16 & 8) == 8? → 0 == 8? ✗
//     - count = 2 >= 2, include bit 3
//     - result = 8
//
//   Bit 2: mask = result | (1 << 2) = 8 | 4 = 12 = 00001100
//     - Check: (4 & 12) == 12? → 4 == 12? ✗
//     - Check: (8 & 12) == 12? → 8 == 12? ✗
//     - Check: (12 & 12) == 12? → 12 == 12? ✓ (count = 1)
//     - Check: (16 & 12) == 12? → 0 == 12? ✗
//     - count = 1 < 2, skip bit 2
//     - result = 8
//
//   Bit 1: mask = result | (1 << 1) = 8 | 2 = 10 = 00001010
//     - Check: (4 & 10) == 10? → 0 == 10? ✗
//     - Check: (8 & 10) == 10? → 8 == 10? ✗
//     - Check: (12 & 10) == 10? → 8 == 10? ✗
//     - Check: (16 & 10) == 10? → 0 == 10? ✗
//     - count = 0 < 2, skip bit 1
//     - result = 8
//
//   Bit 0: mask = result | (1 << 0) = 8 | 1 = 9 = 00001001
//     - Check: (4 & 9) == 9? → 0 == 9? ✗
//     - Check: (8 & 9) == 9? → 8 == 9? ✗
//     - Check: (12 & 9) == 9? → 8 == 9? ✗
//     - Check: (16 & 9) == 9? → 0 == 9? ✗
//     - count = 0 < 2, skip bit 0
//     - result = 8
//
//   Final result: 8
//   Verification: 8 & 12 = 8 ✓ (maximum AND value from pair (8, 12))

/**
 * Naive Approach - Check all pairs
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * Algorithm:
 * 1. Check all possible pairs (arr[i], arr[j]) where i < j
 * 2. Compute AND value for each pair
 * 3. Track the maximum AND value found
 * 4. Return the maximum
 */
function maximumAndValueNaive(arr) {
  // Step 1: Initialize maximum AND value to 0
  //   We'll compare each pair's AND value with this
  let maxAnd = 0;

  // Step 2: Iterate through all pairs
  //   Outer loop: i from 0 to arr.length - 2
  //   Inner loop: j from i+1 to arr.length - 1
  //   This ensures we check each pair exactly once (i < j)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Step 2a: Compute AND value for current pair
      //   AND operation (&) returns 1 only when both bits are 1
      //   Example: 8 & 12
      //     - 8  = 00001000 (binary)
      //     - 12 = 00001100 (binary)
      //     - 8 & 12 = 00001000 = 8 (both have bit 3 set)
      const andValue = arr[i] & arr[j];

      // Step 2b: Update maximum if current AND value is greater
      //   Math.max returns the larger of the two values
      //   Example: maxAnd = 4, andValue = 8
      //     - Math.max(4, 8) = 8
      //     - maxAnd = 8
      maxAnd = Math.max(maxAnd, andValue);
    }
  }

  // Step 3: Return the maximum AND value found
  //   After checking all pairs, maxAnd contains the maximum
  return maxAnd;
}

// Step-by-step execution for maximumAndValueNaive([4, 8, 12, 16]):
//   Input: arr = [4, 8, 12, 16]
//   Binary: 4 = 00000100, 8 = 00001000, 12 = 00001100, 16 = 00010000
//
//   Initialization:
//     - maxAnd = 0
//
//   Iteration 1: i = 0, arr[i] = 4
//     - j = 1: arr[j] = 8
//       - andValue = 4 & 8 = 00000100 & 00001000 = 00000000 = 0
//       - maxAnd = Math.max(0, 0) = 0
//     - j = 2: arr[j] = 12
//       - andValue = 4 & 12 = 00000100 & 00001100 = 00000100 = 4
//       - maxAnd = Math.max(0, 4) = 4
//     - j = 3: arr[j] = 16
//       - andValue = 4 & 16 = 00000100 & 00010000 = 00000000 = 0
//       - maxAnd = Math.max(4, 0) = 4
//
//   Iteration 2: i = 1, arr[i] = 8
//     - j = 2: arr[j] = 12
//       - andValue = 8 & 12 = 00001000 & 00001100 = 00001000 = 8
//       - maxAnd = Math.max(4, 8) = 8
//     - j = 3: arr[j] = 16
//       - andValue = 8 & 16 = 00001000 & 00010000 = 00000000 = 0
//       - maxAnd = Math.max(8, 0) = 8
//
//   Iteration 3: i = 2, arr[i] = 12
//     - j = 3: arr[j] = 16
//       - andValue = 12 & 16 = 00001100 & 00010000 = 00000000 = 0
//       - maxAnd = Math.max(8, 0) = 8
//
//   Final result: 8
//   Maximum AND value is from pair (8, 12) = 8

// Test
console.log(maximumAndValue([4, 8, 12, 16])); // 8
console.log(maximumAndValueNaive([4, 8, 12, 16])); // 8
