/**
 * Power Set using Bitwise Operators
 *
 * The idea: Each number from 0 to (2^n - 1) represents a unique subset
 * The binary representation of each number tells us which characters to include
 *
 * Example for "abc" (n=3):
 * - Total subsets = 2^3 = 8
 * - i=0 (000) → "" (empty set)
 * - i=1 (001) → "a" (include char at index 0)
 * - i=2 (010) → "b" (include char at index 1)
 * - i=3 (011) → "ab" (include char at index 0 and 1)
 * - i=4 (100) → "c" (include char at index 2)
 * - i=5 (101) → "ac" (include char at index 0 and 2)
 * - i=6 (110) → "bc" (include char at index 1 and 2)
 * - i=7 (111) → "abc" (include all chars)
 */
function powerSet(str) {
  // Step 1: Get the length of the string
  // This tells us how many characters we need to consider
  let n = str.length;

  // Step 2: Calculate total number of subsets = 2^n
  // Using bitwise left shift: 1 << n is equivalent to 2^n
  // Example: if n=3, then 1 << 3 = 8 (binary: 1000)
  // This is because we have 2 choices for each character: include or exclude
  let psize = 1 << n;

  // Step 3: Iterate through each number from 0 to (2^n - 1)
  // Each number i represents a unique subset
  // The binary representation of i tells us which characters to include
  for (let i = 0; i < psize; i++) {
    // Step 4: Initialize an empty string for current subset
    // This will store the characters that form the current subset
    let curr = "";

    // Step 5: Check each bit position (each character position)
    // We iterate through all character positions to see which ones to include
    for (let j = 0; j < n; j++) {
      // Step 6: Check if j-th bit is set in number i
      // (1 << j) creates a mask with only the j-th bit set
      // Example: if j=0, then (1 << 0) = 1 (binary: 001)
      //          if j=1, then (1 << 1) = 2 (binary: 010)
      //          if j=2, then (1 << 2) = 4 (binary: 100)
      // (i & (1 << j)) performs a bitwise AND operation to extract the j-th bit from i
      // If the result is non-zero, the j-th bit is set (meaning we should include str[j])
      // If the result is zero, the j-th bit is not set (meaning we exclude str[j])
      if ((i & (1 << j)) !== 0) {
        // Step 7: If j-th bit is set, include str[j] in the subset
        // Append the character at position j to the current subset string
        curr = curr + str[j];
      }
    }

    // Step 8: Print the current subset
    // After checking all bit positions, we have constructed one complete subset
    console.log(curr);
  }
}

/**
 * Step-by-step execution example:
 * Input: str = "ab" (n = 2)
 *
 * INITIALIZATION:
 * Step 1: n = str.length = 2
 * Step 2: psize = 1 << 2 = 4 (total subsets)
 *
 * ITERATION 1: i = 0 (binary: 00)
 *   - Step 1: curr = ""
 *   - Step 2: j = 0, check if (0 & (1 << 0)) = (0 & 1) = 0 → bit not set, skip
 *   - Step 3: j = 1, check if (0 & (1 << 1)) = (0 & 2) = 0 → bit not set, skip
 *   - Step 4: console.log("") → Output: "" (empty subset)
 *
 * ITERATION 2: i = 1 (binary: 01)
 *   - Step 1: curr = ""
 *   - Step 2: j = 0, check if (1 & (1 << 0)) = (1 & 1) = 1 → bit set, curr = "a"
 *   - Step 3: j = 1, check if (1 & (1 << 1)) = (1 & 2) = 0 → bit not set, skip
 *   - Step 4: console.log("a") → Output: "a"
 *
 * ITERATION 3: i = 2 (binary: 10)
 *   - Step 1: curr = ""
 *   - Step 2: j = 0, check if (2 & (1 << 0)) = (2 & 1) = 0 → bit not set, skip
 *   - Step 3: j = 1, check if (2 & (1 << 1)) = (2 & 2) = 2 → bit set, curr = "b"
 *   - Step 4: console.log("b") → Output: "b"
 *
 * ITERATION 4: i = 3 (binary: 11)
 *   - Step 1: curr = ""
 *   - Step 2: j = 0, check if (3 & (1 << 0)) = (3 & 1) = 1 → bit set, curr = "a"
 *   - Step 3: j = 1, check if (3 & (1 << 1)) = (3 & 2) = 2 → bit set, curr = "ab"
 *   - Step 4: console.log("ab") → Output: "ab"
 *
 * Final Output: "", "a", "b", "ab"
 */

// Test execution:
// Step 1: Initialize string
let str = "ab";
// Step 2: Call function to generate all subsets
powerSet(str);
