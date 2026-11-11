/**
 * Checks if a number is a power of 2 using bitwise operations
 * Powers of 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...
 *
 * Algorithm: A number is a power of 2 if it has exactly one bit set in its binary representation
 * Trick: n & (n - 1) removes the rightmost set bit
 *        If n is a power of 2, it has only one bit set, so n & (n - 1) will be 0
 */
function isPowerOf2(n) {
  // Step 1: Handle edge case
  // 0 is not considered a power of 2 (2^0 = 1, not 0)
  if (n == 0) return false;

  // Step 2: Bitwise trick to check if number is power of 2
  // For powers of 2 (e.g., n = 8 = 1000 in binary):
  //   - n = 8    = 1000 (binary)
  //   - n - 1 = 7 = 0111 (binary)
  //   - n & (n - 1) = 1000 & 0111 = 0000 = 0 ✓
  //
  // For non-powers of 2 (e.g., n = 10 = 1010 in binary):
  //   - n = 10   = 1010 (binary)
  //   - n - 1 = 9 = 1001 (binary)
  //   - n & (n - 1) = 1010 & 1001 = 1000 = 8 ≠ 0 ✗
  //
  // How it works:
  //   - When you subtract 1 from a power of 2, all bits to the right of the set bit become 1
  //   - The AND operation with the original number will result in 0 because there's no overlap
  //   - For non-powers of 2, there are multiple bits set, so n & (n - 1) will have at least one bit set
  return (n & (n - 1)) == 0;
}

// Test with 131072 (which is 2^17)
// Step-by-step execution for isPowerOf2(131072):
//   Step 1: n = 131072
//   Step 2: Check if n == 0? No, continue
//   Step 3: n & (n - 1)
//     - n = 131072 = 1000000000000000000 (binary, 18 bits, 1 bit set)
//     - n - 1 = 131071 = 0111111111111111111 (binary, 17 bits set)
//     - n & (n - 1) = 1000000000000000000 & 0111111111111111111 = 0000000000000000000 = 0
//   Step 4: (n & (n - 1)) == 0? Yes, so return true
// Result: true (131072 is 2^17, which is a power of 2)
console.log(isPowerOf2(131072));
