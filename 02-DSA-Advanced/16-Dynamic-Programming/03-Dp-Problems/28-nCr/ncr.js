/**
 * nCr modulo m
 * Problem: Given two integers n and r, find the value of nCr modulo m.
 *
 * Time Complexity: O(n*r)
 * Space Complexity: O(r)
 */
class Solution {
  // Step 1: Initialize the ncrmod function with n and r
  ncrmod(n, r) {
    // Step 2: Initialize the mod with 1000000007
    const mod = 1000000007;
    // Step 3: Check if r is greater than n
    if (r > n) {
      // Step 4: Return 0
      return 0;
    }
    // Step 5: Update r with the minimum of r and n - r
    r = Math.min(r, n - r);
    // Step 6: Initialize the dp array with r + 1 elements and fill it with 0
    const dp = new Array(r + 1).fill(0);
    // Step 7: Initialize the dp array with 1 at index 0
    dp[0] = 1;
    // Step 8: Iterate over the range from 1 to n
    for (let i = 1; i <= n; i++) {
      // Step 9: Iterate over the range from Math.min(i, r) to 0
      for (let j = Math.min(i, r); j > 0; j--) {
        // Step 10: Update the dp array at index j with the value of dp[j] + dp[j - 1] modulo mod
        dp[j] = (dp[j] + dp[j - 1]) % mod;
      }
    }
    // Step 11: Return the value of dp[r] modulo mod
    return dp[r];
  }
}
// Step 12: Create a new instance of the solution class
let solution = new Solution();
// Step 13: Initialize the n with 5
let n = 5;
// Step 14: Initialize the r with 2
let r = 2;
// Step 15: Print the result
console.log(solution.ncrmod(n, r));
