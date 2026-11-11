/**
 * Shortest Common Supersequence
 * Problem: Given two strings, find the shortest string that has both strings as subsequences.
 *
 * Time Complexity: O(m*n) using space optimization
 * Space Complexity: O(n)
 *
 * KEY INSIGHT: Use dynamic programming to find the shortest common supersequence.
 */
// Step 1: Initialize the solution class and the dp array
class Solution {
  shortestCommonSupersequence(s1, s2) {
    // Step 2: Get the length of the strings
    const m = s1.length;
    // Step 3: Get the length of the strings
    const n = s2.length;

    // Step 4: Initialize the dp array
    let dp = new Array(2);
    // Step 4a: Initialize the dp array
    // Step 4: Initialize the dp array
    for (let i = 0; i < 2; i++) {
      // Step 4a: Initialize the dp array
      dp[i] = new Array(n + 1).fill(0);
    }
    // Step 5: For each length, calculate the shortest common supersequence length
    for (let i = 1; i <= m; i++) {
      // Step 5a: For each length, calculate the shortest common supersequence length
      for (let j = 1; j <= n; j++) {
        // Step 5b: If the characters are equal, then the shortest common supersequence length is 1 + the previous length
        if (s1[i - 1] === s2[j - 1]) {
          dp[i % 2][j] = 1 + dp[(i - 1) % 2][j - 1];
          // Step 5c: If the characters are not equal, then the shortest common supersequence length is 1 + the maximum of the previous length
        } else {
          // Step 5c: If the characters are not equal, then the shortest common supersequence length is 1 + the maximum of the previous length
          dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], dp[i % 2][j - 1]);
        }
      }
    }
    // Step 6: Return the shortest common supersequence length
    const lcslength = dp[m % 2][n];
    // Step 7: Return the shortest common supersequence length
    return m + n - lcslength;
  }
}
let solution = new Solution();
let str1 = "AGGTAB";
let str2 = "GXTXAYB";
console.log(solution.shortestCommonSupersequence(str1, str2));
