/**
 * Converts a binary number to its Gray code equivalent
 *
 * Gray Code (Reflected Binary Code):
 * - Adjacent numbers differ by only one bit
 * - Used in error correction, digital communications, and encoders
 *
 * Algorithm: n ^ (n >> 1)
 * - Right shift n by 1 bit: (n >> 1)
 * - XOR the original n with the shifted value: n ^ (n >> 1)
 * - This generates the Gray code
 *
 * How it works:
 * The XOR operation with the right-shifted value creates a pattern where
 * each bit in the result represents whether that bit position differs
 * from the bit to its right in the original binary number.
 *
 * @param {number} B - Binary number to convert to Gray code
 * @returns {number} - Gray code equivalent
 */
function binaryToGray(B) {
  // Step 1: Right shift the number by 1 bit
  //   This shifts all bits to the right, dropping the rightmost bit
  //   and adding a 0 to the left (for positive numbers)
  //   Example: 7 >> 1 = 3
  //     - 7 in binary = 111
  //     - Shift right: 011 = 3
  //
  // Step 2: XOR the original number with the shifted value
  //   XOR (^) returns 1 when bits are different, 0 when same
  //   Example: 7 ^ 3
  //     - 7 = 111 (binary)
  //     - 3 = 011 (binary)
  //     - 111 ^ 011 = 100 (binary) = 4 (decimal)
  //
  // Why this works:
  //   Gray code: each number differs from adjacent numbers by only one bit
  //   The XOR with right-shifted value captures bit transitions:
  //   - If bit i and bit i+1 are different → result bit i = 1
  //   - If bit i and bit i+1 are same → result bit i = 0
  //   - The leftmost bit stays the same (no bit to compare with)
  return B ^ (B >> 1);
}

/**
 * Converts a Gray code number back to its binary equivalent
 *
 * Algorithm:
 * - Start with B = 0
 * - Repeatedly XOR B with the Gray code G
 * - Right shift G by 1 in each iteration
 * - Continue until G becomes 0
 *
 * How it works:
 * Gray code to binary conversion requires reversing the XOR operation.
 * The iterative XOR process reconstructs the original binary number by
 * progressively accumulating the bit differences.
 *
 * @param {number} G - Gray code number to convert to binary
 * @returns {number} - Binary equivalent
 */
function grayToBinary(G) {
  // Step 1: Initialize the binary result to 0
  let B = 0;

  // Step 2: Iterate while G > 0
  //   We process the Gray code bit by bit from right to left
  while (G > 0) {
    // Step 2a: XOR current binary result with Gray code
    //   This accumulates the bit differences from the Gray code
    //   Example: B = 0, G = 5 (binary 101)
    //     - B ^ G = 0 ^ 5 = 5
    //     - This captures the first level of Gray code encoding
    B = B ^ G;

    // Step 2b: Right shift Gray code by 1
    //   This moves to the next bit position for processing
    //   Example: G = 5 (binary 101) >> 1 = 2 (binary 010)
    //   - Shifts all bits right, effectively dividing by 2
    G = G >> 1;
  }

  // Step 3: Return the accumulated binary result
  //   After all iterations, B contains the original binary number
  return B;
}

// Test Case 1: Binary to Gray Code
// Step-by-step execution for binaryToGray(3):
//   Input: B = 3
//
//   Step 1: Calculate B >> 1 (right shift by 1)
//     - B = 3 = 011 (binary, 3 bits)
//     - B >> 1 = 3 >> 1 = 001 (binary) = 1 (decimal)
//     - Right shift moves all bits one position to the right
//     - Rightmost bit (1) is dropped, leftmost bit becomes 0
//
//   Step 2: Calculate B ^ (B >> 1)
//     - B = 3 = 011 (binary)
//     - B >> 1 = 1 = 001 (binary)
//     - XOR operation:
//         011  (3)
//       ^ 001  (1, shifted)
//       -----
//         010  (result)
//     - 0 ^ 0 = 0 (leftmost bit: same, so 0)
//     - 1 ^ 0 = 1 (middle bit: different, so 1)
//     - 1 ^ 1 = 0 (rightmost bit: same, so 0)
//     - Result: 010 (binary) = 2 (decimal)
//
//   Verification:
//     - Binary 3 = 011 → Gray code should be 010 = 2
//     - In Gray code sequence: 0(000), 1(001), 3(011), 2(010)
//     - 3 in Gray code is indeed 2 (010)
//
//   Return: 2
console.log("Binary to Gray Code:");
console.log("binaryToGray(3) =", binaryToGray(3));
console.log();

