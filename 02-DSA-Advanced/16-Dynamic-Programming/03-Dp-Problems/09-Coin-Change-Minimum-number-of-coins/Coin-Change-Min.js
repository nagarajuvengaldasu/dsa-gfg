/*
Problem: Find the minimum number of coins to make a sum with given coins
Time Complexity: O(n*sum)
Space Complexity: O(sum)
*/

class Solution {
  // Step 1: Initialize the coinChange function
  coinChange(coins, numberOfCoins, value) {
    // Step 1.1: Initialize the dp array
    let dp = new Array(value + 1).fill(Infinity);
    // Step 1.2: Initialize the dp array
    dp[0] = 0;
    // Step 1.3: Iterate through the amount
    for (let amount = 1; amount <= value; amount++) {
      // Step 1.3.1: Iterate through the coins
      for (let i = 0; i < numberOfCoins; i++) {
        // Step 1.3.1.1: Check if the amount is greater than the coin
        if (amount >= coins[i]) {
          // Step 1.3.1.1.1: Update the dp array
          dp[amount] = Math.min(dp[amount], dp[amount - coins[i]] + 1);
        }
      }
    }
    // Step 1.4: Return the dp array
    return dp[value] === Infinity ? -1 : dp[value];
  }
}
// Step 2: Initialize the sol object
let sol = new Solution();
// Step 3: Initialize the coins array
let coins = [1, 2, 3];
// Step 4: Initialize the numberOfCoins variable
let numberOfCoins = 3;
// Step 5: Initialize the value variable
let value = 4;
// Step 6: Call the coinChange function
console.log(sol.coinChange(coins, numberOfCoins, value));
