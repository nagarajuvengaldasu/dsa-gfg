/*
 * Greedy Coin Change - Minimum number of coins to make amount
 * coins: array of denominations (e.g. [5, 10, 2, 1])
 * amount: target sum
 * Returns: minimum number of coins, or -1 if impossible
 *
 * Note: Greedy works only for canonical coin systems (e.g. [1,2,5,10]).
 * For arbitrary coins, use dynamic programming.
 */

function minCoins(coins, amount) {
  // Sort the coins in descending order
  coins.sort((a, b) => b - a); // Sort descending (largest first)

  let res = 0; // Initialize the result

  for (let i = 0; i < coins.length; i++) {
    let x = coins[i]; // Get the current coin

    if (x <= amount) {
      let C = Math.floor(amount / x); // How many of coin x we can use
      // Add the number of coins to the result
      res += C;
      // Subtract the value of the coins from the amount
      amount -= C * x;
      // If the amount is 0, break the loop

      if (amount === 0) break;
    }
  }

  // If the amount is 0, return the result, otherwise return -1
  return amount === 0 ? res : -1;
}

// Example: amount = 57, coins = [5, 10, 2, 1]
// Sorted: [10, 5, 2, 1]
// x=10: C=5, res=5, amount=7
// x=5:  C=1, res=6, amount=2
// x=2:  C=1, res=7, amount=0 → return 7
console.log(minCoins([5, 10, 2, 1], 57)); // 7
