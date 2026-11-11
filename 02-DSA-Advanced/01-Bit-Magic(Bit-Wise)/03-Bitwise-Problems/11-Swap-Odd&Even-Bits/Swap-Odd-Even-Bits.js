/**
 * Swaps all even-position bits with their right-side adjacent odd-position bits
 *
 * Algorithm:
 * 1. Extract all even-positioned bits (positions 0, 2, 4, 6, ...) using mask 0xAAAAAAAA
 * 2. Extract all odd-positioned bits (positions 1, 3, 5, 7, ...) using mask 0x55555555
 * 3. Right shift even bits by 1 to move them to odd positions
 * 4. Left shift odd bits by 1 to move them to even positions
 * 5. Combine both results using OR operation
 *
 * Example:
 * Input: n = 23
 * Binary: 0001 0111 (from left to right, or positions 7-0 from right to left)
 *         Position: 7 6 5 4 3 2 1 0
 *         Value:    0 0 0 1 0 1 1 1
 *
 * Even bits (positions 0,2,4,6): 0 0 1 1 = 0011
 * Odd bits (positions 1,3,5,7):  0 1 0 0 = 0100
 *
 * After swap:
 * Even positions get odd bits shifted right: 0100 >> 1 = 0010
 * Odd positions get even bits shifted left:  0011 << 1 = 0110
 *
 * Result: 0010 | 0110 = 0010 1011 = 43
 *
 * @param {number} n - Unsigned integer (1 ≤ n ≤ 10^9)
 * @returns {number} - Number with swapped odd and even bits
 */
function swapOddEvenBits(n) {
  // Extract even-positioned bits (0xAAAAAAAA = 10101010... in binary)
  // This mask has 1s at positions: 1, 3, 5, 7, ... (but we want even positions)
  // Wait, let me reconsider: bit positions are counted from right, starting at 0
  // Position 0 (rightmost) is even, position 1 is odd, position 2 is even, etc.
  // So mask 0xAAAAAAAA has bits at odd positions (1, 3, 5, 7, ...)
  // And mask 0x55555555 has bits at even positions (0, 2, 4, 6, ...)

  // Actually, in binary representation, when we write from left to right:
  // For 8-bit: bit7 bit6 bit5 bit4 bit3 bit2 bit1 bit0
  // Position 0 is the rightmost (LSB), position 7 is leftmost (MSB)
  // Even positions: 0, 2, 4, 6 (from right)
  // Odd positions: 1, 3, 5, 7 (from right)

  // 0x55555555 = 01010101... (1s at even positions: 0, 2, 4, 6, ...)
  // 0xAAAAAAAA = 10101010... (1s at odd positions: 1, 3, 5, 7, ...)

  // Extract even-positioned bits (positions 0, 2, 4, 6, ...)
  const evenBits = n & 0x55555555;

  // Extract odd-positioned bits (positions 1, 3, 5, 7, ...)
  const oddBits = n & 0xaaaaaaaa;

  // Swap: even bits go to odd positions (right shift by 1)
  //       odd bits go to even positions (left shift by 1)
  // Combine using OR operation
  return ((evenBits << 1) | (oddBits >> 1)) >>> 0; // Use >>> 0 to ensure unsigned integer
}


console.log(swapOddEvenBits(23));