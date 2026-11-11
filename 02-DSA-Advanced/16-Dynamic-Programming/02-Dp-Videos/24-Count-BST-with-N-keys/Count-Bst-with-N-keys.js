/*
COUNT BST WITH N KEYS - Dynamic Programming Solution
Problem: Given n keys, find the number of possible BSTs that can be formed.
Time Complexity: O(n^2)
Space Complexity: O(n)
*/
function countBST(n) {
  // Step 1: Create a 1D array to store the results of subproblems
  // dp[i] represents the number of possible BSTs that can be formed with i keys
  let dp = new Array(n + 1).fill(0);
  // Step 2: Initialize the base case
  // If there are no keys, there is only one possible BST
  // This is the empty BST
  dp[0] = 1;
  // Step 3: Fill the rest of the array
  // For each number of keys, we need to find the number of possible BSTs
  // We try placing each key as the root and count the number of possible BSTs
  for (let i = 1; i <= n; i++) {
    // For each number of keys, we need to find the number of possible BSTs
    // We try placing each key as the root and count the number of possible BSTs
    // We use the formula: dp[i] = dp[j] * dp[i-j-1]
    // Where j is the number of keys on the left side of the root
    // And i-j-1 is the number of keys on the right side of the root
    for (let j = 0; j < i; j++) {
      // We add the number of possible BSTs for the left side and the right side
      // We use the formula: dp[i] = dp[j] * dp[i-j-1]
      // Where j is the number of keys on the left side of the root
      // And i-j-1 is the number of keys on the right side of the root
      dp[i] = dp[i] + dp[j] * dp[i - j - 1];
    }
  }
  // Step 4: Return the result
  // The result is the number of possible BSTs that can be formed with n keys
  return dp[n];
}
let n = 5;
console.log(countBST(n));
