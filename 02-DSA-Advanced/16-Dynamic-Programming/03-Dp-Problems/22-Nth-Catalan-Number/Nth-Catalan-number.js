/**
 * Nth Catalan Number
 * Problem: Given a number n, find the nth Catalan number.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
// Step 1: Initialize the solution class
// Step 2: Initialize the nthCatalanNumber function with n
class Solution {
  nthCatalanNumber(n) {
    // Step 3: Initialize the dp array
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    // Step 4: Initialize the dp array for each i
    for (let i = 1; i <= n; i++) {
      // Step 5: Initialize the dp array for each j
      for (let j = 0; j < i; j++) {
        // Step 6: Initialize the dp array for each j
        dp[i] += dp[j] * dp[i - j - 1];
      }
    }
    // Step 7: Return the nth Catalan number
    return dp[n];
  }
}

// Step 8: Create a new instance of the solution class
// Step 9: Initialize the nth Catalan number with n
// Step 10: Print the nth Catalan number
let solution = new Solution();
// Step 11: Initialize the nth Catalan number with n
// Step 12: Print the nth Catalan number
let n = 5;
// Step 13: Print the nth Catalan number
console.log(solution.nthCatalanNumber(n));
