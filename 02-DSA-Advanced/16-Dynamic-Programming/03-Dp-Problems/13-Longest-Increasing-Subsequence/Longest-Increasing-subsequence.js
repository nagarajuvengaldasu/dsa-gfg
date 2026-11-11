/**
 * Longest Increasing Subsequence
 * Problem: Find the length of the longest increasing subsequence in an array.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * KEY INSIGHT: Use dynamic programming to store the length of the longest increasing subsequence for each element.
 */

class Solution {
  // Step 1: Initialize the solution class
  lis(arr) {
    const n = arr.length;
    // Step 3: If the array is empty, return 0
    if (n === 0) {
      return 0;
    }
    // Step 2: Initialize the dp array
    const dp = new Array(n).fill(1);

    // Step 4: Initialize the max length
    let maxlen = 1;
    // Step 5: For each element, find the longest increasing subsequence
    for (let i = 0; i < n; i++) {
      // Step 5a: For each element, find the longest increasing subsequence
      for (let j = 0; j < i; j++) {
        // Step 5b: If the current element is less than the previous element, update the dp array
        if (arr[i] < arr[j]) {
          // Step 5c: Update the dp array
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
      // Step 6: Update the max length
      maxlen = Math.max(maxlen, dp[i]);
    }
    // Step 7: Return the max length
    return maxlen;
  }
}
// Step 8: Create a new solution object
let arr = [10, 9, 2, 5, 3, 7, 101, 18];
let solution = new Solution();
// Step 9: Call the lis method with the input array
console.log(solution.lis(arr));
// Step 10: Print the result
