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
 */
function binaryToGray(n) {
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
  return n ^ (n >> 1);
}

// Test with n = 7
// Step-by-step execution for binaryToGray(7):
//   Input: n = 7
//
//   Step 1: Calculate n >> 1 (right shift by 1)
//     - n = 7 = 111 (binary, 3 bits)
//     - n >> 1 = 7 >> 1 = 011 (binary) = 3 (decimal)
//     - Right shift moves all bits one position to the right
//
//   Step 2: Calculate n ^ (n >> 1)
//     - n = 7 = 111 (binary)
//     - n >> 1 = 3 = 011 (binary)
//     - XOR operation:
//         111  (7)
//       ^ 011  (3, shifted)
//       -----
//         100  (result)
//     - 1 ^ 0 = 1 (first bit: different, so 1)
//     - 1 ^ 1 = 0 (second bit: same, so 0)
//     - 1 ^ 1 = 0 (third bit: same, so 0)
//     - Result: 100 (binary) = 4 (decimal)
//
//   Verification:
//     - Binary 7 = 111 → Gray code should be 100 = 4
//     - In Gray code sequence: 0(000), 1(001), 3(011), 2(010), 6(110), 7(111), 5(101), 4(100)
//     - 7 in Gray code is indeed 4 (100)
//
//   Return: 4
console.log(binaryToGray(7));
