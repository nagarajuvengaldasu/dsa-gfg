/**
 * 0 - 1 Knapsack Problem
 * Problem: Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
 * In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively.
 * Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W.
 * You cannot break an item, either pick the complete item or don't pick it (0-1 property).
 *
 * Time Complexity: O(nW)
 * Space Complexity: O(W)
 */
class Solution {
  // Step 1: Initialize the solution class
  knapsack(w, val, wt) {
    const n = val.length;
    // Step 2: Initialize the dp array
    const dp = new Array(w + 1).fill(0);
    // Step 3: For each item, update the dp array
    for (let i = 0; i < n; i++) {
      // Step 3a: For each weight, update the dp array
      for (let j = w; j >= wt[i]; j--) {
        // Step 3c: Update the dp array
        dp[j] = Math.max(dp[j], dp[j - wt[i]] + val[i]);
      }
    }
    // Step 4: Return the maximum value
    return dp[w];
  }
}
// Step 5: Initialize the solution class
let solution = new Solution();
let w = 50;
let val = [60, 100, 120];
let wt = [10, 20, 30];
// Step 6: Print the maximum value
console.log(solution.knapsack(w, val, wt));
