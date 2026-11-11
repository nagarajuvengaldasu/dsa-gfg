/**
 * ROPE CUTTING PROBLEM - DP SOLUTION
 * Problem: Given a rope of length n, and three lengths a, b, and c,
 * find the maximum number of pieces that can be made by cutting the rope.
 * Each cut must be of length a, b, or c.
 *
 * Time Complexity: O(n) - linear, as we iterate through the rope length
 * Space Complexity: O(n) - maximum depth of recursion stack is n
 */

function ropeCutting(n, a, b, c) {
  // then create a dp array of size n+1 and fill it with -1
  let dp = new Array(n + 1).fill(-1);
  // then set the base case
  dp[0] = 0;
  // then iterate through the rope length
  for (let i = 1; i <= n; i++) {
    // then check if the rope length is greater than or equal to the length a
    if (i - a >= 0) {
      // then set the dp value to the maximum of the current dp value and the dp value of the length a
      dp[i] = Math.max(dp[i], dp[i - a]);
    }
    // then check if the rope length is greater than or equal to the length b
    if (i - b >= 0) {
      // then set the dp value to the maximum of the current dp value and the dp value of the length b
      dp[i] = Math.max(dp[i], dp[i - b]);
    }
    // then check if the rope length is greater than or equal to the length c
    if (i - c >= 0) {
      // then set the dp value to the maximum of the current dp value and the dp value of the length c
      dp[i] = Math.max(dp[i], dp[i - c]);
    }
    // then check if the rope length is not -1
    if (dp[i] !== -1) {
      // then add 1 to the result
      dp[i]++;
    }
  }
  // then return the maximum number of pieces that can be made by cutting the rope
  return dp[n];
}

// then test the function
let n = 5;
let a = 21;
let b = 2;
let c = 3;
console.log(ropeCutting(n, a, b, c));
