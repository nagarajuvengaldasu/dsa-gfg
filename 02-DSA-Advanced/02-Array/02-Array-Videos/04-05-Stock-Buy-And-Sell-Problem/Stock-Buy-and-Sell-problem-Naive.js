/**
 * Naive Approach - Stock Buy and Sell Problem (Multiple Transactions Allowed)
 * Time Complexity: O(2^n) - Exponential (recursive with overlapping subproblems)
 * Space Complexity: O(n) for recursion stack
 *
 * Problem: Find maximum profit from buying and selling stocks multiple times.
 * You can buy and sell multiple times, but must sell before buying again.
 *
 * Algorithm (Recursive):
 * 1. Try all possible buy and sell pairs
 * 2. For each profitable pair, recursively find maximum profit in:
 *    - Elements before buy index
 *    - Elements after sell index
 * 3. Return the maximum profit found
 */
function maxProfit(arr, b, e) {
  // Step 1: Base case - If start index >= end index, no profit possible
  //   b = beginning index, e = end index
  //   If b >= e, there are 0 or 1 elements, cannot make a transaction
  if (b >= e) return 0;

  // Step 2: Initialize result to 0
  //   Track the maximum profit found
  let res = 0;

  // Step 3: Try all possible buy positions (from b to e-1)
  //   For each buy position, try all possible sell positions (after buy)
  for (let i = b; i < e; i++) {
    // Step 3a: Try all possible sell positions (from i+1 to e)
    //   Sell must be after buy
    for (let j = i + 1; j <= e; j++) {
      // Step 3b: If selling price > buying price, this is a profitable transaction
      //   Example: arr[i] = 1, arr[j] = 5
      //   Profit from this transaction = 5 - 1 = 4
      if (arr[j] > arr[i]) {
        // Step 3c: Calculate profit from this transaction
        //   Profit = (sell price - buy price) + profit from before + profit from after
        //   - arr[j] - arr[i]: Profit from current transaction
        //   - maxProfit(arr, b, i-1): Maximum profit from elements before buy index
        //   - maxProfit(arr, j+1, e): Maximum profit from elements after sell index
        //   Example: arr = [1, 5, 3, 8, 12], i=0 (buy at 1), j=1 (sell at 5)
        //   curr = (5-1) + maxProfit([], 0, -1) + maxProfit([3,8,12], 2, 4)
        let curr =
          arr[j] - arr[i] + maxProfit(arr, b, i - 1) + maxProfit(arr, j + 1, e);

        // Step 3d: Update result with maximum profit found so far
        //   Keep track of the best profit
        res = Math.max(res, curr);
      }
    }
  }

  // Step 4: Return maximum profit found
  return res;
}

// Step-by-step execution for maxProfit([1, 5, 3, 8, 12], 0, 4):
//   Input: arr = [1, 5, 3, 8, 12], b = 0, e = 4
//
//   Call 1: maxProfit([1, 5, 3, 8, 12], 0, 4)
//     b=0 < e=4, continue
//     res = 0
//
//     Outer loop: i = 0 (buy at index 0, price = 1)
//       Inner loop: j = 1 to 4 (possible sell positions)
//         j=1: arr[1]=5 > arr[0]=1? Yes
//           curr = (5-1) + maxProfit([], 0, -1) + maxProfit([3,8,12], 2, 4)
//           = 4 + 0 + (recursive call)
//           → Need to calculate maxProfit([3,8,12], 2, 4)
//         j=2: arr[2]=3 > arr[0]=1? Yes
//           curr = (3-1) + 0 + maxProfit([8,12], 3, 4) = 2 + (recursive)
//         j=3: arr[3]=8 > arr[0]=1? Yes
//           curr = (8-1) + 0 + maxProfit([12], 4, 4) = 7 + 0 = 7
//         j=4: arr[4]=12 > arr[0]=1? Yes
//           curr = (12-1) + 0 + 0 = 11
//
//     Outer loop: i = 1 (buy at index 1, price = 5)
//       Inner loop: j = 2 to 4
//         j=2: arr[2]=3 > arr[1]=5? No
//         j=3: arr[3]=8 > arr[1]=5? Yes
//           curr = (8-5) + maxProfit([1], 0, 0) + maxProfit([12], 4, 4)
//           = 3 + 0 + 0 = 3
//         j=4: arr[4]=12 > arr[1]=5? Yes
//           curr = (12-5) + 0 + 0 = 7
//
//     Outer loop: i = 2 (buy at index 2, price = 3)
//       Inner loop: j = 3 to 4
//         j=3: arr[3]=8 > arr[2]=3? Yes
//           curr = (8-3) + maxProfit([1,5], 0, 1) + maxProfit([12], 4, 4)
//           = 5 + (recursive) + 0
//         j=4: arr[4]=12 > arr[2]=3? Yes
//           curr = (12-3) + (recursive) + 0 = 9 + (recursive)
//
//     Outer loop: i = 3 (buy at index 3, price = 8)
//       Inner loop: j = 4
//         j=4: arr[4]=12 > arr[3]=8? Yes
//           curr = (12-8) + maxProfit([1,5,3], 0, 2) + 0 = 4 + (recursive)
//
//   Note: This recursive approach explores all possible transaction combinations
//   The optimal solution would find: Buy at 1, Sell at 5 (+4), Buy at 3, Sell at 8 (+5),
//   Buy at 8, Sell at 12 (+4) = Total profit = 13
//   But more efficiently: Buy at 1, Sell at 5 (+4), Buy at 3, Sell at 12 (+9) = 13
//   Or: Buy at 1, hold until 12 = 11, but with multiple transactions = 13

let arr = [1, 5, 3, 8, 12];
let b = 0;
let e = arr.length - 1;
console.log(maxProfit(arr, b, e));
