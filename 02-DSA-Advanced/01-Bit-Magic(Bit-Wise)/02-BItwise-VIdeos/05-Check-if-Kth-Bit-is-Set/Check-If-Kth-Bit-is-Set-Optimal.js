/**
 * Step-by-step execution:
 * Example: n = 5 (binary: 101), k = 3 (checking 3rd bit from right)
 *
 * Step 1: Create mask using left shift: x = 1 << (k-1) = 1 << 2 = 4 (binary: 100)
 *         This efficiently creates a number with only the kth bit set
 * Step 2: Perform bitwise AND: n & x = 5 & 4 = 101 & 100 = 100 (which is 4, non-zero)
 * Step 3: Since result is non-zero, the 3rd bit is set, output "set"
 */
function isKthBitSet(n, k) {
  // Step 1: Create mask for kth bit using left shift operator
  // 1 << (k-1) shifts 1 to the left by (k-1) positions
  // Example: k=3 → 1 << 2 = 4 (binary: 100) - only 3rd bit is set
  let x = 1 << k;

  // Step 2: Check if kth bit is set using bitwise AND
  // If (n & x) is non-zero, the kth bit in n is set
  if ((n & x) !== 0) {
    console.log("set");
  } else {
    console.log("not set");
  }
}

// Test execution:
// Step 1: Initialize n = 5 (binary: 101)
let n = 975;
// Step 2: Initialize k = 3 (checking 3rd bit from right)
let k = 10;
// Step 3: Call function to check if 3rd bit is set
isKthBitSet(n, k);

/**
 * another approach which is also efficient
 * function isKthset(n,k){
 * let x = (n >> (k-1))
 * if((x&1)!== 0){
 * console.log('yes')
 * }
 * else{
 * console.log('no')
 * }
 * }
 * let n = 5;
 * let k = 3;
 * isKthset(n, k);
 */

/**
 * another approach which is also efficient
 * function isKthset(n,k){
 * let x = (n >> (k-1))
 * if((x&1)!== 0){
 * console.log('yes')
 * }
 * else{
 * console.log('no')
 * }
 * }
 * let n = 5;
 * let k = 3;
 * isKthset(n, k);
 */
