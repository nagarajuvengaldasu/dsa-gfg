/*
Problem: Find the longest common subsequence of two strings
Time Complexity: O(n*m)
Space Complexity: O(n*m)
*/

class Solution {
  // Step 1: Initialize the longestCommonSubsequence function
  longestCommonSubsequence(str1, str2) {
    // Step 1.1: Initialize the length of the strings
    let n = str1.length;
    // Step 1.2: Initialize the length of the strings
    let m = str2.length;
    // Step 1.3: Initialize the dp array
    let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    // Step 1.4: Iterate through the strings
    for (let i = 1; i <= n; i++) {
      // Step 1.4.1: Iterate through the strings
      for (let j = 1; j <= m; j++) {
        // Step 1.4.1.1: If the characters are equal
        if (str1[i - 1] === str2[j - 1]) {
          // Step 1.4.1.1.1: If the characters are equal
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          // Step 1.4.1.2: If the characters are not equal
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    // Step 1.5: Return the dp array
    return dp[n][m];
  }
}
// Step 2: Initialize the sol object
let sol = new Solution();
// Step 3: Initialize the str1 variable
let str1 = "abcdgh";
// Step 4: Initialize the str2 variable
let str2 = "aedfhr";
// Step 5: Call the longestCommonSubsequence function
console.log(sol.longestCommonSubsequence(str1, str2));
