/**
 * Ways to write n as sum
 * Problem: Given a number n, find the number of ways to write n as sum of positive integers.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
// Step 1: Initialize the solution class

class Solution {
  // Step 2: Initialize the countways function
  countways(n) {
    // Step 3: Initialize the mod
    const mod = 1000000007;
    // Step 4: Initialize the dp array
    const dp = new Array(n + 1).fill(0);
    // Step 5: Initialize the dp array
    dp[0] = 1;
    // Step 6: For each part, update the dp array
    for (let part = 1; part <= n; part++) {
      // Step 7: For each sum, update the dp array
      for (let sum = part; sum <= n; sum++) {
        // Step 7a: Update the dp array
        dp[sum] = (dp[sum] + dp[sum - part]) % mod;
      }
    }
    // Step 8: Return the dp array
    return (dp[n] - 1 + mod) % mod;
  }
}
// Step 9: Initialize the solution class
let solution = new Solution();
// Step 10: Initialize the number of ways
let n = 5;

// Step 11: Print the number of ways to write n as sum
console.log(solution.countways(n));
