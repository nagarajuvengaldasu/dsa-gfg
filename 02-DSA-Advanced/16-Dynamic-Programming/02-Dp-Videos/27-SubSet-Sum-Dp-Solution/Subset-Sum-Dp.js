/*
SUBSET SUM PROBLEM - Dynamic Programming Solution
Problem: Given an array of integers and a target sum, count the number of subsets
(non-empty or empty) whose elements sum to the target value.
Time Complexity: O(n × sum) - linear, as we fill the dp table
Space Complexity: O(n × sum) - additional space for the dp table
*/

function countss(arr, sum) {
  // Step 1: Initialize the dp table
  // - dp[i][j] represents the number of subsets of the first i elements that sum to j
  // - dp[0][0] = 1 because there is one empty subset that sums to 0
  // - dp[0][j] = 0 because there are no subsets of 0 elements that sum to j
  // - dp[i][0] = 1 because there is one empty subset that sums to 0
  // - dp[i][j] = dp[i-1][j] if arr[i-1] > j
  // - dp[i][j] = dp[i-1][j] + dp[i-1][j - arr[i-1]] if arr[i-1] <= j

  let n = arr.length;
  // Step 2: Create the dp table
  let dp = new Array(n + 1);
  // Step 2a: Initialize the first row of the dp table
  for (let i = 0; i <= n; i++) {
    // Step 2b: Initialize the first column of the dp table
    dp[i] = new Array(sum + 1);
  }
  // Step 2c: Initialize the first column of the dp table
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }
  // Step 2d: Initialize the rest of the dp table
  for (let j = 1; j <= sum; j++) {
    dp[0][j] = 0;
  }
  // Step 2e: Fill the dp table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      // Step 2e.1: If the current element is greater than the target sum, copy the value from the previous row
      if (j < arr[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // Step 2e.2: If the current element is less than or equal to the target sum, add the value from the previous row and the value from the previous row minus the current element
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]];
      }
    }
  }
  // Step 3: Return the value from the last cell of the dp table
  return dp[n][sum];
}
// Step 4: Return the value from the last cell of the dp table
let arr = [10, 20, 15];
let sum = 30;
console.log(countss(arr, sum));
