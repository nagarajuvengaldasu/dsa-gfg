/*
 * PROBLEM STATEMENT:
 * Find the length of the Longest Common Subsequence of two strings.
 *
 * OPTIMAL: DP. dp[i][j] = LCS of str1[0..i-1] and str2[0..j-1].
 * If str1[i-1]==str2[j-1]: dp[i][j]=1+dp[i-1][j-1]. Else: max(dp[i-1][j], dp[i][j-1]).
 *
 * STEP-BY-STEP (str1="abcdgh", str2="aedfhr"):
 * dp table: row 0, col 0 all 0. Fill row by row.
 * (1,1): 'a'=='a' → dp[1][1]=1
 * (2,1): 'b'!='a' → max(0,1)=1
 * ... fill entire table ...
 * dp[6][6]=3
 *
 * EXAMPLE: "abcdgh","aedfhr" → 3 (adh)
 * Time: O(n*m) | Space: O(n*m)
 */
function lcs(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  // WHY: dp[i][j] = LCS length of str1[0..i-1] and str2[0..j-1]. Row 0, col 0 = 0.

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        // EXECUTION: Match → extend LCS from diagonal. e.g. 'a'=='a' → 1+dp[0][0]=1.
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        // WHY: No match → best of skip str1[i-1] or str2[j-1].
      }
    }
  }
  return dp[n][m];
  // EXECUTION: Bottom-right = LCS of full strings. e.g. "abcdgh","aedfhr" → 3.
}
let str1 = "abcdgh";
let str2 = "aedfhr";
console.log(lcs(str1, str2));
