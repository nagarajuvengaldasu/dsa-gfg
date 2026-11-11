/**
 * EDIT DISTANCE - DP APPROACH
 * Same recursive logic as memoization, but with bottom-up approach.
 * Time: O(m*n), Space: O(m*n)
 */

function editdistance(s1, s2, m, n) {
  // then create a new array dp
  let dp = new Array(m + 1);
  // then fill the array with the length of the strings
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
    // then fill the first column with the length of the strings
    dp[i][0] = i;
  }
  // then fill the first row with the length of the strings
  for (let j = 1; j <= n; j++) {
    // then fill the first row with the length of the strings
    dp[0][j] = j;
  }
  // then fill the array with the length of the strings
  for (let i = 1; i <= m; i++) {
    // then fill the array with the length of the strings
    for (let j = 1; j <= n; j++) {
      // then check if the characters are the same
      if (s1[i - 1] === s2[j - 1]) {
        // then set the value of the array to the value of the previous diagonal
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // then set the value of the array to the value of the previous diagonal
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  // then return the value of the array
  return dp[m][n];
}
let s1 = "cat";
let s2 = "cut";
let m = s1.length;
let n = s2.length;
console.log(editdistance(s1, s2, m, n));
