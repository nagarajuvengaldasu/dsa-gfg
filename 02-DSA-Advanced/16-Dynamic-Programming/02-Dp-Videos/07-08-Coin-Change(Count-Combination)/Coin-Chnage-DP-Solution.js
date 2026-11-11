/**
 * COIN CHANGE - DP SOLUTION
 * Problem: Given an array of coins and a target sum, count the number of ways
 * to make the sum using the given coins.
 *
 * Time Complexity: O(n*sum) - linear, as we fill a 2D array of size (n+1)*(sum+1)
 * Space Complexity: O(n*sum) - space for the DP array
 *
 * KEY INSIGHT: For each coin, we have two choices:
 * 1. Include the coin in the sum (reduce sum by coin value)
 * 2. Exclude the coin from the sum (keep sum unchanged)
 */

function countways(coins, sum) {
  // first calculate the coins length
  let n = coins.length;
  // then create a 2D array to store the results
  let dp = new Array(n + 1);
  // then initialize the first column of the array to 1
  for (let i = 0; i <= n; i++) {
    // then initialize the first row of the array to 0
    dp[i] = new Array(sum + 1);
    // then initialize the first column of the array to 1
    dp[i][0] = 1;
  }
  // then initialize the first row of the array to 0
  for (let j = 1; j <= sum; j++) {
    dp[0][j] = 0;
  }
  // then fill the rest of the array
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      // then fill the rest of the array
      // if the coin value is less than or equal to the sum, then we can include the coin in the sum
      dp[i][j] = dp[i - 1][j];
      if (coins[i - 1] <= j) {
        // then add the result of the previous row and the current column to the current cell
        dp[i][j] += dp[i][j - coins[i - 1]];
      }
    }
  }
  // then return the result of the last cell of the array
  return dp[n][sum];
}
let coins = [1, 2, 3];
let sum = 4;
console.log(countways(coins, sum));
// Output: 4
// Explanation: There are 4 ways to make the sum 4:
// 1. 1+1+1+1
// 2. 1+1+2
// 3. 1+2+1
// 4. 2+1+1
