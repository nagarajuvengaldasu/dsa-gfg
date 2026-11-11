/**
 * COIN CHANGE - NAIVE APPROACH
 * Problem: Given an array of coins and a target sum, count the number of ways
 * to make the sum using the given coins.
 * 
 * Time Complexity: O(2^n) - exponential, as we explore all possible combinations
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 * 
 * KEY INSIGHT: For each coin, we have two choices:
 * 1. Include the coin in the sum (reduce sum by coin value)
 * 2. Exclude the coin from the sum (keep sum unchanged)
 * */

function coinChange(coins, amount, sum) {
  // Step 1: Base Case - If the sum is exactly 0
  // This means we've found a valid combination, return 1 (count this combination)
  // Example: sum=0 → return 1 (empty combination sums to 0)
  if (sum === 0) {
    return 1;
  }
  // Step 2: Base Case - If the sum is negative
  // This means we've exceeded the target sum, return 0 (invalid combination)
  // Example: sum=-1 → return 0 (can't make -1 with positive coins)
  if (sum < 0) {
    return 0;
  }
  // Step 3: Base Case - If we've processed all coins
  // This means we've tried all possible combinations, return 0 (no valid combination)
  // Example: amount=0 → return 0 (can't make sum with 0 coins)
  if (amount === 0) {
    return 0;
  }
  // Step 4: Recursive Case - Try both choices for the current coin
  // 
  // Choice 1: Exclude the current coin (reduce amount by 1)
  //   - Recursively solve for remaining coins with the same sum
  //   - Call: coinChange(coins, amount - 1, sum)
  //   Example: coins=[1,2,3], amount=3, sum=4
  //            Exclude 3, solve for [1,2] with sum=4
  //
  // Choice 2: Include the current coin (reduce sum by coin value)
  //   - Use the current coin (coins[amount-1])
  //   - Reduce the target sum by the coin value
  //   - Recursively solve for remaining coins with reduced sum
  //   - Call: coinChange(coins, amount, sum - coins[amount-1])
  //   Example: coins=[1,2,3], amount=3, sum=4
  //            Include 3, solve for [1,2] with sum=4-3=1
  //
  // Total count = count from excluding + count from including
  // This explores all possible combinations and counts those that sum to target
  return (
    coinChange(coins, amount - 1, sum) +
    coinChange(coins, amount, sum - coins[amount - 1])
  );
}
let coins = [1, 2, 3];
let amount = 3;
let sum = 4;
console.log(coinChange(coins, amount, sum));

