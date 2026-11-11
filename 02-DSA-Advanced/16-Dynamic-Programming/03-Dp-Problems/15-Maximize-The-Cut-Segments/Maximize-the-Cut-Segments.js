/**
 * Maximize the Cut Segments
 * Problem: Given a rope of length n, and three lengths a, b, and c,
 * find the maximum number of pieces that can be made by cutting the rope.
 * Each cut must be of length a, b, or c.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * KEY INSIGHT: Use dynamic programming to store the maximum number of pieces that can be made by cutting the rope.
 */
// Step 1: Initialize the solution class
class Solution {
  maximizeCuts(n, x, y, z) {
    const dp = new Array(n + 1).fill(-1);
    // Step 2: Initialize the dp array
    dp[0] = 0;
    // Step 3: For each length, calculate the maximum number of pieces that can be made by cutting the rope
    for (let i = 1; i <= n; i++) {
      // Step 3a: If the length is greater than or equal to x, and the previous length is not -1, then update the dp array
      if (i >= x && dp[i - x] !== -1) {
        dp[i] = Math.max(dp[i], dp[i - x] + 1);
      }
      // Step 3b: If the length is greater than or equal to y, and the previous length is not -1, then update the dp array
      if (i >= y && dp[i - y] !== -1) {
        // Step 3b: If the length is greater than or equal to y, and the previous length is not -1, then update the dp array
        dp[i] = Math.max(dp[i], dp[i - y] + 1);
      }
      // Step 3c: If the length is greater than or equal to z, and the previous length is not -1, then update the dp array
      if (i >= z && dp[i - z] !== -1) {
        // Step 3c: If the length is greater than or equal to z, and the previous length is not -1, then update the dp array
        dp[i] = Math.max(dp[i], dp[i - z] + 1);
      }
    }
    // Step 4: Return the maximum number of pieces that can be made by cutting the rope
    return dp[n] === -1 ? 0 : dp[n];
  }
}
// Step 5: Create a new solution object
let n = 5;
let x = 2;
let y = 1;
let z = 1;
let solution = new Solution();
console.log(solution.maximizeCuts(n, x, y, z));
