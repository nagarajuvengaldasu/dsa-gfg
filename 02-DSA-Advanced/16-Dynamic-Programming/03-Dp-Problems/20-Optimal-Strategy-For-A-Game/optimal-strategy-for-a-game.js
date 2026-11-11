/**
 * Optimal Strategy for a Game
 * Problem: Given an array of numbers, find the maximum amount of money you can win by picking numbers from the array.
 * You can pick either the first or the last number in the array, and you can't pick the same number twice.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */
// Step 1: Initialize the solution class
// Step 2: Initialize the optimalStrategy function
class Solution {
  optimalStrategy(arr) {
    // Step 3: Initialize the length of the array
    const n = arr.length;
    // Step 4: Initialize the dp array
    const dp = new Array(n);
    // for each index, add the values to the dp array
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(0);
    }
    // for each index, add the values to the dp array
    for (let i = 0; i < n; i++) {
      dp[i][i] = arr[i];
    }
    // add the values to the dp array
    // for each length, add the values to the dp array
    for (let length = 2; length <= n; length++) {
      // add the values to the dp array
      for (let i = 0; i <= n - length; i++) {
        let j = i + length - 1;

        // add the values to the dp array
        let pickfirst =
          arr[i] +
          Math.min(
            i + 2 <= j ? dp[i + 2][j] : 0,
            i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0,
          );

        // add the values to the dp array
        let picklast =
          arr[j] +
          Math.min(
            i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0,
            i <= j - 2 ? dp[i][j - 2] : 0,
          );

        // add the values to the dp array
        dp[i][j] = Math.max(pickfirst, picklast);
      }
    }
    // return the values to the dp array
    return dp[0][n - 1];
  }
}

let solution = new Solution();
let arr = [8, 15, 3, 7];
console.log(solution.optimalStrategy(arr));
