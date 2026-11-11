/**
 * Step-by-step execution:
 * Example: n = 5 (binary: 101), k = 3 (checking 3rd bit from right)
 *
 * Step 1: Initialize x = 1 (binary: 001)
 * Step 2: Loop from i = 0 to i < (k-1) = 2, so i = 0, 1
 *   - Iteration 1 (i=0): x = 1 * 2 = 2 (binary: 010)
 *   - Iteration 2 (i=1): x = 2 * 2 = 4 (binary: 100)
 * Step 3: After loop, x = 4 (binary: 100) - this is the mask for 3rd bit
 * Step 4: Perform bitwise AND: n & x = 5 & 4 = 101 & 100 = 100 (which is 4, non-zero)
 * Step 5: Since result is non-zero, the 3rd bit is set, output "set"
 */
function isKthBitSet(n, k) {
  // Step 1: Initialize x to 1 (binary: 001)
  let x = 1;

  // Step 2: Multiply x by 2, (k-1) times to create mask for kth bit
  // This creates a number with only the kth bit set
  for (let i = 0; i < k - 1; i++) {
    x = x * 2; // Each multiplication shifts the bit one position left
  }

  // Step 3: Check if kth bit is set using bitwise AND
  // If (n & x) is non-zero, the kth bit is set
  if ((n & x) !== 0) {
    console.log("set");
  } else {
    console.log("not set");
  }
}

// Test execution:
// Step 1: Initialize n = 5 (binary: 101)
let n = 5;
// Step 2: Initialize k = 3 (checking 3rd bit from right)
let k = 3;
// Step 3: Call function to check if 3rd bit is set
isKthBitSet(n, k);
