/**
 * Unique BST's
 * Problem: Given a number n, find the number of unique BST's that can be formed with n nodes.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
// Step 1: Initialize the solution class
// Step 2: Initialize the uniqueBST function with n
class Solution {
  uniqueBST(n) {
    // Step 3: Initialize the dp array
    const dp = new Array(n + 1).fill(0);
    // assign the 1 to the oth index
    dp[0] = 1;
    // assign the 1 to the 1st index
    dp[1] = 1;
    // Step 4: Initialize the dp array for each i
    for (let i = 2; i <= n; i++) {
      // Step 5: Initialize the dp array for each j
      for (let j = 1; j <= i; j++) {
        // Step 6: Initialize the dp array for each j
        // add the product of the left and right subtrees
        dp[i] += dp[j - 1] * dp[i - j];
      }
    }
    // Step 7: Return the number of unique BST's
    return dp[n];
  }
}

// Step 8: Create a new instance of the solution class
// Step 9: Initialize the uniqueBST function with n
// Step 10: Print the number of unique BST's
let solution = new Solution();
// Step 11: Initialize the n with 5
let n = 5;
// Step 11: Print the number of unique BST's
console.log(solution.uniqueBST(n));
