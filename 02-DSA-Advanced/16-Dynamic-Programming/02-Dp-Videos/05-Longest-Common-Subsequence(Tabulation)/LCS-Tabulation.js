// function to find the longest common subsequence of two strings
function lcs(s1, s2) {
  //we are getting the length of the two strings
  let m = s1.length;
  //we are getting the length of the second string
  let n = s2.length;

  //we are creating a 2D array to store the results of the subproblems
  let dp = new Array(m + 1);
  //we are initializing the first row and column of the array to 0

  for (let i = 0; i <= m; i++) {
    //we are creating a new row for each index of the first string
    dp[i] = new Array(n + 1);
    //we are initializing the first column of the row to 0
    dp[i][0] = 0;
  }
  //we are initializing the first row of the array to 0
  for (let j = 1; j <= n; j++) {
    //we are initializing the first column of the row to 0
    dp[0][j] = 0;
  }
  //we are filling the rest of the array
  for (let i = 1; i <= m; i++) {
    //we are filling the rest of the row by iterating through the second string
    for (let j = 1; j <= n; j++) {
      //if the last character of both strings is the same, we add 1 to the result
      if (s1[i - 1] === s2[j - 1]) {
        //we are adding 1 to the result
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        //if the last character of both strings is not the same, we take the maximum of the two results
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  //we are returning the result
  return dp[m][n];
}
let s1 = "abcde";
//we are testing the function with the strings "abcde" and "ace"
let s2 = "ace";
console.log(lcs(s1, s2));
