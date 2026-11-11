/**
 * Coin Change - Number of Ways
 * Problem: Given a list of coin denominations and a target amount, count the number of ways to make change for the target amount.
 *
 * Time Complexity: O(n * amount)
 * Space Complexity: O(amount)
 *
 * KEY INSIGHT: For each coin, we update the dp array to count the number of ways to make change for each amount up to the target.
 */

function coinChange(coins, numberOfCoins, value) {
  // Step 1: Initialize the dp array with 0s
  let dp = new Array(value + 1).fill(0);
  dp[0] = 1;
  // Step 2: For each coin, update the dp array
  for (let i = 0; i < numberOfCoins; i++) {
    // Step 3: For each amount, update the dp array
    for (let amount = coins[i]; amount <= value; amount++) {
      // Step 4: Update the dp array
      dp[amount] += dp[amount - coins[i]];
    }
  }
  // Step 5: Return the result
  return dp[value];
}
// Example usage:
let coins = [1, 2, 3];
let numberOfCoins = coins.length;
let value = 4;
console.log(coinChange(coins, numberOfCoins, value));
