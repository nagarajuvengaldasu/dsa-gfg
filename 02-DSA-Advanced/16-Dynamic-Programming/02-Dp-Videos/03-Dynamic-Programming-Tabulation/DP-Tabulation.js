// Tabulation approach

function fibTab(n) {
  // Initialize the dp array with null values
  let dp = new Array(n + 1);

  // Initialize the first two values of the dp array
  dp[0] = 0;
  // Initialize the second value of the dp array
  dp[1] = 1;
  // Initialize the rest of the dp array
  for (let i = 2; i <= n; i++) {
    // by adding the previous two values of the dp array to get the current value
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  // Return the last value of the dp array
  return dp[n];
}

// Test the tabulation approach
let n = 1;
// Print the result of the tabulation approach
console.log("Tabulation approach: ", fibTab(n));
