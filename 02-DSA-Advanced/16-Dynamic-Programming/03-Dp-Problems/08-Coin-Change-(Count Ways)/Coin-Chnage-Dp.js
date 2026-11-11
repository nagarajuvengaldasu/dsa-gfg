/*
Problem: Find the number of ways to make a sum with given coins
Time Complexity: O(n*sum)
Space Complexity: O(sum)
*/

// Step 1: Initialize the coinChange function
function coinChange(coins, sum) {
  // Step 1: Initialize the dp array
  let dp = new Array(sum + 1).fill(0);
  // Step 2: Initialize the dp array
  dp[0] = 1;
  // Step 2: Iterate through the coins
  // Step 2.1: Iterate through the coins
  for (let i = 0; i < coins.length; i++) {
    // Step 2.1: Iterate through the coins
    for (let j = coins[i]; j <= sum; j++) {
      // Step 2.1.1: Update the dp array
      dp[j] += dp[j - coins[i]];
    }
  }
  // Step 2.2: Return the dp array
  return dp[sum];
}
// Step 3: Initialize the coins array
let coins = [1, 2, 3];
let sum = 4;
// Step 4: Call the coinChange function
console.log(coinChange(coins, sum));
