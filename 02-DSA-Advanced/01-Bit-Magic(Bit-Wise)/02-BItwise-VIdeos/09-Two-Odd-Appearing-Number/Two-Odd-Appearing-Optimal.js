/**
 * Optimal solution using XOR operator
 *
 * Algorithm:
 * 1. XOR all elements to get XOR of two odd-occurring numbers
 * 2. Find a bit that is set in the result (this bit differs between the two numbers)
 * 3. Group numbers based on this bit and XOR each group separately
 *
 * Step-by-step execution:
 * Example: arr = [3, 4, 3, 4, 5, 4, 4, 6, 7, 7]
 * Expected: 5 and 6 (both appear odd number of times)
 *
 * PHASE 1: Find XOR of two odd-occurring numbers
 * Step 1: Initialize x = arr[0] = 3
 * Step 2: XOR all elements
 *   - x = 3 ^ 4 ^ 3 ^ 4 ^ 5 ^ 4 ^ 4 ^ 6 ^ 7 ^ 7
 *   - Even-occurring numbers cancel out: 3^3=0, 4^4^4^4=0, 7^7=0
 *   - Result: x = 5 ^ 6 = 3 (binary: 011)
 *
 * PHASE 2: Find rightmost set bit in x
 * Step 3: Calculate k = x & ~(x - 1)
 *   - x = 3 (binary: 011)
 *   - x - 1 = 2 (binary: 010)
 *   - ~(x - 1) = ~2 = ...11111101 (all bits flipped)
 *   - k = 3 & ~2 = 011 & 11111101 = 001 (binary) = 1
 *   - k isolates the rightmost set bit (bit at position 0)
 *
 * PHASE 3: Group and XOR based on bit k
 * Step 4: Initialize res1 = 0, res2 = 0
 * Step 5: Iterate through array and group by bit k
 *
 *   Numbers with bit k set (arr[i] & k !== 0):
 *   - 3 (011): 3 & 1 = 1 → res1 = 0 ^ 3 = 3
 *   - 3 (011): 3 & 1 = 1 → res1 = 3 ^ 3 = 0
 *   - 5 (101): 5 & 1 = 1 → res1 = 0 ^ 5 = 5
 *   - 7 (111): 7 & 1 = 1 → res1 = 5 ^ 7 = 2
 *   - 7 (111): 7 & 1 = 1 → res1 = 2 ^ 7 = 5
 *   Final res1 = 5
 *
 *   Numbers with bit k not set (arr[i] & k === 0):
 *   - 4 (100): 4 & 1 = 0 → res2 = 0 ^ 4 = 4
 *   - 4 (100): 4 & 1 = 0 → res2 = 4 ^ 4 = 0
 *   - 4 (100): 4 & 1 = 0 → res2 = 0 ^ 4 = 4
 *   - 4 (100): 4 & 1 = 0 → res2 = 4 ^ 4 = 0
 *   - 6 (110): 6 & 1 = 0 → res2 = 0 ^ 6 = 6
 *   Final res2 = 6
 *
 * Step 6: Output res1 = 5, res2 = 6
 */
function twoOddAppearingNumber(arr) {
  // PHASE 1: XOR all elements to get XOR of two odd-occurring numbers
  // Even-occurring numbers will cancel out, leaving XOR of the two odd numbers
  let x = arr[0];
  for (let i = 1; i < arr.length; i++) {
    x = x ^ arr[i]; // XOR operation
  }

  // PHASE 2: Find rightmost set bit in x
  // This bit will be different between the two odd-occurring numbers
  // x & ~(x - 1) isolates the rightmost set bit
  // Example: if x = 6 (110), then x-1 = 5 (101), ~(x-1) = ...11111010
  //          x & ~(x-1) = 110 & 11111010 = 010 (isolates rightmost set bit)
  let k = x & ~(x - 1);

  // PHASE 3: Group numbers based on bit k and XOR each group
  // Numbers with bit k set go to res1, others go to res2
  let res1 = 0; // Will contain first odd-occurring number
  let res2 = 0; // Will contain second odd-occurring number

  for (let i = 0; i < arr.length; i++) {
    // Step 1: Check if arr[i] has bit k set
    if ((arr[i] & k) !== 0) {
      // Step 2: XOR to res1 if bit k is set
      res1 = res1 ^ arr[i];
    } else {
      // Step 3: XOR to res2 if bit k is not set
      res2 = res2 ^ arr[i];
    }
  }

  // Step 4: Print both odd-occurring numbers
  console.log(res1, res2);
}

// Test execution:
// Step 1: Initialize array
let arr = [3, 4, 3, 4, 5, 4, 4, 6, 7, 7];
// Step 2: Call function to find and print odd-occurring numbers
twoOddAppearingNumber(arr); // Output: 5, 6
