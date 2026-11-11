/**
 * Reach a Given Score
 * Problem: Given a target score, find the number of ways to reach the target score using the given moves.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
// Step 1: Initialize the solution class
// Step 2: Initialize the count function with n

class Solution {
  count(n) {
    // Step 3: Initialize the dp array with n+1 elements and fill it with 0
    const dp = new Array(n + 1).fill(0);
    // Step 4: Initialize the dp array with 0 at index 0
    dp[0] = 1;
    // Step 5: Initialize the moves array with 3, 5, 10
    const moves = [3, 5, 10];
    // Step 6: Iterate over the moves array
    for (const move of moves) {
      // Step 7: Iterate over the moves array
      for (let i = move; i <= n; i++) {
        // Step 8: Update the dp array with the sum of the current element and the element at the index of the current element minus the move
        dp[i] += dp[i - move];
      }
    }
    // Step 9: Return the dp array at index n
    return dp[n];
  }
}

// Step 10: Create a new instance of the solution class
// Step 11: Initialize the count function with n
// Step 12: Print the result
let solution = new Solution();
// Step 13: Initialize the n with 10
let n = 10;
console.log(solution.count(n));
