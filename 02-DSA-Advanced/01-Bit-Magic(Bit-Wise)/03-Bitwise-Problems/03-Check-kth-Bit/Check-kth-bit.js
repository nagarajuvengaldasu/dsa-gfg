/**
 * Problem: Check if kth bit is set in number n
 *
 * IMPORTANT: The problem uses 0-indexed positions
 * - k = 0 means the rightmost bit (LSB)
 * - k = 1 means the second bit from right
 * - k = 10 means the 11th bit from right
 *
 * Step-by-step execution:
 * Example: n = 975, k = 10
 *
 * Binary representation:
 * n = 975 → binary: 1111001111 (10 bits, indices 0-9)
 *
 * Step 1: Create mask for kth bit (0-indexed)
 *   x = 1 << k = 1 << 10 = 1024 (binary: 10000000000)
 *   This creates a mask with only bit at position 10 set
 *
 * Step 2: Check if kth bit is set using bitwise AND
 *   n & x = 975 & 1024 = 1111001111 & 10000000000 = 0
 *   Since result is 0, bit at position 10 is NOT set
 *
 * Step 3: Return false (bit is not set)
 *
 * Why the original code failed:
 * Original: x = 1 << (k-1) = 1 << 9 = 512
 * This checks bit at position 9 (0-indexed), which IS set in 975
 * But the problem asks for bit at position 10 (0-indexed), which doesn't exist
 *
 * Example 2: n = 5, k = 0
 * n = 5 → binary: 101
 * x = 1 << 0 = 1 (binary: 001)
 * n & x = 5 & 1 = 101 & 001 = 001 (non-zero)
 * Result: true (bit at position 0 is set)
 *
 * Example 3: n = 5, k = 1
 * n = 5 → binary: 101
 * x = 1 << 1 = 2 (binary: 010)
 * n & x = 5 & 2 = 101 & 010 = 000 (zero)
 * Result: false (bit at position 1 is not set)
 *
 * Example 4: n = 5, k = 2
 * n = 5 → binary: 101
 * x = 1 << 2 = 4 (binary: 100)
 * n & x = 5 & 4 = 101 & 100 = 100 (non-zero)
 * Result: true (bit at position 2 is set)
 */
class Solution {
  checkKthBit(n, k) {
    // Step 1: Create mask for kth bit (0-indexed)
    // 1 << k shifts 1 to the left by k positions
    // This creates a number with only the kth bit set
    // Example: k=0 → 1 << 0 = 1 (binary: 001)
    //          k=1 → 1 << 1 = 2 (binary: 010)
    //          k=2 → 1 << 2 = 4 (binary: 100)
    let x = 1 << k;

    // Step 2: Check if kth bit is set using bitwise AND
    // If (n & x) is non-zero, the kth bit is set
    // If (n & x) is zero, the kth bit is not set
    if ((n & x) !== 0) {
      return true; // kth bit is set
    } else {
      return false; // kth bit is not set
    }
  }
}

// Alternative concise version:
// class Solution {
//     checkKthBit(n, k) {
//         return (n & (1 << k)) !== 0;
//     }
// }

// Test cases
let solution = new Solution();

console.log("=== Test Cases ===");
console.log("n=975, k=10:", solution.checkKthBit(975, 10)); // Expected: false
console.log("n=5, k=0:", solution.checkKthBit(5, 0)); // Expected: true
console.log("n=5, k=1:", solution.checkKthBit(5, 1)); // Expected: false
console.log("n=5, k=2:", solution.checkKthBit(5, 2)); // Expected: true
console.log("n=5, k=3:", solution.checkKthBit(5, 3)); // Expected: false
