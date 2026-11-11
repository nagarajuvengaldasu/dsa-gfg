/**
 * Function to find the maximum value that can be obtained using the given weights and values
 * @param {number[]} wt - The weights of the items
 * @param {number[]} val - The values of the items
 * @param {number} w - The maximum weight capacity of the knapsack
 * @returns {number} - The maximum value that can be obtained
 */
// Step 1: Initialize the dp array
function knapsack(wt, val, w) {
  // Step 2: Initialize the length of the items
  let n = wt.length;
  // Step 3: Initialize the dp array
  let dp = new Array(n + 1);
  // Step 4: Initialize the dp array with 0
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(w + 1).fill(0);
  }
  // Step 5: Fill the dp array
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      // Step 5a: If the weight of the item is less than or equal to the maximum weight capacity
      if (wt[i - 1] <= j) {
        // Step 5b: Calculate the maximum value that can be obtained using the given weights and values
        dp[i][j] = Math.max(
          val[i - 1] + dp[i - 1][j - wt[i - 1]],
          dp[i - 1][j],
        );
      } else {
        // Step 5c: If the weight of the item is greater than the maximum weight capacity
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  // Step 6: Return the maximum value that can be obtained
  return dp[n][w];
}

let wt = [10, 20, 30];
// Step 7: Initialize the values of the items
let val = [60, 100, 120];
// Step 8: Initialize the maximum weight capacity of the knapsack
let w = 50;
// Step 9: Print the maximum value that can be obtained
console.log(knapsack(wt, val, w));
