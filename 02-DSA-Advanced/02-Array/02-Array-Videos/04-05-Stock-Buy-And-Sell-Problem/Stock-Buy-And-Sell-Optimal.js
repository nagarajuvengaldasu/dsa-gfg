/**
 * Optimal Approach - Stock Buy and Sell Problem (Multiple Transactions Allowed)
 * Time Complexity: O(n) where n = array length
 * Space Complexity: O(1)
 *
 * Problem: Find maximum profit from buying and selling stocks multiple times.
 * You can buy and sell multiple times, but must sell before buying again.
 *
 * Algorithm (Greedy):
 * Since we can make multiple transactions, we should buy and sell whenever
 * there's a price increase. This captures all upward price movements.
 *
 * Key Insight: If price increases from day i-1 to day i, we should:
 * 1. Buy on day i-1
 * 2. Sell on day i
 * This is equivalent to buying on day 0 and selling on the highest day,
 * but allows us to capture multiple profit opportunities.
 */
function maxProfit(arr) {
  // Step 1: Initialize result to 0
  //   Track total profit from all transactions
  let res = 0;

  // Step 2: Traverse array from index 1 to end
  //   Compare each day's price with the previous day's price
  //   Example: arr = [1, 5, 3, 8, 12]
  for (let i = 1; i < arr.length; i++) {
    // Step 2a: If current day's price > previous day's price
    //   This represents a profitable transaction opportunity
    //   We should "buy" at previous day and "sell" at current day
    //   Example: arr[i] = 5, arr[i-1] = 1
    //   5 > 1? Yes → Profit = 5 - 1 = 4
    if (arr[i] > arr[i - 1]) {
      // Step 2b: Add profit from this transaction to total
      //   Profit = (current price - previous price)
      //   Example: res = 0, profit = 5 - 1 = 4
      //   res = 0 + 4 = 4
      res += arr[i] - arr[i - 1];
    }
    // If current price <= previous price, skip (not profitable to trade)
  }

  // Step 3: Return total profit
  //   This is the maximum profit achievable with multiple transactions
  return res;
}

// Step-by-step execution for maxProfit([1, 5, 3, 8, 12]):
//   Input: arr = [1, 5, 3, 8, 12]
//
//   Initialization:
//     res = 0
//
//   Iteration 1: i = 1
//     arr[i] = arr[1] = 5
//     arr[i-1] = arr[0] = 1
//     Check: arr[1] = 5 > arr[0] = 1? Yes ✓
//     Profit = arr[1] - arr[0] = 5 - 1 = 4
//     res = 0 + 4 = 4
//     Transaction: Buy at 1, Sell at 5 → Profit = 4
//
//   Iteration 2: i = 2
//     arr[i] = arr[2] = 3
//     arr[i-1] = arr[1] = 5
//     Check: arr[2] = 3 > arr[1] = 5? No ✗
//     Skip (not profitable)
//
//   Iteration 3: i = 3
//     arr[i] = arr[3] = 8
//     arr[i-1] = arr[2] = 3
//     Check: arr[3] = 8 > arr[2] = 3? Yes ✓
//     Profit = arr[3] - arr[2] = 8 - 3 = 5
//     res = 4 + 5 = 9
//     Transaction: Buy at 3, Sell at 8 → Profit = 5
//
//   Iteration 4: i = 4
//     arr[i] = arr[4] = 12
//     arr[i-1] = arr[3] = 8
//     Check: arr[4] = 12 > arr[3] = 8? Yes ✓
//     Profit = arr[4] - arr[3] = 12 - 8 = 4
//     res = 9 + 4 = 13
//     Transaction: Buy at 8, Sell at 12 → Profit = 4
//
//   Final result: 13
//
//   Summary of transactions:
//     1. Buy at 1, Sell at 5 → Profit = 4
//     2. Buy at 3, Sell at 8 → Profit = 5
//     3. Buy at 8, Sell at 12 → Profit = 4
//     Total Profit = 4 + 5 + 4 = 13
//
//   Verification:
//     This is optimal because we capture every price increase.
//     We cannot do better than capturing all upward movements.

let arr = [1, 5, 3, 8, 12];
console.log(maxProfit(arr));
