/*
PROBLEM STATEMENT:
Given a string, we need to find the minimum number of partitions required to make the string a polindrome.
A polindrome is a string that reads the same forward and backward.
TIME COMPLEXITY: O(n^3) - nested loops
SPACE COMPLEXITY: O(n^2) - dp array
KEY INSIGHT: This is a dynamic programming problem where we use a 2D array to store the minimum number of partitions required to make the string a polindrome.
We use a gap strategy to fill the dp array.
*/

// Step 1: Define the function to find the minimum number of partitions required to make the string a polindrome  using Dynamic Programming
function part(s) {
  // Step 2: Get the length of the string
  let n = s.length;
  // Step 3: Create a 2D array to store the minimum number of partitions required to make the string a polindrome
  let dp = new Array(n);
  // Step 4: Initialize the dp array with 0
  for (let i = 0; i < n; i++) {
    // Step 4.1: Create a 1D array to store the minimum number of partitions required to make the string a polindrome
    dp[i] = new Array(n);
  }
  // Step 4.2: Initialize the dp array with 0
  for (let i = 0; i < n; i++) {
    // Step 4.2.1: Initialize the dp array with 0
    dp[i][i] = 0;
  }
  // Step 4.3: Fill the dp array using a gap strategy
  for (let gap = 1; gap < n; gap++) {
    // Step 4.3.1: Fill the dp array using a gap strategy
    for (let i = 0; i + gap < n; i++) {
      // Step 4.3.1.1: Get the end index of the current gap
      let j = i + gap;
      // Step 4.3.1.2: Check if the current substring is a polindrome
      if (isPalindrome(s, i, j)) {
        // Step 4.3.1.2.1: If the current substring is a polindrome, set the minimum number of partitions required to make the string a polindrome to 0
        dp[i][j] = 0;
      } else {
        // Step 4.3.1.2.2: If the current substring is not a polindrome, set the minimum number of partitions required to make the string a polindrome to infinity
        dp[i][j] = Number.POSITIVE_INFINITY;
        // Step 4.3.1.2.3: Try all possible partitions
        for (let k = i; k < j; k++) {
          // Step 4.3.1.2.3.1: Try all possible partitions
          dp[i][j] = Math.min(dp[i][j], 1 + dp[i][k] + dp[k + 1][j]);
        }
      }
    }
  }
  // Step 4.4: Return the minimum number of partitions required to make the string a polindrome
  return dp[0][n - 1];
}
// Step 5: Define the function to check if the current substring is a polindrome
function isPalindrome(s, i, j) {
  // Step 6: Check if the current substring is a polindrome
  while (i < j) {
    // Step 6.1: Check if the current substring is a polindrome
    if (s[i] !== s[j]) {
      return false;
    }
    // Step 6.2: Check if the current substring is a polindrome
    i++;
    // Step 6.3: Check if the current substring is a polindrome
    j--;
  }
  // Step 6.4: Check if the current substring is a polindrome
  // If the current substring is a polindrome, return true
  return true;
}
// Step 7: Define the main function
let s = "geek";
// Step 7.1: Call the function to find the minimum number of partitions required to make the string a polindrome
console.log(part(s));
