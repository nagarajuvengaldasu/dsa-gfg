/**
 * Function to find the maximum value that can be obtained using the given array
 * @param {number[]} arr - The array of values
 * @returns {number} - The maximum value that can be obtained
 */
// Step 1: Initialize the dp array
function maxval(arr) {
  let n = arr.length;
  // Step 2: Initialize the dp array
  let dp = new Array(n);
  // Step 3: Initialize the dp array
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }
  // Step 4: Initialize the dp array
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = Math.max(arr[i], arr[i + 1]);
  }
  // Step 5: Initialize the dp array
  for (let gap = 3; gap < n; gap = gap + 2) {
    // Step 5a: Initialize the dp array
    for (let i = 0; i + gap < n; i++) {
      let j = i + gap;
      // Step 5b: Initialize the dp array
      // Step 5b1: Initialize the dp array
      dp[i][j] = Math.max(
        // Step 5b1: Initialize the dp array
        arr[i] + Math.min(dp[i + 2][j], dp[i + 1][j - 1]),
        // Step 5b2: Initialize the dp array
        arr[j] + Math.min(dp[i][j - 2], dp[i + 1][j - 1]),
      );
    }
  }
  // Step 6: Return the dp array
  return dp[0][n - 1];
}
// Step 7: Test the function
let arr = [20, 5, 4, 6];
// Step 8: Print the maximum value that can be obtained
console.log(maxval(arr));