// Test Case 2: Gray Code to Binary
// Step-by-step execution for grayToBinary(5):
//   Input: G = 5
//
//   Initialization:
//     - B = 0
//     - G = 5 = 101 (binary)
//
//   Iteration 1: (G = 5, which is > 0)
//     Step 2a: B = B ^ G
//       - B = 0 = 000 (binary)
//       - G = 5 = 101 (binary)
//       - XOR operation:
//           000  (B = 0)
//         ^ 101  (G = 5)
//         -----
//           101  (result)
//       - B = 5 (decimal)
//
//     Step 2b: G = G >> 1
//       - G = 5 = 101 (binary)
//       - G >> 1 = 010 (binary) = 2 (decimal)
//       - G = 2
//
//   Iteration 2: (G = 2, which is > 0)
//     Step 2a: B = B ^ G
//       - B = 5 = 101 (binary)
//       - G = 2 = 010 (binary)
//       - XOR operation:
//           101  (B = 5)
//         ^ 010  (G = 2)
//         -----
//           111  (result)
//       - B = 7 (decimal)
//
//     Step 2b: G = G >> 1
//       - G = 2 = 010 (binary)
//       - G >> 1 = 001 (binary) = 1 (decimal)
//       - G = 1
//
//   Iteration 3: (G = 1, which is > 0)
//     Step 2a: B = B ^ G
//       - B = 7 = 111 (binary)
//       - G = 1 = 001 (binary)
//       - XOR operation:
//           111  (B = 7)
//         ^ 001  (G = 1)
//         -----
//           110  (result)
//       - B = 6 (decimal)
//
//     Step 2b: G = G >> 1
//       - G = 1 = 001 (binary)
//       - G >> 1 = 000 (binary) = 0 (decimal)
//       - G = 0
//
//   Iteration 4: (G = 0, loop condition false, exit)
//
//   Verification:
//     - Gray code 5 (101) should convert to binary 6 (110)
//     - Binary 6 = 110 → Gray code = 6 ^ (6 >> 1) = 110 ^ 011 = 101 = 5 ✓
//
//   Return: 6
console.log("Gray Code to Binary:");
console.log("grayToBinary(5) =", grayToBinary(5));
console.log();

// Additional test cases with detailed explanations
console.log("=== Additional Test Cases ===");
console.log();

// Test: Binary 7 to Gray Code
// Binary 7 = 111
// Gray = 7 ^ (7 >> 1) = 111 ^ 011 = 100 = 4
console.log("binaryToGray(7):");
console.log("  Binary 7 = 111");
console.log("  7 >> 1 = 3 = 011");
console.log("  111 ^ 011 = 100 = 4");
console.log("  Result:", binaryToGray(7));
console.log();

// Test: Gray Code 4 to Binary
// Gray 4 = 100
// Iterations:
//   Iteration 1: B = 0 ^ 4 = 4, G = 4 >> 1 = 2
//   Iteration 2: B = 4 ^ 2 = 6, G = 2 >> 1 = 1
//   Iteration 3: B = 6 ^ 1 = 7, G = 1 >> 1 = 0
//   Result: 7
console.log("grayToBinary(4):");
console.log("  Gray Code 4 = 100");
console.log("  Iteration 1: B = 0 ^ 4 = 4, G = 2");
console.log("  Iteration 2: B = 4 ^ 2 = 6, G = 1");
console.log("  Iteration 3: B = 6 ^ 1 = 7, G = 0");
console.log("  Result:", grayToBinary(4));
console.log();

// Test: Binary 10 to Gray Code
// Binary 10 = 1010
// Gray = 10 ^ (10 >> 1) = 1010 ^ 0101 = 1111 = 15
console.log("binaryToGray(10):");
console.log("  Binary 10 = 1010");
console.log("  10 >> 1 = 5 = 0101");
console.log("  1010 ^ 0101 = 1111 = 15");
console.log("  Result:", binaryToGray(10));
console.log();
